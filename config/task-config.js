module.exports = {
  html:         false,
  images:       false,
  fonts:        false,
  static:       false,
  svgSprite:    false,
  ghPages:      false,

  stylesheets:  {
    sass: {
      sourceMap: true,
    },
  },

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      uswds: [ 'start.js' ]
    }
  },

  customizeWebpackConfig: (config, env, webpack) => {
    if (env === 'production') {
      config.devtool = 'sourcemap';
    }
  },

  browserSync: {
    server: {
      baseDir: 'dist',
    },
  },

  production: {
    rev: false,
  }
}

