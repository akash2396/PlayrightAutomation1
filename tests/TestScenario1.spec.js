const {page,expect, test}= require('@playwright/test');

test.only('Complete Test Scenario og Rahulsheety website', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("akashshingavi@gmail.com");
    await page.locator("#userPassword").fill("Akash@2396");
    await page.locator("#login").click();
    await page.locator("button[class='btn w-10 rounded']").first().waitFor();

    const productName = "zara coat 3";
    const items = page.locator("div.card-body");
    const itemTitles = page.locator("div.card-body b");

  const titles = await itemTitles.allTextContents();
  console.log(titles);

  const itemsCount = await items.count();
  console.log(itemsCount);

  for(let i = 0;i<itemsCount;i++)
  {
    if(await items.nth(i).locator("b").textContent()==productName)
    {
        // await items.nth(i).locator("[class='btn w-10 rounded']").click();
        await items.nth(i).locator("text= Add To Cart").click();
        break;
    }

  }

  await page.locator("button[routerlink*='cart']").click();

  await page.locator("div li").first().waitFor();

 const booleanValue =await  page.locator("h3:has-text('zara coat 3')").isVisible();

 console.log(booleanValue);

 expect(booleanValue).toBeTruthy();




})