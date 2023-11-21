const { Builder, By, Key, until } = require("selenium-webdriver");
var should = require("chai").should();



describe("2.Test - LogIn - BVA(Case Sensitivity)", function () {
    it("LogIn-5.InValid Case U Valid P", async function () {

        let driver = new Builder().forBrowser("chrome").build();

        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));

        await driver.findElement(By.css('div[data-v-957b4417] input[name="username"]')).sendKeys("admin");
        await driver.findElement(By.css('div[data-v-957b4417] input[name="password"]')).sendKeys("admin123", Key.RETURN);

        
        try {
            await driver.wait(until.elementLocated(By.css('div[data-v-358db50f]')), 3000);
        } catch (error) {
            try {
                await driver.wait(until.elementLocated(By.css('div[data-v-f0c5131f]')),1000);
            } finally {
                throw new Error("Managed to log in with wrong credentials");
            }
        } finally {
            await driver.quit();
        }

    });

    it("LogIn-6.Valid Case U inValid Case P", async function () {

        let driver = new Builder().forBrowser("chrome").build();

        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));


        await Username.sendKeys("Admin");
        await Password.sendKeys("Admin123", Key.RETURN);

        try {
            await driver.wait(
                until.elementLocated(By.css('div[data-v-358db50f]')), 3000);
        } catch (error) {
            try {
                await driver.wait(
                    until.elementLocated(By.css('div[data-v-f0c5131f]')),
                    1000);
            } finally {
                throw new Error("Managed to log in with wrong credentials");
            }
        } finally {
            await driver.quit();
        }


    });

    it("LogIn-7.inValid Case U inValid Case P", async function () {

        let driver = new Builder().forBrowser("chrome").build();

        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));



        await Username.sendKeys("admin");
        await Password.sendKeys("Admin123", Key.RETURN);

        try {
            await driver.wait(
                until.elementLocated(By.css('div[data-v-358db50f]')), 3000);
        } catch (error) {
            try {
                await driver.wait(
                    until.elementLocated(By.css('div[data-v-f0c5131f]')),
                    1000);
            } finally {
                throw new Error("Managed to log in with wrong credentials");
            }
        } finally {
            await driver.quit();
        }


    });
});
















