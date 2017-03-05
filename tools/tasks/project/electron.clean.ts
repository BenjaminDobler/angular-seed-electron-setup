/**
 * Created by benjamindobler on 04.03.17.
 */
import Config from '../../config';
import { clean } from '../../utils';
import { join } from 'path';


/**
 * Executes the build process, cleaning all files within the `/dist/dev` and `dist/tmp` directory.
 */
export = clean([join(Config.PROJECT_ROOT,'electron','dist')]);
