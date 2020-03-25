const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');


const PAGES_DIR  = `${__dirname}/app/pages`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName)=> fileName.endsWith('.pug'));

module.exports = async () =>{
    const files = await fs.readdirSync('./public/dev/js');

    return {
        mode: 'development',
            entry: './public/dev/main.js',
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-loader',
                    exclude: '/node-modules'
                }
            ]
        },
        plugins: [
            ...PAGES.map(page => new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/${page}`,
                filename: `./${page.replace(/\.pug/, '.html')}`
            }))
        ],
        devServer: {
            stats: 'errors-only',
                contentBase: path.join(__dirname, 'dist')
        }
    }
}







