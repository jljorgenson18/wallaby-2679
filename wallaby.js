const path = require('path');

const styleLoader = {
  loader: 'style-loader',
  options: {
    injectType: 'singletonStyleTag',
  },
};

const moduleCSSLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 2,
    modules: {
      exportLocalsConvention: 'camelCase',
      localIdentName: '[local]_[hash:base64:5]',
    },
  },
};

const globalCSSLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 2,
    modules: false,
  },
};
const postCSSLoader = {
  loader: 'postcss-loader',
};
const lessLoader = {
  loader: 'less-loader',
  options: {
    sourceMap: false,
    lessOptions: {
      relativeUrls: false,
      strictMath: true,
    },
  },
};
const sassLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap: false,
    sassOptions: {
      includePaths: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules'),
      ],
    },
  },
};

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'src/**/*.+(css|less|scss|svg)', instrument: false, load: false },
    ],

    tests: [{ pattern: 'test/**/*.spec.ts', load: false }],

    postprocessor: wallaby.postprocessors.webpack({
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          },
          {
            test: /.less$/,
            oneOf: [
              {
                resourceQuery: /module/,
                use: [styleLoader, moduleCSSLoader, postCSSLoader, lessLoader],
              },
              {
                use: [styleLoader, globalCSSLoader, postCSSLoader, lessLoader],
              },
            ],
          },
          {
            test: /.s?css$/,
            oneOf: [
              {
                resourceQuery: /module/,
                use: [styleLoader, moduleCSSLoader, postCSSLoader, sassLoader],
              },
              {
                use: [styleLoader, globalCSSLoader, postCSSLoader, sassLoader],
              },
            ],
          },
        ],
      },
      resolve: {
        extensions: ['.ts', '.js'],
      },
    }),

    env: {
      kind: 'chrome',
    },

    setup: function () {
      window.__moduleBundler.loadTests();
    },
  };
};
