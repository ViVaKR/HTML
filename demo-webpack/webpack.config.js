// webpack config
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: 'development',
    entry: {
        // 'main' 엔트리 포인트
        main: './src/js/index.js',
        // 'about' 엔트리 포인트
        about: './src/js/about.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        open: true,
        port: 8081,
        watchFiles: [
            'src/**/*.html',
            'src/**/*.js',
            'src/**/*.scss',
            'src/**/*.ts',
            'src/**/*.tsx'
        ],
        historyApiFallback: true,
        headers: {
            'X-Content-Type-Options': 'nosniff'
        }
    },
    resolve: {
        extensions: ['.js'],
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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // `sourceMap`은 소문자 `s`로 시작합니다.
                            sourceMap: true,
                            // `sassOptions`는 sass 관련 설정을 담는 올바른 속성 이름입니다.
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
        // --> index.html 을 위한 프로그인
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['main'],
            favicon: path.resolve(__dirname, 'src/public/favicons/favicon.ico')
        }),

        // --> 추가 페이지를 위한 새로운 플러그인 설정
        new HtmlWebpackPlugin({
            template: 'src/components/about.html',
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
}

export default config;


/*
    ? 동적으로 페이지 추가 하는 로직
*/

// const generatePage = async () => {
//     // 모든 html 찾기
//     const htmlFiles = await glob('src/**/*.html', { ignore: 'node_modules/**' });
//     const pages = htmlFiles.map(x => {
//         // 파일 경로에서 이름 추출 (예: 'src/components/about.html' -> 'components/about)
//         const name = path.relative('src', x).replace('.html', '').replace(/\\/g, '/');
//         return {
//             name,
//             htmlPath: x,
//             jsPath: `./src/js/${name}.js`
//         }

//     });

//     // 엔트리 및 플러그인 객체 초기화

//     const entries = {};
//     const htmlPlugins = [];

//     pages.forEach(page => {

//         // 해당 .js 파일이 존재하면  엔트리 포인트로 추가

//     })
// }

// // 동적 엔트리 및 플러그인 생성을 위한 함수
// const generatePages = async () => {
//     // 모든 HTML 파일 찾기
//     const htmlFiles = await glob('src/**/*.html', { ignore: 'node_modules/**' });
//     const pages = htmlFiles.map(filePath => {
//         // 파일 경로에서 이름 추출 (예: 'src/components/about.html' -> 'components/about')
//         const name = path.relative('src', filePath).replace('.html', '').replace(/\\/g, '/');

//         return {
//             name,
//             htmlPath: filePath,
//             jsPath: `./src/js/${name}.js`
//         };
//     });

//     // 엔트리 및 플러그인 객체 초기화
//     const entries = {};
//     const htmlPlugins = [];

//     pages.forEach(page => {
//         // 해당 .js 파일이 존재하면 엔트리 포인트로 추가
//         if (path.existsSync(path.resolve(__dirname, page.jsPath))) {
//             entries[page.name] = page.jsPath;
//         }

//         // HtmlWebpackPlugin 설정
//         htmlPlugins.push(
//             new HtmlWebpackPlugin({
//                 template: page.htmlPath,
//                 filename: `${page.name}.html`,
//                 chunks: [page.name],
//             })
//         );
//     });

//     return { entries, htmlPlugins };
// };

// const config = async () => {
//     const { entries, htmlPlugins } = await generatePages();

//     return {
//         mode: 'development',
//         entry: entries, // 동적으로 생성된 엔트리
//         output: {
//             filename: '[name].[contenthash].js',
//             chunkFilename: '[name].[contenthash].js',
//             path: path.resolve(__dirname, 'dist'),
//             clean: true
//         },
//         devServer: {
//             static: path.resolve(__dirname, 'dist'),
//             hot: true,
//             open: true,
//             port: 8081,
//             watchFiles: [
//                 'src/**/*.html',
//                 'src/**/*.js',
//                 'src/**/*.scss',
//                 'src/**/*.ts',
//                 'src/**/*.tsx'
//             ],
//             historyApiFallback: true,
//             headers: {
//                 'X-Content-Type-Options': 'nosniff'
//             }
//         },
//         resolve: {
//             extensions: ['.js'],
//             alias: {
//                 '@': path.resolve(__dirname, 'src'),
//                 'js': path.resolve(__dirname, 'src/js'),
//                 'assets': path.resolve(__dirname, 'src/public/assets')
//             }
//         },
//         module: {
//             rules: [
//                 {
//                     test: /\.(ts|tsx)$/i,
//                     use: 'ts-loader',
//                     exclude: /node_modules/
//                 },
//                 {
//                     test: /\.(js|jsx)$/i,
//                     loader: 'babel-loader',
//                 },
//                 {
//                     test: /\.css$/,
//                     use: ['style-loader', 'css-loader']
//                 },
//                 {
//                     test: /\.(scss)$/,
//                     use: [
//                         MiniCssExtractPlugin.loader,
//                         {
//                             loader: 'css-loader',
//                         },
//                         {
//                             loader: 'postcss-loader',
//                         },
//                         {
//                             loader: 'sass-loader',
//                             options: {
//                                 sourceMap: true,
//                                 sassOptions: {
//                                     quietDeps: true
//                                 }
//                             }
//                         }
//                     ]
//                 }
//             ]
//         },
//         plugins: [
//             ...htmlPlugins, // 동적으로 생성된 HtmlWebpackPlugin 플러그인들을 스프레드
//             new CopyWebpackPlugin({
//                 patterns: [
//                     {
//                         from: path.resolve(__dirname, 'src/public/assets'),
//                         to: 'assets'
//                     }
//                 ]
//             }),
//             new MiniCssExtractPlugin({
//                 filename: '[name].[contenthash].css',
//                 chunkFilename: '[name].[contenthash].css'
//             }),
//             new webpack.HotModuleReplacementPlugin(),
//         ],
//     };
// };



// export default (env, argv) => {
//     return config;
// }
