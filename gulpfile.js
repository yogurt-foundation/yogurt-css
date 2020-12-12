const autoPrefixer = require('autoprefixer')
const gulp = require('gulp')
const gutil = require('gulp-util')
const postCss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const sourcemaps = require('gulp-sourcemaps')
const sizereport = require('gulp-sizereport')
const stringReplace = require('gulp-replace')
const gzip = require('gulp-gzip')

const newVersion = '1.1.4'

const srcScssPath = 'src/yogurt.scss'
const distCssPath = 'dist'


// outputStyle: `expanded` for debugging,
// `compressed` for production.

const minifiedOutput = 'yogurt-' + newVersion + '_solidcore.min.css'
gulp.task('sass-min', () => {
  return gulp.src(srcScssPath)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(postCss([autoPrefixer()]))
    .pipe(rename(minifiedOutput))
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


const regularOutput = 'yogurt-' + newVersion + '_solidcore.css'
gulp.task('sass-raw', () => {
  return gulp.src(srcScssPath)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'expanded' })
      .on('error', sass.logError))
    .pipe(postCss([autoPrefixer()]))
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


gulp.task('sass-scss', () => {
  const SCSSOutput = './yogurt.scss'
  const distScssPath = './'
  return gulp.src(srcScssPath)
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(postCss([autoPrefixer()]))
    .pipe(rename(SCSSOutput))
    .pipe(gulp.dest(distScssPath))
})


const { version } = require('./package.json')
gulp.task('package-json', () => {
  return gulp.src('./package.json')
    .pipe(stringReplace(version, newVersion))
    .pipe(gulp.dest('.'))
})
gulp.task('yogurt-scss', () => {
  return gulp.src('./src/yogurt.scss')
    .pipe(stringReplace(version, newVersion))
    .pipe(gulp.dest('./src/'))
})
gulp.task('readme-md', () => {
  return gulp.src('./README.md')
    .pipe(stringReplace(version, newVersion))
    .pipe(gulp.dest('.'))
})


gulp.task('build', gulp.series(
  // update-version
  'package-json',
  'yogurt-scss',
  'readme-md',
  // ---
  'sass-raw',
  'sass-min',
  'sass-scss'
))


gulp.task('update-version', gulp.series(
  'package-json',
  'yogurt-scss',
  'readme-md'
))


gulp.task('watch', gulp.series([
  'sass-raw',
  'sass-min',
  'sass-scss'
], () => {

  const watchSrcScssPath = 'src/**/**/**/**/*.scss'
  gulp.watch(watchSrcScssPath,
    gulp.series([
      'sass-raw',
      'sass-min',
      'sass-scss'
    ])
  )

}))
