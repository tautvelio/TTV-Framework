var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

gulp.task('scripts', function() {
	gulp.src([
			'./js/config.js',
			'./js/controller.js',
			'./js/model.js',
			'./js/route.js',
			'./js/router.js',
			'./js/view.js'
		])
		.pipe(concat('framework.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'));
});

gulp.task('default', ['scripts']);