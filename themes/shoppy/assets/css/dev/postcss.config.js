const themeDir = __dirname + '/../../../';

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
        require('postcss-reporter')
    ]
}