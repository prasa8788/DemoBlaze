const {test, expect} = require('@playwright/test');
const {LoginInDialog} = require('../pageobjects/LoginInDialog');
const { testUsers, forEachUser, getUser } = require('../utils/usersTestData');

test('User Log In', async ({page})=>
{
    const loginDialog = new LoginInDialog(page);

    await page.goto("https://www.demoblaze.com/index.html");
    //first user by default
    const userToLogin = getUser();
    await loginDialog.validLogin(userToLogin.username, userToLogin.password);

    //using an assertion to ensure login succeeded
    await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${userToLogin.username}`);
});
