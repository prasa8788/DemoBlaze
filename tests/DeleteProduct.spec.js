const {test, expect} = require('@playwright/test');
const { login } = require('../utils/login');
const { addToCart } = require('../utils/addToCart');
const { DeleteProduct } = require('../pageobjects/DeleteProduct');

test.only('Delete Product', async ({page})=>
{
    await page.goto("https://www.demoblaze.com/index.html");
    
    const deleteProd = new DeleteProduct(page);

    await login(page);           // reuse login helper
    await addToCart(page);       // reuse add-to-cart helper
    
    await deleteProd.deleteButton.waitFor({ state: 'visible', timeout: 30000 });
    await deleteProd.clickDelete();

    await page.waitForLoadState("domcontentloaded");

    const product = page.locator('text=Samsung galaxy s6').nth(0);
    const productNameText = await product.textContent();
    await expect(page.locator(`text=${productNameText}`)).toHaveCount(0);

});