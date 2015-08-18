var gulp 			= require('gulp');
var uglify 			= require('gulp-uglify');
var concat 			= require('gulp-concat');
var concat_css 		= require('gulp-concat-css');
var minify 			= require('gulp-minify-css');
var sass 			= require('gulp-sass');
var autoprefix 		= require('gulp-autoprefixer');
var notify 			= require('gulp-notify');
var bower          	= require('gulp-bower');
var bower_files 	= require('main-bower-files');
var order          	= require('gulp-order');

gulp.task('bower', function() {
    return bower();
});

gulp.task('vendor-scripts', ['bower'], function () {

    // Bower scripts
    var bower_scripts = bower_files('**/*.js');

    return gulp 
        .src(bower_scripts)
        .pipe(order([
            'jquery.min.js',
            '**/*.js'
        ]))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('src/js/'))
        .pipe(notify({
	      message: 'vendor js'
	    }))

});

gulp.task('vendor-css', ['bower'], function () {
    
    // Bower css
    var bower_css = bower_files('**/*.css');

    return gulp 
        .src(bower_css)
        .pipe(concat_css('vendor.css'))
        .pipe(gulp.dest('src/css/'))
        .pipe(notify({
	      message: 'vendor css'
	    }));

});

gulp.task('vendor-fonts', ['bower'], function () {
    
    // Bower fonts
    var bower_fonts = bower_files('**/fonts/*.*');

    return gulp 
        .src(bower_fonts)
        .pipe(gulp.dest('dist/fonts/'))       
        .pipe(notify({
	      message: 'vendor fonts'
	    }));

});

gulp.task('scripts', ['vendor-scripts'], function () {
	return gulp.src('src/js/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(notify({
      message: 'all js minified and concatenated'
    }));
});

gulp.task('sass', ['vendor-css'], function () {
	return gulp.src('src/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefix({
      browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
      cascade: false
    }))
    .pipe(minify())
	.pipe(gulp.dest('dist/css'))
	.pipe(notify({
      message: 'all scss compiled'
    }));
});

gulp.task('css', ['vendor-css'], function () {
	return gulp.src('src/css/*.css')
	.pipe(concat_css('all.min.css'))
	.pipe(minify())
	.pipe(gulp.dest('dist/css'))
	.pipe(notify({
      message: 'all css minified and concatenated'
    }));
});

gulp.task('watch', function () {
	return gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('default', ['vendor-fonts', 'sass', 'css', 'scripts']);