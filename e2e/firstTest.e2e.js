describe('Test suit home', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await element(by.id('list-products')).scroll(500, 'down', NaN, 0);
  });
});
