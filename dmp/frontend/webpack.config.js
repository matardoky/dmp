const { options } = require('less')
const path = require('path')
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    mode: "development",
    entry: {
        patient: "./src/index.js"

    },
    plugins: [
        new BundleTracker({
            path:__dirname,
            filename: './webpack-stats.json'
        })
    ], 
    output: {
        path: path.resolve(__dirname, "../static/bundles"),
        filename: 'dmp.[name].bundles.js'
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude:/(node_modules|bower_components)/,
                loader:"babel-loader",
                options:{ presets:["@babel/env"]}
            },
            {
                test:/\.(scss|less|css)/,
                use : [ "style-loader", "css-loader","less-loader", ],
            },

            // Custom theme for antd
            {   
                test: /\.less$/i,
                use:[{
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
                            modifyVars: {
                              'font-family':'Roboto, Palatino',
                              'primary-color': '#82a616',
                              'border-radius-base': '4px',
                              'text-color':'#141414',
                              'line-height-base':'1.75rem'
                            },
                            javascriptEnabled: true,
                        },
                    },
                
                },],
            },
          
           
        ],

    },
    resolve:{
        extensions:["*", ".js", ".jsx", "scss"], 
    },

}