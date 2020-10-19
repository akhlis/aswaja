const themeDir = __dirname + '/../../';
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        themeDir + 'layouts/**/*.html',
        themeDir + 'exampleSite/content/**/*.html',
        'layouts/**/*.html',
        'content/**/*.html',
    ],
    whitelist: ['max-w-screen-lg', 'pt-16-9', 'animate-fadeInDown', 'autoComplete_result', 'autoComplete_highlighted', 'autoComplete_selected'],
    // This is the function used to extract class names from your templates
    defaultExtractor: content => {
        // Capture as liberally as possible, including things like `h-(screen-1.5)`
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
        // Capture classes within other delimiters like .block(class="w-1/2") in Pug
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
        return broadMatches.concat(innerMatches)
    }
})

module.exports = {    
    plugins: [        
        require('postcss-import')({
            path: [themeDir + 'assets/css/**/*.css']
        }), 
        require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
        require('postcss-nested'),
        require('autoprefixer')({
            path: [themeDir]
        }),
        require('postcss-reporter'),
        //purgecss
    ]
}