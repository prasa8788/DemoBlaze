class AddToCart
{
    constructor(page)
    {
        this.addToCartButton = page.locator('a[onclick="addToCart(1)"]');
        this.showCart = page.locator('#cartur');
        this.productName = page.locator('#tbodyid tr td:nth-child(2)');
    }

    async clickAddToCart() 
    {
        await this.addToCartButton.click();
    }

    async openCart()
    {
        await this.showCart.click();
    }

    async getCartText()
    {
        return await this.productName.textContent();
    }

    async verifyProductInCart(productNameText) 
    {
        const cartText = await this.getCartText();
        if (!cartText.includes(productNameText)) 
        {
            throw new Error(`Product "${productNameText}" not found in cart`);
        }
    }
}

module.exports = {AddToCart};