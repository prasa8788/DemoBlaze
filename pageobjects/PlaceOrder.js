class PlaceOrder
{
    constructor(page)
    {
        this.showCart = page.locator('#cartur');
        this.placeOrderButton = page.locator('button[class="btn btn-success"]');
        this.name = page.locator('#name');
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.creditCard = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');
        this.purchaseOrderButton = page.locator('button[onclick="purchaseOrder()"]');
    }

    async validPurchaseFill(user) 
    {
    await this.name.fill(user.uname);
    await this.country.fill(user.ucountry);
    await this.city.fill(user.ucity);
    await this.creditCard.fill(user.ucreditCard); // Capital 'C' matches your data
    await this.month.fill(user.umonth);
    await this.year.fill(user.uyear);
    await this.purchaseOrderButton.click();
}

    async openCart()
    {
        await this.showCart.click();
    }

    async clickPlaceOrderBtn()
    {
        await this.placeOrderButton.click();
    }
}

module.exports = {PlaceOrder};