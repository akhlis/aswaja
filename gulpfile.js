(() => {

  'use strict';

  /**************** Gulp.js 4 configuration ****************/

  const

    // development or production
    devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),

    // directory locations
    dir = {
      src: 'themes/shoppy/src/',
      build: 'themes/shoppy/static/',
      srcLayouts: 'themes/shoppy/layouts/',
      srcContent: 'content/'
    },

    // modules
    gulp = require('gulp'),
    del = require('del'),
    newer = require('gulp-newer'),
    size = require('gulp-size'),
    imagemin = require('gulp-imagemin'),
    postcss = require('gulp-postcss'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    purgecss = require('gulp-purgecss'),
    sourcemaps = devBuild ? require('gulp-sourcemaps') : null,
    browsersync = devBuild ? require('browser-sync').create() : null;


  console.log('Gulp', devBuild ? 'development' : 'production', 'build');

  /**
   * Custom PurgeCSS Extractor
   * https://github.com/FullHuman/purgecss
   */
  class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-z0-9-:\/]+/g);
    }
  }


  /**************** clean task ****************/

  function clean() {

    return del([dir.build]);

  }
  exports.clean = clean;
  exports.wipe = clean;


  /**************** images task ****************/

  const imgConfig = {
    src: dir.src + 'images/**/*',
    build: dir.build + 'images/',

    minOpts: {
      optimizationLevel: 5
    }
  };

  function images() {

    return gulp.src(imgConfig.src)
      .pipe(newer(imgConfig.build))
      .pipe(imagemin(imgConfig.minOpts))
      .pipe(size({
        showFiles: true
      }))
      .pipe(gulp.dest(imgConfig.build));

  }
  exports.images = images;


  /**************** CSS task ******************/

  const cssConfig = {

    src: dir.src + 'postcss/tailwind.css',
    srcAmp: dir.src + 'postcss/amp.css',
    watch: dir.src + 'postcss/**/*',
    build: dir.build + 'css/',
    srcLayouts: dir.srcLayouts + '**/*.html',
    tailwindJS: dir.src + 'tailwind.js',
    content: dir.srcContent + '**/*.md',

    postCSS: [
      require('postcss-assets')({
        loadPaths: ['images/'],
        basePath: dir.build
      }),
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-custom-media'),
      require('postcss-color-function'),
      require('postcss-custom-properties'),
      require('tailwindcss')('themes/shoppy/src/tailwind.js'),
      require('cssnano')
    ],
  };

  // remove unused selectors and minify production CSS
  if (!devBuild) {

    cssConfig.postCSS.push(
      require('usedcss')({
        html: ['index.html']
      }),
    );

  }

  function css() {
    return gulp.src(cssConfig.src)
      .pipe(sourcemaps ? sourcemaps.init({
        loadMaps: true
      }) : noop())
      .pipe(postcss(cssConfig.postCSS))
      // .pipe(sourcemaps ? sourcemaps.write('/dev/null', {
      //   addComment: false
      // }) : noop())
      .pipe(size({
        showFiles: true
      }))
      .pipe(rename("style.css"))
      .pipe(gulp.dest(cssConfig.build))
      .pipe(browsersync ? browsersync.reload({
        stream: true
      }) : noop());

  }
  exports.css = gulp.series(images, css);

  function cssAmp() {

    return gulp.src(cssConfig.srcAmp)
      .pipe(sourcemaps ? sourcemaps.init({
        loadMaps: true
      }) : noop())
      .pipe(postcss(cssConfig.postCSS))
      // .pipe(sourcemaps ? sourcemaps.write('/layouts/partials/null', {
      //   addComment: false
      // }) : noop())
      .pipe(rename("style.html"))
      .pipe(size({
        showFiles: true
      }))
      .pipe(gulp.dest('themes/shoppy/layouts/partials/'))
      .pipe(browsersync ? browsersync.reload({
        stream: true
      }) : noop());

  }
  exports.cssAmp = gulp.series(images, cssAmp);

  function purgeCSS() {
    return gulp.src(cssConfig.build + '/style.css')
      .pipe(
        purgecss({
          content: [cssConfig.srcLayouts, 'content/**/*.md', 'themes/shoppy/src/js/main/*.js', 'themes/shoppy/static/js/components/*.js'],
          whitelist: ['w-1/3', 'w-1/4', 'w-1/5', 'lg:w-1/2', 'lg:w-1/3', 'lg:w-2/3'],
          extractors: [{
            extractor: TailwindExtractor,
            extensions: ["html"]
          }]
        })
      )
      .pipe(rename("theme.min.css"))
      .pipe(size({
        showFiles: true
      }))
      .pipe(gulp.dest(cssConfig.build))
      .pipe(browsersync ? browsersync.reload({
        stream: true
      }) : noop());

  }
  exports.purgeCSS = gulp.series(images, purgeCSS);

  /**************** JS task ******************/

  const jsConfig = {

    srcMain: dir.src + 'js/main/*',
    src: dir.src + 'js/plugin/*',
    watchMain: dir.src + 'js/main/*',
    watch: dir.src + 'js/plugin/*',
    build: dir.build + 'js/',

  };

  function jsMain() {

    // return gulp.src(['src/js/partial/*.js', 'src/js/base.js'])
    return gulp.src(jsConfig.srcMain)
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(concat('main.js'))
      .pipe(gulp.dest(dir.src + 'js/plugin/'))

  }
  exports.jsMain = jsMain;

  function js() {

    return gulp.src(jsConfig.src)
      .pipe(concat('theme.min.js'))
      .pipe(gulp.dest(jsConfig.build))

  }
  exports.js = js;


  /**************** server task (now private) ****************/

  const syncConfig = {
    proxy: 'http://localhost:1313',
  };

  // browser-sync
  function server(done) {
    if (browsersync) browsersync.init(syncConfig);
    done();
  }


  /**************** watch task ****************/

  function watch(done) {

    // image changes
    // gulp.watch(imgConfig.src, images);

    // CSS changes
    gulp.watch(cssConfig.watch, css);
    // gulp.watch(cssConfig.watch, cssAmp);
    gulp.watch(cssConfig.watch, purgeCSS);
    gulp.watch(cssConfig.srcLayouts, purgeCSS);
    gulp.watch(cssConfig.tailwindJS, css);
    gulp.watch(cssConfig.tailwindJS, purgeCSS);
    gulp.watch(cssConfig.content, purgeCSS);

    // JS changes
    gulp.watch(jsConfig.watchMain, jsMain);
    gulp.watch(jsConfig.watch, js);

    done();

  }

  /**************** default task ****************/

  exports.default = gulp.series(exports.css, exports.purgeCSS, exports.jsMain, exports.js, watch, server);
  // exports.default = gulp.series(exports.css, exports.purgeCSS, watch, server);
  // exports.default = gulp.series(exports.css, exports.cssAmp, exports.purgeCSS, exports.jsMain, exports.js, watch, server);
  // exports.default = gulp.series(exports.css, exports.jsMain, exports.js, watch, server);

})();