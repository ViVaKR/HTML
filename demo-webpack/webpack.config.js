// config
// webpack config
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import { glob } from 'glob'; // 사용하지 않으므로 제거

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 개발 모드 여부 확인 (HMR 최적화를 위해)
const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
    mode: isDevelopment ? 'development' : 'production', // NODE_ENV에 따라 mode 설정
    performance: {
        hints: isDevelopment ? false : 'warning',
        maxAssetSize: 500 * 1024, // 500KiB
        maxEntrypointSize: 500 * 1024,

    },
    entry: {
        main: './src/js/index.js',
        about: './src/js/about.js'
    },
    output: {
        filename: isDevelopment ? '[name].js' : '[name].[contenthash].js', // 개발 시에는 캐시 무력화 방지
        chunkFilename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true, // HMR 활성화
        open: true,
        port: 8081,
        // watchFiles: [ // 이 설정은 특정 로더에 의존하지 않는 파일들 (예: html, css)을 감시하는데,
        //               // 이미 모듈 로더와 HMR이 처리하므로 불필요하거나 충돌을 일으킬 수 있음.
        //               // 특히 SCSS는 style-loader가 처리하므로 여기서 감시할 필요 없음.
        //     'src/**/*.html',
        // ],
        // 로더가 처리하는 파일들은 로더와 HMR이 알아서 처리하게 둡니다.
        // `watchFiles`는 로더가 처리하지 않는 추가적인 파일(예: 이미지 파일의 변경)을 감지할 때 유용.
        // HMR이 CSS, JS, HTML을 잘 처리하기 때문에 이 부분을 제거하거나 필요한 경우만 최소한으로 설정하는 것이 좋습니다.
        historyApiFallback: true,
        headers: {
            'X-Content-Type-Options': 'nosniff'
        }
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'], // .ts, .tsx 추가
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'js': path.resolve(__dirname, 'src/js'),
            'assets': path.resolve(__dirname, 'src/public/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
                options: { // Babel 프리셋 추가
                    presets: ['@babel/preset-env']
                },
                exclude: /node_modules/ // node_modules 제외
            },
            {
                test: /\.css$/,
                // 개발 시 style-loader, 배포 시 MiniCssExtractPlugin.loader
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: isDevelopment }
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, // 개발 시 style-loader
                    {
                        loader: 'css-loader',
                        options: { sourceMap: isDevelopment }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: isDevelopment }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment, // 개발 시에만 sourceMap 활성화
                            sassOptions: {
                                quietDeps: true
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'), // 절대 경로 사용
            filename: 'index.html',
            chunks: ['main'],
            favicon: path.resolve(__dirname, 'src/public/favicons/favicon.ico')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/components/about.html'), // 절대 경로 사용
            filename: 'about.html',
            chunks: ['about']
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/assets'),
                    to: 'assets'
                }
            ]
        }),
        // 개발 모드에서는 MiniCssExtractPlugin을 사용하지 않음 (HMR을 위해)
        // 배포 모드에서만 CSS 파일을 별도로 추출하도록 조건부 추가
        ...(!isDevelopment ? [new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css'
        })] : []),
        new webpack.HotModuleReplacementPlugin(),
    ],
}

export default config;
