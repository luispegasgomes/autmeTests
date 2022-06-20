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
        loginUsername.sendKeys("luisgomes2")
        loginPassword.sendKeys("gomes")
        let login = await driver.findElement(By.className('btn'))
        await login.click()

        // Escolher completaMe
        let completeMe = driver.wait(until.elementLocated(By.id('completeMe')))
        await completeMe.click()

        // Jogar completaMe
        let letsPlay = await driver.findElement(By.className('bgOrange'))
        await letsPlay.click()
        let tryOne = await driver.findElement(By.className('btnsPlay'))
        await tryOne.click()
        let tryTwo = await driver.findElement(By.className('btnsPlay'))
        await tryTwo.click()
        let tryThree = await driver.findElement(By.className('btnsPlay'))
        await tryThree.click()
        let tryFour = await driver.findElement(By.className('btnsPlay'))
        await tryFour.click()
        let tryFive = await driver.findElement(By.className('btnsPlay'))
        await tryFive.click()
        let finishgame = await driver.findElement(By.className('btnsPlay'))
        await finishgame.click()
        let goback = driver.wait(until.elementLocated(By.className('goBack')))
        await goback.click()


    } catch (error) {
        console.log(error)
    }
})();