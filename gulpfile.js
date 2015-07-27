var gulp 			= require('gulp');
var uglify 			= require('gulp-uglify');
var concat 			= require('gulp-concat');
var concat_css 		= require('gulp-concat-css');
var minify 			= require('gulp-minify-css');
var sass 			= require('gulp-sass');
var autoprefix 		= require('gulp-autoprefixer');
var notify 			= require('gulp-notify');

var config = {
  src_dir: 		'src',
  bower_dir: 	'bower_components',
  dist_dir: 	'assets'
};

gulp.task('components', function() {
	gulp.src([
		// all required css files from bower_components
		config.bower_dir + '/just-grid-it/css/just-grid-it-all.min.css',
		config.bower_dir + '/swipebox/src/css/swipebox.min.css',
		config.bower_dir + '/jQuery.mmenu/dist/css/jquery.mmenu.all.css',
		config.bower_dir + '/fontawesome/css/font-awesome.min.css'
	])
	.pipe(gulp.dest(config.src_dir + '/css'));
	gulp.src([
		// all required js files from bower_components
		config.bower_dir + '/jQuery/dist/jquery.min.js',
		config.bower_dir + '/swipebox/src/js/jquery.swipebox.min.js',
		config.bower_dir + '/jQuery.mmenu/dist/js/jquery.mmenu.min.all.js'
	])
	.pipe(gulp.dest(config.src_dir + '/js'));
	gulp.src([
		// all required font files from bower_components
		config.bower_dir + '/fontawesome/fonts/*.*'
	])
	.pipe(gulp.dest(config.dist_dir + '/fonts'))
	.pipe(notify({
		message: 'all defined bower component files copied to set dirs'
	}));
});

gulp.task('scripts', function () {
	return gulp.src('src/js/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'))
	.pipe(notify({
      message: 'all js minified and concatenated'
    }));
});

gulp.task('sass', function () {
	return gulp.src('src/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefix({
      browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
      cascade: false
    }))
//    .pipe(minify())
	.pipe(gulp.dest('assets/css'))
	.pipe(notify({
      message: 'all scss compiled'
    }));
});

gulp.task('css', function () {
	return gulp.src('src/css/*.css')
	.pipe(concat_css('all.min.css'))
	.pipe(minify())
	.pipe(gulp.dest('assets/css'))
	.pipe(notify({
      message: 'all css minified and concatenated'
    }));
});

gulp.task('watch', function () {
	return gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'css', 'scripts']);