const { Builder, By, Key, until } = require("selenium-webdriver");
var should = require("chai").should();



describe("Test - Buzz", function () {
    it("1.Test - Buzz - Post", async function () {

        //Create Web Browser
        let driver = new Builder().forBrowser("chrome").build();
        
        //Open Page
        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //Locate Username input box
        const Username = driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        //Locate Password Input Box
        const Password = driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

        //Input "Admin" in Username input Box
        Username.sendKeys("Admin");
        //Input "admin123" in Password input Box
        Password.sendKeys("admin123", Key.RETURN);

        //Find Buzz on Dashboard
        const Buzz = driver.wait(until.elementLocated(By.css('a.oxd-main-menu-item[data-v-6475d26d][href="/web/index.php/buzz/viewBuzz"]')));
        //Open Buzz
        await Buzz.click();
        //Locate Avatar/Username tab
        
        //Find Post input box
        const postBox = driver.wait(until.elementLocated(By.css('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--white.orangehrm-buzz-create-post > div.orangehrm-buzz-create-post-header > div.orangehrm-buzz-create-post-header-text > form > div > textarea')));
        //Input in the input box
        await postBox.sendKeys("Test 1");
        //Find the Post Button
        const postButton = driver.wait(until.elementLocated(By.css('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--white.orangehrm-buzz-create-post > div.orangehrm-buzz-create-post-header > div.orangehrm-buzz-create-post-header-text > form > div > div > button')));
        //Click on the Post Button
        await postButton.click();
        //Wait for the Succsess message 
        const succssesful = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[2]/div')),1000);
        //Exit Browser
        await driver.quit();
    });
    it("2.Test - Buzz - Picture", async function () {

        //Create Web Browser
        let driver = new Builder().forBrowser("chrome").build();
        //Open Page
        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //Locate Username input box
        const Username = driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        //Locate Password Input Box
        const Password = driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));
        //Input "Admin" in Username input Box
        Username.sendKeys("Admin");
        //Input "admin123" in Password input Box
        Password.sendKeys("admin123", Key.RETURN);
        //Find Buzz on Dashboard
        const Buzz = driver.wait(until.elementLocated(By.css('a.oxd-main-menu-item[data-v-6475d26d][href="/web/index.php/buzz/viewBuzz"]')));
        //Open Buzz
        await Buzz.click();


        //Find Share Photos Button
        const postSharePhoto = driver.wait(until.elementLocated(By.css('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--white.orangehrm-buzz-create-post > div.orangehrm-buzz-create-post-actions > button:nth-child(1)')));
        //Click on Share Photos Button
        await postSharePhoto.click();
        await driver.sleep(1000);
        //Find Share Photos Button
        const postSharePhoto1 = driver.wait(until.elementLocated(By.css('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--white.orangehrm-buzz-create-post > div.orangehrm-buzz-create-post-actions > button:nth-child(1)')));
        //Click on Share Photos Button
        await postSharePhoto1.click();
        await driver.sleep(1000);
        //Find Add Photos Button
        const addPhotoButton = driver.wait(until.elementLocated(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div/form/div[2]/div[1]/div[2]/input')));
        //Upload Picture
        await addPhotoButton.sendKeys("C:\\Users\\Stole\\Desktop\\TestSeleniumPicture.jpg");
        await driver.sleep(3000);
        //Find the Share Button
        const addPhotoShareButton = driver.wait(until.elementLocated(By.css('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > form > div.oxd-form-actions.orangehrm-buzz-post-modal-actions > button')));
        //Click on Share Button
        await addPhotoShareButton.click();
        await driver.sleep(3000);
        //Wait for the Succsess message 
        const succssesful = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[2]/div')),3000);
        //Exit Browser
        await driver.quit();
    });
    it("3.Test - Buzz - Post", async function () {

        //Create Web Browser
        let driver = new Builder().forBrowser("chrome").build();
        
        //Open Page
        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //Locate Username input box
        const Username = driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        //Locate Password Input Box
        const Password = driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

        //Input "Admin" in Username input Box
        Username.sendKeys("Admin");
        //Input "admin123" in Password input Box
        Password.sendKeys("admin123", Key.RETURN);

        //Find Buzz on Dashboard
        const Buzz = driver.wait(until.elementLocated(By.css('a.oxd-main-menu-item[data-v-6475d26d][href="/web/index.php/buzz/viewBuzz"]')));
        //Open Buzz
        await Buzz.click();
        //Locate Avatar/Username tab
        
        //Find Post input box
        const postVideo = driver.wait(until.elementLocated(By.css('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--white.orangehrm-buzz-create-post > div.orangehrm-buzz-create-post-actions > button:nth-child(2)')));
        //Click on the Post Button
        await postVideo.click();
        await driver.sleep(1000);
        //Find Post input box
        const postVideo1 = driver.wait(until.elementLocated(By.css('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--white.orangehrm-buzz-create-post > div.orangehrm-buzz-create-post-actions > button:nth-child(2)')));
        //Click on the Post Button
        await postVideo1.click();
        //Find the Post Button
        const videoUrl = driver.wait(until.elementLocated(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div/form/div[2]/div[2]/textarea')));
        //Input in the input box
        await videoUrl.sendKeys("https://www.youtube.com/watch?v=qNxPH8qYfjs&t=529s");
        await driver.sleep(3000);

        //Find the Share Button
        const addPhotoShareButton = driver.wait(until.elementLocated(By.css('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > form > div.oxd-form-actions.orangehrm-buzz-post-modal-actions > button')));
        //Click on Share Button
        await addPhotoShareButton.click();
        //Wait for the Succsess message 
        const succssesful = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[2]/div')),3000);
        //Exit Browser
        await driver.quit();
    });
});