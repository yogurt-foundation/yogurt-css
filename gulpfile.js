const autoPrefixer = require('autoprefixer')
const gulp = require('gulp')
const gutil = require('gulp-util')
const postCss = require('gulp-postcss')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')


// ...minify/preprocess scss
const srcScssPath = 'src/yogurt.scss'
const distCssPath = 'dist'
gulp.task('sass', () => {
  return gulp.src(srcScssPath)
    .pipe(sassGlob())
    // outputStyle: `expanded` for debugging,
    // `compressed` for production.
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(postCss([autoPrefixer()]))
    .pipe(gulp.dest(distCssPath))
})


// ...watch
const watchSrcScssPath = 'src/**/**/**/**/*.scss'
gulp.task('watch', gulp.series([

    'sass',

  ], () => {

    gulp.watch(watchSrcScssPath,
      gulp.series(['sass']))

  })

)
