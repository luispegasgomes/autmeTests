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

        // Entrar no Registo
        let registerBtn = await driver.findElement(By.className('btnRegister'))
        await registerBtn.click()

        // Fazer registo
        await driver.findElement(By.xpath("//select/option[@value='psychologist']")).click()
        let phaseOneBtn = await driver.findElement(By.className('btn'))
        await phaseOneBtn.click()
        let name = await driver.findElement(By.id('txtRegisterName'))
        name.sendKeys("João")
        let surname = await driver.findElement(By.id('txtRegisterSurname'))
        surname.sendKeys("Malhão")
        let birthdate = await driver.findElement(By.id('txtRegisterBirthdate'))
        birthdate.sendKeys("05/06/1970")
        await driver.findElement(By.xpath("//select/option[@value='M']")).click()
        let phaseTwoBtn = await driver.findElement(By.className('btn'))
        await phaseTwoBtn.click()
        let registerUsername = await driver.findElement(By.id('txtRegisterUsername'))
        registerUsername.sendKeys("Jolhão")
        let email = await driver.findElement(By.id('txtRegisterEmail'))
        email.sendKeys("joaomalhao@gmail.com")
        let registerPassword = await driver.findElement(By.id('txtRegisterPassword'))
        registerPassword.sendKeys("abc123")
        let registerconfirmPassword = await driver.findElement(By.id('txtRegisterConfirmPassword'))
        registerconfirmPassword.sendKeys("abc123")
        let phaseThreeBtn = await driver.findElement(By.className('btn'))
        await phaseThreeBtn.click()
        let contact = await driver.findElement(By.id('txtRegisterContact'))
        contact.sendKeys("928374824")
        let location = await driver.findElement(By.id('txtRegisterLocation'))
        location.sendKeys("Rua Cooperativa 7 Bicas")
        let postalCode = await driver.findElement(By.id('txtRegisterPostalCode'))
        postalCode.sendKeys("4460-303")
        let city = await driver.findElement(By.id('txtRegisterCity'))
        city.sendKeys("Matosinhos")
        let createAccountBtn = await driver.findElement(By.className('btn'))
        await createAccountBtn.click()


    } catch (error) {
        console.log(error)
    }
})();