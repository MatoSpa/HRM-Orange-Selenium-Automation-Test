const { Builder, By, Key, until } = require("selenium-webdriver");
var should = require("chai").should();



describe("3.Test - LogIn - EP(Empty Field)", function () {
    it("LogIn-8.Empty U Valid P", async function () {

        let driver = new Builder().forBrowser("chrome").build();

        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

        await Password.sendKeys("admin123", Key.RETURN);

        try {
            await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] span[data-v-7b563373]')),3000);
        } catch (error) {
            try {
                await driver.wait(until.elementLocated(By.css('div[data-v-f0c5131f]')),100);
            } finally {
                throw new Error("Managed to log in with wrong credentials");
            }
        } finally {
            await driver.quit();
        }

    });

    it("LogIn-9.Valid U Empty P.js", async function () {

        let driver = new Builder().forBrowser("chrome").build();

        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

        await Username.sendKeys("",Key.RETURN);
        

        try {
            await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] span[data-v-7b563373]')),3000);
        } catch (error) {
            try {
                await driver.wait(until.elementLocated(By.css('div[data-v-f0c5131f]')),100);
            } finally {
                throw new Error("Managed to log in with wrong credentials");
            }
        } finally {
            await driver.quit();
        }


    });

    it("LogIn-10.Empty U Empty P", async function () {

        let driver = new Builder().forBrowser("chrome").build();

        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

        
        await Password.sendKeys("", Key.RETURN);

        
        try {
            await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] span[data-v-7b563373]')),3000);
        } catch (error) {
            try {
                await driver.wait(until.elementLocated(By.css('div[data-v-f0c5131f]')),100);
            } finally {
                throw new Error("Managed to log in with wrong credentials");
            }
        } finally {
            await driver.quit();
        }


    });

});
















