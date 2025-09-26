
// utils/addToCart.js
const { AddToCart } = require('../pageobjects/AddToCart');

/**
 * Reusable helper to add a product to the cart
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} [productName] - Name of the product to add (default: "Samsung galaxy s6")
 */
async function addToCart(page, productName = "Samsung galaxy s6") {
  const addToCart = new AddToCart(page);

  // Handle the "Product added" dialog once
  page.once("dialog", async (dialog) => {
    const message = dialog.message();
    console.log("Dialog message:", message);

    if (message === "Product added") {
      await dialog.accept();
    } else {
      throw new Error(`Unexpected dialog: ${message}`);
    }
  });

  // Navigate to homepage
  await page.goto("https://www.demoblaze.com/index.html");

  // Select the product
  const product = page.locator(`text=${productName}`).nth(0);
  const productNameText = await product.textContent();

  await product.click();
  await page.waitForLoadState("domcontentloaded");

  // Verify product page
  const productDescLocator = page.locator("h2.name");
  if (productDescLocator) {
    await productDescLocator.waitFor({ state: 'visible' });
  }

  // Click add to cart
  await addToCart.clickAddToCart();
  await page.waitForEvent('dialog');

  // Open cart and verify product
  await addToCart.openCart();
  await page.waitForLoadState("domcontentloaded");
  await addToCart.verifyProductInCart(productNameText);
}

module.exports = { addToCart };