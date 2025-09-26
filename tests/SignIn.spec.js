const {test, expect} = require('@playwright/test');
const {SignInDialog} = require('../pageobjects/SignInDialog');
const { testUsers, forEachUser, getUser } = require('../utils/usersTestData');

test.describe.serial('User flow in one browser', () =>
{
test('User Sign In', async ({page})=>
{
    page.on("dialog", async (dialog) => {
        const message = dialog.message();
        console.log("Dialog message:", message);

        if (message === "Sign up successful." || message === "This user already exist.") {
          await dialog.accept();
        } else {
          throw new Error(`Unexpected dialog: ${message}`);
        }
      });

    for (const user of testUsers)
    {
        //go to site
        await page.goto("https://www.demoblaze.com/index.html");
        console.log(await page.title());
        await expect(page).toHaveTitle("STORE");

        //use PO for signin
        const signinDialog = new SignInDialog(page);

        await forEachUser(page, async (user) => 
        {
            await signinDialog.validSignIn(user.username, user.password);
            // Wait for dialog popup after submitting
            await page.waitForEvent('dialog');
        });
        
    }
});

});
