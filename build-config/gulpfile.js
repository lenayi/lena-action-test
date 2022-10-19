const { src, dest } = require('gulp');
const argv = require('yargs').argv;
const replace = require('gulp-replace');

function versionUpdate(cb) {
  console.log('version', 'version: \'' + argv.bumpTo + '\',');
  console.log('target', 'target: \'' + argv.target + '\',');

  src(['../'+ argv.target +'/env.ts'])
  .pipe(replace(/version:.*[,]/, 'version: \'' + argv.bumpTo + '\','))
  .pipe(dest('../'+ argv.target +''));

  if (cb) {
    cb();
  }
}

// Run tasks
exports.libVersionUpdate = versionUpdate;
