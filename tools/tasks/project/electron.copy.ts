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
  return gulp.src([Config.PROD_DEST + '/**/**'], {base: 'dist/prod'})
    .pipe(gulp.dest(join(Config.PROJECT_ROOT, 'electron', 'dist')));
};

