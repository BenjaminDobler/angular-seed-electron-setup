/**
 * Created by benjamindobler on 04.03.17.
 */
import * as gulp from 'gulp';
import {join} from 'path';
import Config from '../../config';

const replace = require('gulp-replace');

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return gulp.src([
    join(join(Config.PROJECT_ROOT, 'electron', 'dist', 'index.html')),
  ])
    .pipe(replace('/assets', './assets'))
    .pipe(replace('/js', './js'))
    .pipe(replace('/css', './css'))
    .pipe(replace('<base href="/">', '<base href="./">'))
    .pipe(gulp.dest(join(Config.PROJECT_ROOT, 'electron', 'dist')));
};
