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

        let loginBtn = await driver.findElement(By.className('btnLogin'))
        await loginBtn.click()

        // Fazer login
        let loginUsername = await driver.findElement(By.id('username'))
        let loginPassword = await driver.findElement(By.id('password'))
        loginUsername.sendKeys("luisgomes2")
        loginPassword.sendKeys("gomes")
        let login = await driver.findElement(By.className('btn'))
        await login.click()

        // Escolher diário
        let diary = driver.wait(until.elementLocated(By.id('btnDiary')))
        await diary.click()

        // Criar uma nova secção
        let tellDiary = driver.wait(until.elementLocated(By.id('btnDiary')))
        await tellDiary.click()
        let txtTitle = driver.wait(until.elementLocated(By.id('txtTitle')))
        let txtDescription = driver.wait(until.elementLocated(By.id('txtDescription')))
        txtTitle.sendKeys("Adorei")
        txtDescription.sendKeys("Hoje gostei do meu dia e amanha vou adorar pois comi lasanha")
        let writeDiary = await driver.findElement(By.className('orangebtns'))
        await writeDiary.click()
        let close = await driver.findElement(By.className('closebtn'))
        await close.click()

    } catch (error) {
        console.log(error)
    }
})();