const assert = require("chai").assert;
const { Builder, By, Key, until } = require("selenium-webdriver");
var should = require("chai").should();




describe("Test - Contact details", function () {
    it("1.Test - Nations - BVA", async function () {

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

        // Locate the nation dropdown
        const nationDropdown = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[6]/div/div[2]/div')));
        await nationDropdown.click();
        // Locate the list of nations
        const nationsList = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[6]/div/div[2]/div/div[2]')));
        const nations = await nationsList.findElements(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[6]/div/div[2]/div/div[2]/div'));
        // Select the first nation from the list
        const firstNation = nations[1];
        await firstNation.click();

        await driver.sleep(500);

        const saveButton = await driver.wait(until.elementLocated(By.css("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div.oxd-form-actions > button")));
        await saveButton.click();

        const saveSuccssesful = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[1]')));
        await driver.quit();
    });

    it("2.Test - Nations - BVA", async function () {

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


        // Locate the nation dropdown
        const nationDropdown = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[6]/div/div[2]/div')));
        await nationDropdown.click();

        // Locate the list of nations
        const nationsList = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[6]/div/div[2]/div/div[2]')));
        const nations = await nationsList.findElements(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[6]/div/div[2]/div/div[2]/div'));

        // Select the last nation from the list
        const lastNation = nations[nations.length - 1];
        await lastNation.click();

        await driver.sleep(500);

        const saveButton = await driver.wait(until.elementLocated(By.css("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div.oxd-form-actions > button")));
        await saveButton.click();

        const saveSuccssesful = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[1]')));
        await driver.quit();
    });

    it("3.Test - Nations - BVA", async function () {

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

        // Locate the nation dropdown
        const nationDropdown = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[6]/div/div[2]/div')));
        await nationDropdown.click();
        // Locate the list of nations
        const nationsList = await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[6]/div/div[2]/div/div[2]')));
        const nations = await nationsList.findElements(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[6]/div/div[2]/div/div[2]/div'));
        // Select the random nation from the list
        if (nations.length > 0) {
            const randomIndex = Math.floor(Math.random() * nations.length);
            await driver.wait(until.elementIsEnabled(nations[randomIndex]), 5000);
            await nations[randomIndex].click();
        } else {
            throw new Error("Element not found");
        }

        const saveButton = await driver.wait(until.elementLocated(By.css("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div.oxd-form-actions > button")));
        await saveButton.click();

        const saveSuccssesful = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[1]')));
        await driver.quit();
    });
});