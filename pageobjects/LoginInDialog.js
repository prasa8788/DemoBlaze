class LoginInDialog
{
    constructor(page)
    {
        this.loginInButton = page.locator('#login2');
        this.loginInUserName = page.locator('#loginusername');
        this.loginInPassword = page.locator('#loginpassword');
        this.loginInLoginBtn = page.locator('button[onclick="logIn()"]');
    }

    async validLogin(username,password)
    {
        await this.loginInButton.click();
        await this.loginInUserName.fill(username);
        await this.loginInPassword.fill(password);
        await this.loginInLoginBtn.click();
    }
}

module.exports = {LoginInDialog};