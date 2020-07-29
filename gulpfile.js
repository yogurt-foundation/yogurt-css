const autoPrefixer = require('autoprefixer')
const gulp = require('gulp')
const gutil = require('gulp-util')
const postCss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const sourcemaps = require('gulp-sourcemaps')
const sizereport = require('gulp-sizereport')
const gzip = require('gulp-gzip')

const { version } = require('./package.json')

const regularOutput = 'yogurt-' + version + '_solidcore.css'
const minifiedOuput = 'yogurt-' + version + '_solidcore.min.css'


// ...minify/preprocess scss

// outputStyle: `expanded` for debugging,
// `compressed` for production.

const srcScssPath = 'src/yogurt.scss'
const distCssPath = 'dist'
gulp.task('sass-min', () => {
  return gulp.src(srcScssPath)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(postCss([autoPrefixer()]))
    .pipe(rename(minifiedOuput))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(distCssPath))
    .pipe(gzip())
    .pipe(
      sizereport({
        gzip: true,
        total: false
      })
    )
    .pipe(gulp.dest(distCssPath))
})


gulp.task('sass-raw', () => {
  return gulp.src(srcScssPath)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'expanded' })
      .on('error', sass.logError))
    .pipe(rename(regularOutput))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(distCssPath))
    .pipe(gzip())
    .pipe(
      sizereport({
        gzip: true,
        total: false
      })
    )
    .pipe(gulp.dest(distCssPath))
})


// ...watch
const watchSrcScssPath = 'src/**/**/**/**/*.scss'
gulp.task('watch', gulp.series([
  'sass-raw',
  'sass-min',
  ], () => {
    gulp.watch(watchSrcScssPath,
      gulp.series([
        'sass-raw',
        'sass-min'
      ])
    )
  })
)
