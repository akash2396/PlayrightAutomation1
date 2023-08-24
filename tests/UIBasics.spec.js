const {test, expect} = require('@playwright/test');


test('First Playwright test', async ({browser})=>
{
    //Playwright code - js is asynchronus code will not execute in sequence

    const context = await browser.newContext();
    const page= await context.newPage();

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


  const userName=  page.locator('#username');
  const password = page.locator("input[id='password']");
  const signInButton = page.locator("#signInBtn");
  const titles = page.locator("[class='card-title'] a");
    //css
   await page.locator('#username').type("rahulshetty");
   await page.locator("input[id='password']").type("learning");
   await page.locator("#signInBtn").click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText("Incorrect");

   //type  --  fill

   await userName.fill("");
   await userName.fill("rahulshettyacademy");
   await password.fill("");
   await password.fill("learning")
   await signInButton.click();

  //  console.log(await titles.first().textContent());

  //  console.log(await titles.last().textContent());

  // console.log(await titles.nth(3).textContent());



  /* wait for to make all the network calls  */
  await page.waitForLoadState('networkidle');
   console.log(await titles.allTextContents());
    
});


test('Page Playwright test', async ({page})=>
{

    await page.goto("https://www.google.com/");
    //get title -- assertion

   console.log(await page.title());
   await expect(page).toHaveTitle("Google");

   
    
});

