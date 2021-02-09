const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'client/src/index.js'),
    output: {
        path: path.resolve(__dirname, 'client/dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'client'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: 'defaults',
                            }],
                            '@babel/preset-react',
                        ],
                    },
                }],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css'],
        symlinks: false,
    },
    watch: true,
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    }
};
