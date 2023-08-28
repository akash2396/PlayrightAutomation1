const {test, expect} = require('@playwright/test');

test('Browser context validation', async ({page})=>{
    
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const userName=  page.locator('#username');
  const password = page.locator("input[id='password']");
  const signInButton = page.locator("#signInBtn");
  const allTitles = page.locator("[class='card-title'] a");

  await userName.fill("rahulshettyacademy");
  await password.fill("learning");
  await signInButton.click();

//   console.log(await allTitles.first().textContent());

     /* wait for to make all the network calls  */
    // page.waitForLoadState('networkidle');


    await allTitles.first().waitFor();
   
    const pageTitles = await allTitles.allTextContents();
    console.log(pageTitles);
    page.locator("user").click();

})