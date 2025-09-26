const {test, expect} = require('@playwright/test');
const {PlaceOrder} = require('../pageobjects/PlaceOrder');
const { login } = require('../utils/login');
const { addToCart } = require('../utils/addToCart');
const {user} = require('../utils/usersTestData');

test('Place Order', async ({page})=>
{
    await login(page);           // reuse login helper
    await addToCart(page);       // reuse add-to-cart helper
    
    const pOrderPage = new PlaceOrder(page);
    await page.goto("https://www.demoblaze.com/index.html");
    
    await pOrderPage.openCart();
    await page.waitForLoadState("domcontentloaded");

    const tableBody = page.locator('#tbodyid');
    await expect(tableBody).toHaveCount(1);

    await pOrderPage.clickPlaceOrderBtn();

    await pOrderPage.validPurchaseFill(user[0]);
});