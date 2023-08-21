const {test, expect} = require('@playwright/test');


test('First Playwright test', async ({browser})=>
{
    //Playwright code - js is asynchronus code will not execute in sequence

    const context = await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://sso.teachable.com/secure/9521/identity/login/password");
    
});


test('Page Playwright test', async ({page})=>
{

    await page.goto("https://www.google.com/");
    //get title -- assertion

   console.log(await page.title());
   await expect(page).toHaveTitle("Google");
    
});

