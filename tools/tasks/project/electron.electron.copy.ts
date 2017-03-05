/**
 * Created by benjamindobler on 04.03.17.
 */
import * as gulp from 'gulp';
import {join} from 'path';

import Config from '../../config';


/**
 * This sample task copies all TypeScript files over to the appropriate `dist/dev|prod|test` directory, depending on the
 * current application environment.
 */
export = () => {
  //gulp.src([join(Config.PROJECT_ROOT,'electron','src')+"**/**"],{base:"electron/src"}) // use this to copy also node_modules (gives error right now :-()
  return gulp.src([join(Config.PROJECT_ROOT, 'electron', 'src') + '/*'], {base: 'electron/src'})
    .pipe(gulp.dest(join(Config.PROJECT_ROOT, 'electron', 'dist')));
};

