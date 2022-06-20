const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('chromedriver.exe');

(async function openChromeTest() {
    try {
        let driver = await new Builder()
            .setChromeOptions(service)
            .forBrowser('chrome')
            .build();


        driver.manage().window().maximize()
        await driver.get('https://autme-luispegasgomes.vercel.app/');

        // Get title 
        let title = await driver.getTitle();
        //console.log(title);

        let loginBtn = await driver.findElement(By.className('btnLogin'))
        await loginBtn.click()

        // Fazer login
        let loginUsername = await driver.findElement(By.id('username'))
        let loginPassword = await driver.findElement(By.id('password'))
        loginUsername.sendKeys("josetavares")
        loginPassword.sendKeys("tavares")
        let login = await driver.findElement(By.className('btn'))
        await login.click()


        // Escolher quizMe
        let quizme = driver.wait(until.elementLocated(By.id('guessLevel')))
        await quizme.click()

        // jogar quizMe
        let response1 = driver.wait(until.elementLocated(By.id('q1')))
        await response1.sendKeys(Key.ENTER)
        let response2 = driver.wait(until.elementLocated(By.id('q2')))
        await response2.sendKeys(Key.ENTER)
        let response3 = driver.wait(until.elementLocated(By.id('q3')))
        await response3.sendKeys(Key.ENTER)
        let response4 = driver.wait(until.elementLocated(By.id('q1')))
        await response4.sendKeys(Key.ENTER)


        let endGame = driver.wait(until.elementLocated(By.className('goBack')))
        await endGame.sendKeys(Key.ENTER)



    } catch (error) {
        console.log(error)
    }
})();