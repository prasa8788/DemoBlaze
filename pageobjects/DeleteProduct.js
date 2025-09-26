class DeleteProduct 
{
    constructor(page) 
    {
        this.page = page;
        this.deleteButton = page.locator("a[onclick*='deleteItem']");
    }

    async clickDelete() 
    {
        await this.deleteButton.click();
    }
}

module.exports = { DeleteProduct };