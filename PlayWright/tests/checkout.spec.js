const { test, expect } = require("@playwright/test");

test("Checkout Process", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
  await page.click("text=Add to cart");
  await page.click(".shopping_cart_link");
  await page.click("text=Checkout");
  await page.fill("#first-name", "John");
  await page.fill("#last-name", "Doe");
  await page.fill("#postal-code", "12345");
  await page.click("#continue");
  await expect(page.locator(".title")).toContainText("Checkout");
});