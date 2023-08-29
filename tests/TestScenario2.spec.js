const {test,expect}= require('@playwright/test');

test('test',async ({page})=>{

   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//    await  page.goto("https://www.google.com/");
//    await page.goBack();
//    await page.goForward();

expect(await page.locator("input.displayed-class")).toBeVisible();

await page.locator("#hide-textbox").click();

await expect(page.locator("input.displayed-class")).toBeHidden();


// How to handle popup

await page.pause();

page.on("dialog",dialog=>dialog.accept());

await page.locator("input#confirmbtn").click();

//how to hover the mouse on element

await page.locator("button:has-text('Mouse Hover')").hover();

})