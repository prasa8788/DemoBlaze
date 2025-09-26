const {test, expect} = require('@playwright/test');
const { login } = require('../utils/login');
const {AddToCart} = require('../pageobjects/AddToCart');


test('Add Item to Cart', async ({page})=>
{
  await login(page);
    const addToCart = new AddToCart(page);

    page.on("dialog", async (dialog) => 
    {
        const message = dialog.message();
        console.log("Dialog message:", message);

        if (message === "Product added") {
          await dialog.accept();
        } else {
          throw new Error(`Unexpected dialog: ${message}`);
        }
    });


    await page.goto("https://www.demoblaze.com/index.html");

    //select samsung galaxy s6
    const product = page.locator('text=Samsung galaxy s6').nth(0);
    const productNameText = await product.textContent();

    await product.click();
    await page.waitForLoadState("domcontentloaded");

    const productDescLocator = page.locator("h2.name");
    await expect(productDescLocator).toHaveText(productNameText);

    await addToCart.clickAddToCart();
    await page.waitForEvent('dialog');

    await addToCart.openCart();
    await page.waitForLoadState("domcontentloaded");

    await addToCart.verifyProductInCart(productNameText);
});