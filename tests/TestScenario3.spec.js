const { test, expect } = require('@playwright/test');

test.only("Handling the frames", async ({ page }) => {

    page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    await page.locator("button:has-text('Mouse Hover')").hover();

    const framePage = page.frameLocator("#courses-iframe");

    await framePage.locator("li a[href*='lifetime-access']:visible").click();

    // await framePage.getByRole('link', { name: 'NEW All Access plan' }).click();


    const textContent = await framePage.locator(".text h2").textContent();

    const countOfSubscriber = textContent.split(" ")[1];

    console.log(countOfSubscriber);



})