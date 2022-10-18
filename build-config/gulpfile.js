const { src, dest } = require('gulp');
const argv = require('yargs').argv;
const replace = require('gulp-replace');

function versionUpdate(cb) {
  console.log('npm_package_version', argv.bumpTo);
  console.log(src(['../test/*.ts']));
  src(['../test/env.ts'])
  .pipe(replace(/[version:].*[,]/, 'version: \'' + argv.bumpTo + '\','))
  .pipe(dest('../test/env.ts'));
  if (cb) {
    cb();
  }
}

// Run tasks
exports.libVersionUpdate = versionUpdate;
