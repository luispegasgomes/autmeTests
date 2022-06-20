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
        // Entrar no login
        let loginBtn = await driver.findElement(By.className('btnLogin'))
        await loginBtn.click()

        // Fazer login
        let loginUsername = await driver.findElement(By.id('username'))
        let loginPassword = await driver.findElement(By.id('password'))
        loginUsername.sendKeys("anapimenta")
        loginPassword.sendKeys("pimenta")
        let login = await driver.findElement(By.className('btn'))
        await login.click()

        // Escolher lista de crianças (Navbar)
        let navChildren = driver.wait(until.elementLocated(By.className('navChildren')))
        await navChildren.click()

        let datasheet = driver.wait(until.elementLocated(By.className('button2')))
        await datasheet.click()

        let appointments = driver.wait(until.elementLocated(By.id('consultas')))
        await appointments.click()
        let notes = driver.wait(until.elementLocated(By.id('notes')))
        await notes.click()

    } catch (error) {
        console.log(error)
    }
})();