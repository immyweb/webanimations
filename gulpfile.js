var gulp        = require('gulp');
var gutil       = require('gulp-util');
var source      = require('vinyl-source-stream');
var babelify    = require('babelify');
var watchify    = require('watchify');
var exorcist    = require('exorcist');
var browserify  = require('browserify');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var nunjucksRender = require('gulp-nunjucks-render');
var data        = require('gulp-data');


// Watchify args contains necessary cache options to achieve fast incremental bundles.
// See watchify readme for details. Adding debug true for source-map generation.
watchify.args.debug = true;
// Input file.
var bundler = watchify(browserify('./app/js/app.js', watchify.args));

// Babel transform
bundler.transform(babelify.configure({
    sourceMapRelative: 'app/js',
    presets: ["es2015"]
}));

// On updates recompile
bundler.on('update', bundle);

function bundle() {

    gutil.log('Compiling JS...');

    return bundler.bundle()
        .on('error', function (err) {
            gutil.log(err.message);
            browserSync.notify("Browserify Error!");
            this.emit("end");
        })
        .pipe(exorcist('app/js/dist/bundle.js.map'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/js/dist'))
        .pipe(browserSync.stream({once: true}));
}

gulp.task('bundle', function () {
    return bundle();
});

// Static Server + watching scss/js/html files
gulp.task('serve', ['sass', 'bundle', 'nunjucks'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/templates/**/*.+(html|nunjucks)", ['nunjucks']);
    gulp.watch("app/data/*.json", ['nunjucks']);
    gulp.watch("app/scss/**/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Sass configuration options
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

// Auto-prefixer options
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

// nunjucks templating
gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/pages/**/*.+(html|nunjucks)')
        .pipe(data(function() {
            return require('./app/data/data.json')
        }))
        // Renders template with nunjucks
        .pipe(nunjucksRender({
            path: ['app/templates']
        }))
        // output files in app folder
        .pipe(gulp.dest('app'))
});


gulp.task('default', ['serve']);
