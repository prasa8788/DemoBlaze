const { LoginInDialog } = require('../pageobjects/LoginInDialog');
const { getUser } = require('./usersTestData');

/**
 * Reusable login helper for tests
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} [username] - Optional username. Uses default user if not provided.
 * @param {string} [password] - Optional password. Uses default user if not provided.
 */
async function login(page, username, password) {
  const loginDialog = new LoginInDialog(page);

  await page.goto("https://www.demoblaze.com/index.html");

  const user = username && password ? { username, password } : getUser();
  await loginDialog.validLogin(user.username, user.password);
}

module.exports = { login };