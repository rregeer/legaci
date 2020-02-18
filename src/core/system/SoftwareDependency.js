'use strict';

const shell = require('shelljs');

class SoftwareDependency {
  static allDependenciesAvailable() {
    return this.isDosBoxAvailable()
      && this.isInnoExtractAvailable()
      && this.isUnzipAvailable()
      && this.is7zipAvailable()
      && this.isWineAvailable();
  }

  static isDosBoxAvailable() {
    return !shell.exec('hash dosbox > /dev/null 2>&1').code > 0;
  }

  static isWineAvailable() {
    return !shell.exec('hash wine > /dev/null 2>&1').code > 0;
  }

  static isInnoExtractAvailable() {
    return !shell.exec('hash innoextract > /dev/null 2>&1').code > 0;
  }

  static isUnzipAvailable() {
    return !shell.exec('hash unzip > /dev/null 2>&1').code > 0;
  }

  static is7zipAvailable() {
    return !shell.exec('hash p7zip > /dev/null 2>&1').code > 0;
  }
}

module.exports = SoftwareDependency;
