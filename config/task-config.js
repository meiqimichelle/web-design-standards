module.exports = {
  additionaTasks: {
    initialize: (gulp, PATH_CONFIG, TASK_CONFIG) => {
      gulp.task('docs', () => {
        return gulp.src(__dirname + '/*.md')
          .pipe(TASK_CONFIG.dest);
      });
    },
    production: {
      postbuild: [ 'docs' ],
    },
  },

  browserSync: {
    server: {
      baseDir: 'dist',
    },
  },

  customizeWebpackConfig: (config, env, webpack) => {
    if (env === 'production') {
      config.devtool = 'sourcemap';
    }
  },

  fonts:        true,
  ghPages:      false,
  html:         false,
  images:       true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      uswds: [ 'start.js' ]
    }
  },

  production: {
    rev: false,
  },

  static:       true,

  stylesheets:  {
    sass: {
      sourceMap: true,
    },
  },

  svgSprite:    false,

};
