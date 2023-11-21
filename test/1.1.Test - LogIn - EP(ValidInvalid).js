// Import required modules from selenium-webdriver and chai
const { Builder, By, Key, until } = require("selenium-webdriver");
var should = require("chai").should();

// Test suite describing the login scenarios
describe("1.Test - LogIn - EP(ValidInvalid)", function () {

    // Test case for logging in with valid username and valid password
    it("LogIn-1.Valid U Valid P", async function () {
        let driver = new Builder().forBrowser("chrome").build();

        // Navigate to the login page
        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Locate username and password input fields
        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

        // Enter valid username and password
        await Username.sendKeys("Admin");
        await Password.sendKeys("admin123", Key.RETURN);

        try {
            // Wait for an element indicating successful login
            await driver.wait(until.elementLocated(By.css('div[data-v-f0c5131f]')), 3000);
        } catch (error) {
            try {
                // If the element indicating successful login is not found, check if you are still on the same page
                await driver.wait(until.elementLocated(By.css('div[data-v-358db50f]')), 1000);
            } finally {
                // Throw an error if thats true
                throw new Error("Cannot log in with correct credentials");
            }
        } finally {
            // Quit the driver in the end
            await driver.quit();
        }
    });

    // Test case for logging in with invalid username and password
it("LogIn-2.InValid U InValid P", async function () {
    // Create a new WebDriver instance
    let driver = new Builder().forBrowser("chrome").build();

    // Navigate to the login page
    await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Locate username and password input fields
    const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
    const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

    // Enter invalid username and password
    await Username.sendKeys("Admin1");
    await Password.sendKeys("admin1234", Key.RETURN);

    try {
        // Locate a element representing that you are still on the same page 
        await driver.wait(until.elementLocated(By.css('div[data-v-358db50f]')), 3000);
    } catch (error) {
        try {
            // If not found, wait for an element representing that you have loged in
            await driver.wait(until.elementLocated(By.css('div[data-v-f0c5131f]')), 1000);
        } finally {
            // If found, throw an error indicating successful login with wrong credentials
            throw new Error("Managed to log in with wrong credentials");
            
        }
    } finally {
        // Quit the driver
        await driver.quit();
    }
});
    it("LogIn-3.Valid U InValid P.js", async function () {

        let driver = new Builder().forBrowser("chrome").build();

        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

        await Username.sendKeys("Admin");
        await Password.sendKeys("admin1234", Key.RETURN);

        try {
            await driver.wait(until.elementLocated(By.css('div[data-v-358db50f]')),3000);
        } catch (error) {
           
            try {
                await driver.wait(until.elementLocated(By.css('div[data-v-f0c5131f]')),100);
            } catch(error){
                throw new Error("Element not found");
            }
             finally {
                throw new Error("Managed to log in with wrong credentials");
        
            }
            
        } finally {
            await driver.quit();
        }


    });

    it("LogIn-4.InValid U Valid P", async function () {

        let driver = new Builder().forBrowser("chrome").build();

        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

        
        await Username.sendKeys("Admin1");
        await Password.sendKeys("admin1234", Key.RETURN);

        try {
            await driver.wait(until.elementLocated(By.css('div[data-v-358db50f]')),3000);
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
















