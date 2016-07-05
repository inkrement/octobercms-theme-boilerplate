const gulp			= require('gulp');
const uglify		= require('gulp-uglify');
const concat		= require('gulp-concat');
const concat_css	= require('gulp-concat-css');
const minify		= require('gulp-minify-css');
const sass			= require('gulp-sass');
const autoprefix	= require('gulp-autoprefixer');
const notify		= require('gulp-notify');
const bower			= require('gulp-bower');
const run_sequence	= require('run-sequence');
const imagemin 		= require('gulp-imagemin');
const pngquant 		= require('imagemin-pngquant');
const flatten = require('gulp-flatten');

gulp.task('bower', function() {
	return bower();
});

gulp.task('vendor-scripts', ['bower'], function () {
	return gulp
		.src([
			'bower_components/jquery/dist/jquery.min.js'
		])
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('src/js/'))
		.pipe(notify({
		  message: 'vendor js'
		}));

});

gulp.task('vendor-scss', function() {
// vendor scss files are wired up in a vendor scss file to support variable declarations
  gulp.src('src/sass/vendor.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/vendor')).pipe(notify({
		  message: 'vendor scss compiled!'
		}));
});

gulp.task('vendor-css', ['bower', 'vendor-scss'], function () {
	//here you can add special css files or regex expressions
	var vendor_css_files = [
		'./src/css/vendor/vendor.css'
	];

	return gulp
		.src(vendor_css_files)
		.pipe(concat_css('vendor.css'))
		.pipe(gulp.dest('src/css/'))
		.pipe(notify({
		  message: 'vendor css'
		}));
});

gulp.task('vendor-fonts', ['bower'], function () {
	return gulp
	  .src('./bower_components/**/*.{eot,svg,ttf,woff,woff2}')
		.pipe(flatten())
		.pipe(gulp.dest('assets/fonts/'))
		.pipe(notify({
		  message: 'vendor fonts'
		}));

});

gulp.task('scripts', ['vendor-scripts'], function () {
	return gulp.src([
		'src/js/vendor.js',
		'src/js/main.js'
	])
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'))
	.pipe(notify({
	  message: 'all js minified and concatenated'
	}));
});

gulp.task('sass', ['vendor-css'], function () {
	return gulp.src('src/sass/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefix({
	  browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
	  cascade: false
	}))
	.pipe(minify())
	.pipe(gulp.dest('src/css'))
	.pipe(notify({
	  message: 'all scss compiled'
	}));
});

gulp.task('css', ['sass'], function () {
	return gulp.src([
		'src/css/vendor.css',
		'src/css/bootstrap.css'
	])
	.pipe(concat_css('all.min.css'))
	.pipe(minify())
	.pipe(gulp.dest('assets/css'))
	.pipe(notify({
	  message: 'all css minified and concatenated'
	}));
});

gulp.task('image-min', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('assets/images'))
        .pipe(notify({
		  message: 'all images minified'
		}));
});

gulp.task('watch', function () {
	gulp.watch('src/images/*.*', ['image-min']);
	gulp.watch('src/js/*.*', ['scripts']);
	gulp.watch('src/sass/*.*', ['css']);
});

gulp.task('default', function() {
	run_sequence('bower', 'image-min', 'vendor-fonts', 'vendor-scss', 'vendor-css', 'css', 'scripts');
});
