const VersionUtil = require('./version-util');

test('getVersion returns the correct version', () => {
  expect(VersionUtil.getVersion()).toBe('1.0.15');
});

console.log('VersionUtil.getVersion() =', VersionUtil.getVersion());
