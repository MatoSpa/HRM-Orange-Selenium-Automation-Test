const { Builder, By, Key, until } = require("selenium-webdriver");
var should = require("chai").should();


describe("Test - LogOut", function () {
    it("1.Test - LogOut - Main", async function () {

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

        //Locate Avatar/Username tab
        const Avatar = driver.wait(until.elementLocated(By.css('div.oxd-topbar-header-userarea[data-v-f0c5131f]')));
        //CLick Avatar/Username tab
        await Avatar.click();
        //Locate LogOut Button
        const logoutB = driver.wait(until.elementLocated(By.css('li a.oxd-userdropdown-link[href="/web/index.php/auth/logout"]')));
        //Click on the Logout Button
        await logoutB.click();

        //Locate Username input box
        const Username1 = driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));

        //Exit Browser
        await driver.quit();
    });

    it("2.Test - LogOut - PIM", async function () {
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

       
        //Locate PIM on Dashboard
        const PIM = driver.wait(until.elementLocated(By.css('a.oxd-main-menu-item[data-v-6475d26d][href="/web/index.php/pim/viewPimModule"]')));
        //Click on PIM
        await PIM.click();
        //Locate Employee list
        const rowGroup = driver.wait(until.elementLocated(By.css('div[data-v-8bca8bf7][data-v-f2168256]')));
        //Locate Employees inside the list
        const employees = await rowGroup.findElements(By.css('div.oxd-table-card'));

        if (employees.length > 0) {
            //Chose random
            const randomIndex = Math.floor(Math.random() * employees.length);
            //Wait for list to load
            await driver.wait(until.elementIsEnabled(employees[randomIndex]), 2000);
            //Open the randomly selected employee
            await employees[randomIndex].click();
        } else {
            throw new Error("Element not found");
        }

        //Locate Avatar/Username tab
        const Avatar = driver.wait(until.elementLocated(By.css('div.oxd-topbar-header-userarea[data-v-f0c5131f]')));
        //CLick Avatar/Username tab
        await Avatar.click();
        //Locate LogOut Button
        const logoutB = driver.wait(until.elementLocated(By.css('li a.oxd-userdropdown-link[href="/web/index.php/auth/logout"]')));
        //Click on the Logout Button
        await logoutB.click();

        //Locate Username input box
        const Username1 = driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));


        //Exit Browser
        await driver.quit();
    });

    it("3.Test - LogOut - Buzz", async function () {

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

        //Locate Avatar/Username tab
        const Avatar = driver.wait(until.elementLocated(By.css('div.oxd-topbar-header-userarea[data-v-f0c5131f]')));
        //CLick Avatar/Username tab
        await Avatar.click();
        //Locate LogOut Button
        const logoutB = driver.wait(until.elementLocated(By.css('li a.oxd-userdropdown-link[href="/web/index.php/auth/logout"]')));
        //Click on the Logout Button
        await logoutB.click();

        //Locate Username input box
        const Username1 = driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));


        //Exit Browser
        await driver.quit();

    });
});