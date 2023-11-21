const { Builder, By, Key, until } = require("selenium-webdriver");
var should = require("chai").should();



// Describe the test suite for creating an employee account
describe("Test - Create Employee Account", function () {
  // Test case for creating a random account
  it("1. Random Account 1", async function () {
    // Create a WebDriver instance
    let driver = new Builder().forBrowser("chrome").build();

    // Navigate to the login page
    await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Locate username and password input fields
    const Username = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="username"]')));
    const Password = await driver.wait(until.elementLocated(By.css('div[data-v-957b4417] input[name="password"]')));

    // Enter login credentials
    await Username.sendKeys("Admin");
    await Password.sendKeys("admin123", Key.RETURN);

    // Navigate to the PIM module
    const PIM = await driver.wait(until.elementLocated(By.css('a.oxd-main-menu-item[data-v-6475d26d][href="/web/index.php/pim/viewPimModule"]')));
    await PIM.click();

    // Create a new account
    const newAcc = await driver.wait(until.elementLocated(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/button[1]")));
    await newAcc.click();

    // Locate input fields for first name, middle name, last name, and id
    const firstName = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/input[1]')));
    const middleName = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/input[1]')));
    const lastName = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/input[1]')));
    const id = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/input[1]')));

    // Function to fetch data from a given URL
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      } catch (error) {
        console.error('Unable to fetch data:', error);
      }
    }

    // Function to fetch names based on the provided name type
    function fetchNames(nameType) {
      return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
    }

    // Function to pick a random element from a given list
    function pickRandom(list) {
      return list[Math.floor(Math.random() * list.length)];
    }

    // Function to generate a random first name based on the provided gender
    async function generateNameFirst(gender) {
      try {
        // Fetch names based on the gender
        const response = await Promise.all([
          fetchNames(gender),
        ]);

        const [firstNames] = response;

        // Pick a random first name from the list
        const firstName = pickRandom(firstNames.data);

        return `${firstName}`;
      } catch (error) {
        console.error('Unable to generate name:', error);
      }
    }


    // Function to generate a random middle name based on the provided gender
    async function generateNameMiddle(gender) {
      try {
        // Fetch names based on the gender
        const response = await Promise.all([
          fetchNames(gender),
        ]);

        const [firstNames] = response;

        // Pick a random middle name from the list
        const firstName = pickRandom(firstNames.data);

        return `${firstName}`;
      } catch (error) {
        console.error('Unable to generate name:', error);
      }
    }

    // Function to generate a random last name
    async function generateNameLast() {
      try {
        // Fetch surnames
        const response = await Promise.all([
          fetchNames('surnames'),
        ]);

        const [lastNames] = response;

        // Pick a random last name from the list
        const lastName = pickRandom(lastNames.data);

        return `${lastName}`;
      } catch (error) {
        console.error('Unable to generate name:', error);
      }
    }


    // Function to randomly pick a gender from the array ["male", "female"]
    function pickRandomGender() {
      const genders = ["male", "female"];

      // Generate a random index to pick a gender
      const randomIndex = Math.floor(Math.random() * genders.length);
      const randomGender = genders[randomIndex];

      return randomGender;
    }

    // Generate a random gender using the pickRandomGender function
    const randomGender = pickRandomGender();

    // Generate random names for first, middle, and last based on the random gender
    const randomNameFirst = generateNameFirst(randomGender);
    const randomNameMiddle = generateNameMiddle(randomGender);
    const randomNameLast = generateNameLast(randomGender);

    // Function to generate a random number of a specified length
    function generateRandomNumber(length) {
      // Initialize an empty string to store the generated random number
      let randomNumber = '';
      // Loop through each digit position based on the specified length
      for (let i = 0; i <= length; i++) {
        // Generate a random digit (0 to 9) and add it to the result string
        randomNumber += Math.floor(Math.random() * 10);
      }
      // Return the final randomly generated number as a string
      return randomNumber;
    }

    // Generate a random length for the random number (between 1 and 10)
    const randomLength = Math.floor(Math.random() * 10) + 1;
    // Use the generateRandomNumber function to generate a random number
    const randomNum = generateRandomNumber(randomLength);
    // Create an ID by converting the random number to a string
    const idRandom = `${randomNum}`;




    // Enter the randomly generated first name into the first name input field
    await firstName.sendKeys(randomNameFirst);
    // Enter the randomly generated middle name into the middle name input field
    await middleName.sendKeys(randomNameMiddle);
    // Enter the randomly generated last name into the last name input field
    await lastName.sendKeys(randomNameLast);
    // Clear and set the ID input field with the randomly generated ID
    await id.sendKeys(Key.chord(Key.SHIFT, Key.HOME), Key.DELETE);
    await id.sendKeys(idRandom);

    // Click the checkbox to agree to the terms and conditions
    await driver.findElement(By.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[2]/div[1]/label[1]/span[1]')).click();

    // Locate and interact with various input fields for creating a new account
    const UsernameNew = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/input[1]')));
    const PasswordNew = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/input[1]')));
    const PasswordNewConf = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]/div[2]/input[1]')));
    const disabledB = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/label[1]')));

    // Enter the generated username into the username input field
    await UsernameNew.sendKeys(randomNameFirst, randomNameLast);

    // Click the disabled button
    await disabledB.click();

    // Enter passwords and submit the form
    await PasswordNew.sendKeys("Password1");
    await PasswordNewConf.sendKeys("Password1", Key.RETURN);

    // Wait for successful creation message and then close the browser
    const saveSuccssesful = await driver.wait(until.elementLocated(By.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[1]')));
    await driver.close();
  });

});







  