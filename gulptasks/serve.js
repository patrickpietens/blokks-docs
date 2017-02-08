'use strict';

const isProduction = process.env.NODE_ENV !== 'development';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');

gulp.task('serve', (callback) => {
    if (isProduction) {
        return callback();
    }

    // const syncOptions = {
    //     host: 'docs.blokks.dev',
    //     open: false,
    //     proxy: 'docs.blokks.dev',
    //     reloadDebounce: 2500,
    // };

    const syncOptions = {
        reloadDebounce: 2500,
        server: {
            baseDir: './dist',
        },
    };

    browserSync.init(syncOptions, () => {
        const copySources = [
            'src/static/**/*',
            'src/static/.htaccess',
            '!src/static/scripts/**/*',
            '!src/static/styles/**/*',
            '!src/static/images/**/*',
        ];

        const contentSources = ['src/content/**/*'];
        const htmlSources = ['src/layouts/**/*'];
        const scriptSources = ['src/static/scripts/**/*'];
        const stylesSources = ['src/static/styles/**/*.css'];
        const imageSources = ['src/static/images/**/*.{gif,png,jpg,jpeg}'];
        const svgSources = ['src/static/images/**/*.svg'];

        const inject = () => gulp.src(stylesSources).pipe(browserSync.stream());
        const reload = () => browserSync.reload();

        gulp.watch(copySources, () => runSequence('copy', 'hugo', reload));
        gulp.watch(contentSources, () => runSequence('hugo', reload));
        gulp.watch(htmlSources, () => runSequence('html', 'hugo', reload));
        gulp.watch(scriptSources, () => runSequence('scripts', 'hugo', reload));
        gulp.watch(stylesSources, () => runSequence('styles', 'hugo', inject));
        gulp.watch(imageSources, () => runSequence('images', 'hugo', reload));
        gulp.watch(svgSources, () => runSequence('svg', 'hugo', reload));

        callback();
    });
});
