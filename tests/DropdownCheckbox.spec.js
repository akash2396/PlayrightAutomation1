const {test , expect}= require('@playwright/test');

test('handlingDropdownAndRadiobuttons', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("select.form-control").selectOption("Teacher");

    // await page.pause();

    await page.locator("span.checkmark").nth(1).click();

    await page.locator("#okayBtn").click();


    console.log(await page.locator("span.checkmark").nth(1).isChecked);

    expect(await page.locator("span.checkmark").nth(1)).toBeChecked();

    await page.locator("#terms").click();

    console.log(await page.locator("#terms").isChecked());

    expect(await page.locator("#terms").isChecked()).toBeTruthy();

    await page.locator("#terms").uncheck();

    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    // await page.pause();

    const blinkingLink = page.locator("[href*='documents']");

    await expect(blinkingLink).toHaveAttribute("class","blinkingText");
})

test('Handlind The Child Windows',async ({browser})=>{

    const context = await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const blinkingLink = page.locator("[href*='documents']");

   const [newPage]= await  Promise.all([

        context.waitForEvent('page'),
        blinkingLink.click(),
    ])

   const text =  await newPage.locator("p.red").textContent();

   const domainName = text.split("@")[1].split(" ")[0].split(".")[0];

   console.log(domainName);

   const userName=  page.locator('#username');

   await userName.type(domainName);

//    await page.pause();


//    const [newPage, newPage2]= await  Promise.all([

//     context.waitForEvent('page'),
//     blinkingLink.click(),
// ])
    



})