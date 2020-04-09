// const path = require('path');

// module.exports = {
//     entry: './src/bootstrap.js',
//     output: {
//         path: path.resolve('public/js', 'dist'),
//         filename: 'app.js'
//     }
// }
const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./public/**/*.html", "./public/**/*.js", "/public/**/*.vue"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    module: {
        rules: [
            {
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('tailwindcss'),
                                require('autoprefixer'),
                                ...[purgecss]
                            ],
                        },
                    },
                ],
            }
        ],
    }
};