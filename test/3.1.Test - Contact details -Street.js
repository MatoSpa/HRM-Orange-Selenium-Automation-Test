// Import required modules from selenium-webdriver and chai
const assert = require("chai").assert;
const { Builder, By, Key, until } = require("selenium-webdriver");
var should = require("chai").should();

// Test suite describing the contact details scenarios
describe("Test - Contact details", function () {

    // Test case for updating the street address using Boundary Value Analysis
    it("1.Test - Street - BVA ", async function () {
        // Create a new WebDriver instance
        let driver = new Builder().forBrowser("chrome").build();

        // Navigate to the login page
        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Locate username and password input fields
        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

        // Enter valid username and password
        await Username.sendKeys("Admin");
        await Password.sendKeys("admin123", Key.RETURN);

        // Navigate to the PIM module
        const PIM = await driver.wait(until.elementLocated(By.css('a.oxd-main-menu-item[data-v-6475d26d][href="/web/index.php/pim/viewPimModule"]')));
        await PIM.click();

        // Locate the row group containing employee elements
const rowGroup = await driver.wait(until.elementLocated(By.css('div[data-v-8bca8bf7][data-v-f2168256]'), 1000));

// Find all employee elements within the row group
const employees = await rowGroup.findElements(By.css('div.oxd-table-card'));

// Check if there are any employees available
if (employees.length > 0) {
    // If employees exist, generate a random index
    const randomIndex = Math.floor(Math.random() * employees.length);

    // Wait for the randomly selected employee element to be enabled
    await driver.wait(until.elementIsEnabled(employees[randomIndex]), 10000);

    // Click on the randomly selected employee element
    await employees[randomIndex].click();
} else {
    // If no employees are found, throw an error
    throw new Error("Element not found");
}

        // Navigate to the contact information section
        const connctactI = await driver.wait(until.elementLocated(By.css('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-card-container div.orangehrm-edit-employee div.orangehrm-edit-employee-navigation div.orangehrm-tabs div.orangehrm-tabs-wrapper:nth-child(2) > a.orangehrm-tabs-item'), 1000));
        await connctactI.click();

        // Find the street address input field and update it using Boundary Value Analysis
        const streetA = await driver.wait(until.elementLocated(By.css('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-card-container div.orangehrm-edit-employee div.orangehrm-edit-employee-content div.orangehrm-horizontal-padding.orangehrm-vertical-padding form.oxd-form div.oxd-form-row:nth-child(3) div.oxd-grid-3.orangehrm-full-width-grid div.oxd-grid-item.oxd-grid-item--gutters:nth-child(1) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) > input.oxd-input.oxd-input--active')));
        await streetA.sendKeys(Key.chord(Key.SHIFT, Key.HOME), Key.DELETE);
        await streetA.sendKeys("a", Key.RETURN);

        // Wait for the success message
        const saveSuccssesful = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[1]')));
        
        // Quit the driver
        await driver.quit();
    });

    it("2.Test - Street - BVA ", async function () {

        // Test case for updating the street address using Boundary Value Analysis
    it("1.Test - Street - BVA ", async function () {
        // Create a new WebDriver instance
        let driver = new Builder().forBrowser("chrome").build();

        // Navigate to the login page
        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Locate username and password input fields
        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

        // Enter valid username and password
        await Username.sendKeys("Admin");
        await Password.sendKeys("admin123", Key.RETURN);

        // Navigate to the PIM module
        const PIM = await driver.wait(until.elementLocated(By.css('a.oxd-main-menu-item[data-v-6475d26d][href="/web/index.php/pim/viewPimModule"]')));
        await PIM.click();

        // Locate the row group containing employee elements
const rowGroup = await driver.wait(until.elementLocated(By.css('div[data-v-8bca8bf7][data-v-f2168256]'), 1000));

// Find all employee elements within the row group
const employees = await rowGroup.findElements(By.css('div.oxd-table-card'));

// Check if there are any employees available
if (employees.length > 0) {
    // If employees exist, generate a random index
    const randomIndex = Math.floor(Math.random() * employees.length);

    // Wait for the randomly selected employee element to be enabled
    await driver.wait(until.elementIsEnabled(employees[randomIndex]), 5000);

    // Click on the randomly selected employee element
    await employees[randomIndex].click();
} else {
    // If no employees are found, throw an error
    throw new Error("Element not found");
}

        // Navigate to the contact information section
        const connctactI = await driver.wait(until.elementLocated(By.css('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-card-container div.orangehrm-edit-employee div.orangehrm-edit-employee-navigation div.orangehrm-tabs div.orangehrm-tabs-wrapper:nth-child(2) > a.orangehrm-tabs-item'), 1000));
        await connctactI.click();

        // Find the street address input field and update it using Boundary Value Analysis
        const streetA = await driver.wait(until.elementLocated(By.css('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-card-container div.orangehrm-edit-employee div.orangehrm-edit-employee-content div.orangehrm-horizontal-padding.orangehrm-vertical-padding form.oxd-form div.oxd-form-row:nth-child(3) div.oxd-grid-3.orangehrm-full-width-grid div.oxd-grid-item.oxd-grid-item--gutters:nth-child(1) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) > input.oxd-input.oxd-input--active')));
        await streetA.sendKeys(Key.chord(Key.SHIFT, Key.HOME), Key.DELETE);
        await streetA.sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", Key.RETURN);

        // Wait for the success message
        const saveSuccssesful = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[1]')));
        
        // Quit the driver
        await driver.quit();
    });
    });
    
    it("3.Test - Street - BVA ", async function () {

        // Create a new WebDriver instance
        let driver = new Builder().forBrowser("chrome").build();

        // Navigate to the login page
        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Locate username and password input fields
        const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
        const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

        // Enter valid username and password
        await Username.sendKeys("Admin");
        await Password.sendKeys("admin123", Key.RETURN);

        // Navigate to the PIM module
        const PIM = await driver.wait(until.elementLocated(By.css('a.oxd-main-menu-item[data-v-6475d26d][href="/web/index.php/pim/viewPimModule"]')));
        await PIM.click();

        // Locate the row group containing employee elements
const rowGroup = await driver.wait(until.elementLocated(By.css('div[data-v-8bca8bf7][data-v-f2168256]'), 1000));

// Find all employee elements within the row group
const employees = await rowGroup.findElements(By.css('div.oxd-table-card'));

// Check if there are any employees available
if (employees.length > 0) {
    // If employees exist, generate a random index
    const randomIndex = Math.floor(Math.random() * employees.length);

    // Wait for the randomly selected employee element to be enabled
    await driver.wait(until.elementIsEnabled(employees[randomIndex]), 5000);

    // Click on the randomly selected employee element
    await employees[randomIndex].click();
} else {
    // If no employees are found, throw an error
    throw new Error("Element not found");
}

        // Navigate to the contact information section
        const connctactI = await driver.wait(until.elementLocated(By.css('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-card-container div.orangehrm-edit-employee div.orangehrm-edit-employee-navigation div.orangehrm-tabs div.orangehrm-tabs-wrapper:nth-child(2) > a.orangehrm-tabs-item'), 1000));
        await connctactI.click();

        // Find the street address input field and update it using Boundary Value Analysis
        const streetA = await driver.wait(until.elementLocated(By.css('div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-card-container div.orangehrm-edit-employee div.orangehrm-edit-employee-content div.orangehrm-horizontal-padding.orangehrm-vertical-padding form.oxd-form div.oxd-form-row:nth-child(3) div.oxd-grid-3.orangehrm-full-width-grid div.oxd-grid-item.oxd-grid-item--gutters:nth-child(1) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) > input.oxd-input.oxd-input--active')));
        await streetA.sendKeys(Key.chord(Key.SHIFT, Key.HOME), Key.DELETE);
        await streetA.sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", Key.RETURN);

        // Wait for a success message
        try{
            const saveSuccssesful = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[1]')),1000);
        // IF success message found report a error   
        }catch(error){
            console.error('User should not be able to save', error);
        }
        finally{
            await driver.quit();
        }
        

    });
});