import type {Configuration} from 'webpack';
import {resolve} from 'path'
const config:Configuration = {
  mode:'production',
  entry: resolve(__dirname,`./electron/${process.env.ELECTRON_ENV}.ts`),
  resolve:{
    extensions:['.ts','...']
  },
  output: {
    path: resolve(__dirname, 'dist-electron'),
    filename: `${process.env.ELECTRON_ENV}.js`,
  },
  module:{
    rules:[
      {
        test: /\.ts$/,
        use: ['babel-loader','ts-loader']
      },
    ],
  },
  target:`electron-${process.env.ELECTRON_ENV}`
};
export default config;