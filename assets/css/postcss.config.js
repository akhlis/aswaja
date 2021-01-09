const themeDir = __dirname + '/../../';

const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        themeDir + 'layouts/**/*.html',
        'layouts/**/*.html',
        'content/**/*.html',
    ],
    safelist: ['table', 'th', 'tr', 'td', 'w-screen', 'h-screen', 'max-w-screen-lg', 'left-6', 'right-6', 'bottom-8', 'pt-12', 'lg:pt-20', 'col-span-9', 'lg:col-span-11', 'overflow-y-auto', 'bottom-0', 'border-gray-600', 'hover:border-red-500', 'swiper-pagination-bullet', 'swiper-pagination-bullet-active', 'autoComplete_result', 'autoComplete_highlighted', 'autoComplete_selected'],
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
        require('tailwindcss')('assets/css/tailwind.config.js'),
        require('postcss-nested'),
        require('postcss-reporter'),
        require('autoprefixer'),
        ...process.env.HUGO_ENVIRONMENT === 'production'
        ? [purgecss]
        : []
    ]
}