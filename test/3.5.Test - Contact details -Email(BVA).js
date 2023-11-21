const assert = require("chai").assert;
const { Builder, By, Key, until } = require("selenium-webdriver");
var should = require("chai").should();




describe("Test - Contact details", function () {
    it("1.Test - Email - BVA", async function () {

        let driver = new Builder().forBrowser("chrome").build();

        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));


        await Username.sendKeys("Admin");
        await Password.sendKeys("admin123", Key.RETURN);

        const PIM = await driver.wait(until.elementLocated(By.css('a.oxd-main-menu-item[data-v-6475d26d][href="/web/index.php/pim/viewPimModule"]')));
        await PIM.click();


        const rowGroup = await driver.wait(until.elementLocated(By.css('div[data-v-8bca8bf7][data-v-f2168256]'), 1000));
        const employees = await rowGroup.findElements(By.css('div.oxd-table-card'));

        if (employees.length > 0) {
            const randomIndex = Math.floor(Math.random() * employees.length);
            await driver.wait(until.elementIsEnabled(employees[randomIndex]), 10000);
            await employees[randomIndex].click();
        } else {
            throw new Error("Element not found");
        }

        const connctactI = await driver.wait(until.elementLocated(By.css('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-card-container div.orangehrm-edit-employee div.orangehrm-edit-employee-navigation div.orangehrm-tabs div.orangehrm-tabs-wrapper:nth-child(2) > a.orangehrm-tabs-item'), 1000));
        await connctactI.click();


        const email = await driver.wait(until.elementLocated(By.css('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(9) > div > div:nth-child(1) > div > div:nth-child(2) > input')));
        await email.sendKeys(Key.chord(Key.SHIFT, Key.HOME),Key.DELETE);
        await email.sendKeys("a@a.a",Key.RETURN);

        const saveSuccssesful = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[1]')));
        await driver.quit();
    });

    it("2.Test - Email - BVA", async function () {

        let driver = new Builder().forBrowser("chrome").build();

        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));


        await Username.sendKeys("Admin");
        await Password.sendKeys("admin123", Key.RETURN);

        const PIM = await driver.wait(until.elementLocated(By.css('a.oxd-main-menu-item[data-v-6475d26d][href="/web/index.php/pim/viewPimModule"]')));
        await PIM.click();


        const rowGroup = await driver.wait(until.elementLocated(By.css('div[data-v-8bca8bf7][data-v-f2168256]'), 1000));
        const employees = await rowGroup.findElements(By.css('div.oxd-table-card'));

        if (employees.length > 0) {
            const randomIndex = Math.floor(Math.random() * employees.length);
            await driver.wait(until.elementIsEnabled(employees[randomIndex]), 10000);
            await employees[randomIndex].click();
        } else {
            throw new Error("Element not found");
        }

        const connctactI = await driver.wait(until.elementLocated(By.css('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-card-container div.orangehrm-edit-employee div.orangehrm-edit-employee-navigation div.orangehrm-tabs div.orangehrm-tabs-wrapper:nth-child(2) > a.orangehrm-tabs-item'), 1000));
        await connctactI.click();

        
        const email = await driver.wait(until.elementLocated(By.css('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(9) > div > div:nth-child(1) > div > div:nth-child(2) > input')));
        await email.sendKeys(Key.chord(Key.SHIFT, Key.HOME),Key.DELETE);
        await email.sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@a.a",Key.RETURN);

        const saveSuccssesful = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[1]')));
        await driver.quit();
       
    });

    it("3.Test - Email - BVA", async function () {

        let driver = new Builder().forBrowser("chrome").build();

        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));


        await Username.sendKeys("Admin");
        await Password.sendKeys("admin123", Key.RETURN);

        const PIM = await driver.wait(until.elementLocated(By.css('a.oxd-main-menu-item[data-v-6475d26d][href="/web/index.php/pim/viewPimModule"]')));
        await PIM.click();


        const rowGroup = await driver.wait(until.elementLocated(By.css('div[data-v-8bca8bf7][data-v-f2168256]'), 1000));
        const employees = await rowGroup.findElements(By.css('div.oxd-table-card'));

        if (employees.length > 0) {
            const randomIndex = Math.floor(Math.random() * employees.length);
            await driver.wait(until.elementIsEnabled(employees[randomIndex]), 10000);
            await employees[randomIndex].click();
        } else {
            throw new Error("Element not found");
        }

        const connctactI = await driver.wait(until.elementLocated(By.css('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-card-container div.orangehrm-edit-employee div.orangehrm-edit-employee-navigation div.orangehrm-tabs div.orangehrm-tabs-wrapper:nth-child(2) > a.orangehrm-tabs-item'), 1000));
        await connctactI.click();

        
        const email = await driver.wait(until.elementLocated(By.css('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(9) > div > div:nth-child(1) > div > div:nth-child(2) > input')));
        await email.sendKeys(Key.chord(Key.SHIFT, Key.HOME),Key.DELETE);
        await email.sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@a.a",Key.RETURN);

        try{
            const saveSuccssesful = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[1]')),1000);
            
        }catch(error){
            console.error('User should not be able to save', error);
        }
        finally{
            await driver.quit();
        }
    });
});