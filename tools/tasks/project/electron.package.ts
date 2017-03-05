import {join} from 'path';
import Config from '../../config';

var electron = require('gulp-atom-electron');
var symdest = require('gulp-symdest');


/**
 * Created by benjamindobler on 04.03.17.
 */
var exec: any = require('child_process').exec;


export = (cb: any) => {
  exec('electron-packager . --out=' + join(Config.PROJECT_ROOT, 'electron', 'builds'), {
    cwd: join(Config.PROJECT_ROOT, 'electron', 'dist')
  }, function (err: any, stdout: any, stderr: any) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
};
