class SignInDialog
{
    constructor(page)
    {
        this.signInButton = page.locator('#signin2');
        this.signInUserName = page.locator('#sign-username');
        this.signInPassword = page.locator('#sign-password');
        this.signInRegisterBtn = page.locator('button[onclick="register()"]');
    }

    async validSignIn(username,password)
    {
        await this.signInButton.click();
        await this.signInUserName.fill(username);
        await this.signInPassword.fill(password);
        await this.signInRegisterBtn.click();
    }
}

module.exports = {SignInDialog};