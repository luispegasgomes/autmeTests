const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('chromedriver.exe');

(async function openChromeTest() {
    try {
        let driver = await new Builder()
            .setChromeOptions(service)
            .forBrowser('chrome')
            .build();


        await driver.get('https://autme-luispegasgomes.vercel.app/');

        // Get title 
        let title = await driver.getTitle();
        console.log(title);

        // Ver perguntas frequentes
        let questions = await driver.findElement(By.className('questions'))
        await questions.click()
        let questOne = await driver.findElement(By.className('btn'))
        await questOne.click()
    } catch (error) {
        console.log(error)
    }
})();