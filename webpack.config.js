const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const process = require('process');
const path = require('path');


const PAGES_DIR  = `${__dirname}/app/pages`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName)=> fileName.endsWith('.pug'));

const createAutoImport = async (path, isFirst, pathAutoImportFile) => {
    const importsFiles = [];

    await (async function autoImport (path, isFirst) {
        const allFilesCurDir = await fs.opendirSync(path);
        for await ( let el of allFilesCurDir){
            if(el.isDirectory()){
                await autoImport(`${path}/${el.name}`);
            }else{
                isFirst ? null : importsFiles.push(`${path}/${el.name}`);
            }
        }
    })(path, isFirst)

    const text = importsFiles.map((pathFile) => `import '${pathFile.replace(path, '.')}' ; \n`).join(``);
    await fs.writeFileSync(pathAutoImportFile, text);
}

module.exports = async () =>{

    const pathDirDev = `${__dirname}/public/dev`;
    await createAutoImport(pathDirDev, true, `${pathDirDev}/autoimport.js`);
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







