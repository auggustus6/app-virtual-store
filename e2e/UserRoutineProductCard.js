describe('Test suit home', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have add product in card and increment then remove', async () => {
    await element(by.id('list-products')).scroll(500, 'down', NaN, 0);
    const card = await element(by.id('wrapper-card-5'));
    await card.tap();
    const buttonIncrement = await element(by.id('button-increment'));
    await buttonIncrement.tap();
    await device.pressBack();
    const card2 = await element(by.id('wrapper-card-6'));
    await card2.tap();
    const removeButton = await element(by.text('Remover')).atIndex(0);
    await removeButton.tap();
    await device.pressBack();
  });
});
