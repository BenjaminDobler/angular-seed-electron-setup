/**
 * Created by benjamindobler on 04.03.17.
 */
var exec: any = require('child_process').exec;
import {join} from 'path';

import Config from '../../config';


/**
 * We 'reinstall the node modules here because coping them from src is giving an error.
 * Probably a bug with gulp? Copying would be faster so should be revisited!
 */
export = (cb: any) => {
  exec('npm install', {
    cwd: join(Config.PROJECT_ROOT, 'electron', 'dist')
  }, function (err: any, stdout: any, stderr: any) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
};
