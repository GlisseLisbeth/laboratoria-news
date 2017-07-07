var gulp = require('gulp');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var concat = require("gulp-concat");
var merge = require('merge-stream');
var uglify = require("gulp-uglify");
var pump = require("pump"); // solucionar error de uglify
var util = require("gulp-util");
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var coffee = require('gulp-coffee');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');


var config = {
  source: './src/',
  dist: './public/',
  static: '/node_modules/'
};
var paths = {
  assets: 'assets/',
  html: '**/*.html',
  sass: 'scss/**/*.scss',
  mainSass: 'scss/*.scss',
  mainJs: 'js/',
  img: 'img/*.*',
  font: 'font/*.*'
};
var sources = {
  assets:config.source + paths.assets,
  html:config.source + paths.html,
  sass:paths.assets + paths.sass,
  rootSass:config.source + paths.assets + paths.mainSass,
  rootJs: config.source + paths.assets + paths.mainJs,
  rootImg: config.source + paths.assets + paths.img,
  rootFont: config.source + paths.assets + paths.font
};

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

gulp.task('html',()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task("sass",function () {
      gulp.src(sources.rootSass)
      .pipe(sass({
        outputStyle:"compressed",
      }).on("error",sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest(config.dist + paths.assets +"css"))
      .pipe(notify('gulp css terminada'));

});

gulp.task("js",function () {
  var js = gulp.src([
                     sources.rootJs+'get-json.js',
                     sources.rootJs+'header.js',
                     sources.rootJs+'app.js'
                   ])
      .pipe(browserify())
      .pipe(concat("bundle.js"))
      .on('error', function (err) { util.log(util.colors.red('[Error]'), err.toString()); })
      .pipe(gulp.dest(config.dist + paths.assets +"js"))
      .pipe(notify('gulp js terminada'));
      var bootrstrap = gulp.src('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js')
                        .pipe(gulp.dest(config.dist + paths.assets + 'vendor'));
      return merge(js, bootrstrap);
});
gulp.task("img", function(){
  gulp.src(sources.rootImg).pipe(gulp.dest(config.dist + paths.assets + 'img'));
});

gulp.task("sass-watch",["sass"],function(done){
  browserSync.reload();
  done();
});

gulp.task("js-watch",["js"],function(done){
  browserSync.reload();
  done();
});

gulp.task("html-watch",["html"],function(done){
  browserSync.reload();
  done();
});

gulp.task("serve", function () {
  browserSync.init({
    server: {
        baseDir: config.dist
    }
  });
  gulp.watch(sources.html,['html-watch']);
  gulp.watch("./src/assets/scss/*.scss",['sass-watch']);
  gulp.watch("./src/assets/js/*.js",['js-watch']);
});
