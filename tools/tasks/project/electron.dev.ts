/**
 * Created by benjamindobler on 04.03.17.
 */
var exec: any = require('child_process').exec;


/**
 * This sample task copies all TypeScript files over to the appropriate `dist/dev|prod|test` directory, depending on the
 * current application environment.
 */
export = (cb: any) => {
  exec('electron electron/src/electron.main.live.js', function (err: any, stdout: any, stderr: any) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
};
