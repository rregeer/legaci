/* eslint-disable no-param-reassign */

'use strict';

const test = require('ava');
const sinon = require('sinon');

const FileTypes = require('../../../../src/core/file/fileTypes');
const FileTypeResolver = require('../../../../src/core/file/FileTypeResolver');

test.beforeEach((t) => {
  t.context.path = sinon.stub({
    extname() {}
  });

  t.context.resolver = new FileTypeResolver(t.context.path);
});

test('GetFileType should return ZIP when path contains a zip file', (t) => {
  const { resolver } = t.context;

  t.context.path.extname.returns('.Zip');

  const result = resolver.getFileType('/test/path/file.zip');

  t.is(result, FileTypes.ZIP);
});

test('GetFileType should return EXE when path contains a exe file', (t) => {
  const { resolver } = t.context;

  t.context.path.extname.returns('.exe');

  const result = resolver.getFileType('/test/path/file.exe');

  t.is(result, FileTypes.EXE);
});

test('GetFileType should return SH when path contains a shell file', (t) => {
  const { resolver } = t.context;

  t.context.path.extname.returns('.sh');

  const result = resolver.getFileType('/test/path/file.sh');

  t.is(result, FileTypes.SH);
});

test('GetFileType should return DMG when path contains a dmg file', (t) => {
  const { resolver } = t.context;

  t.context.path.extname.returns('.DMG');

  const result = resolver.getFileType('/test/path/file.dmg');

  t.is(result, FileTypes.DMG);
});

test('GetFileType should throw an exception when file type is unknown', (t) => {
  const { resolver } = t.context;

  t.context.path.extname.returns('');

  t.throws(() => {
    resolver.getFileType('/test/path/file.something');
  }, Error);
});
