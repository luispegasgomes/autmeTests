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

        // Escolher lista de crianças (Navbar)
        /* let navChildren = driver.wait(until.elementLocated(By.className('navChildren')))
        await navChildren.click() */

        // Escolher perfil
        let profile = driver.wait(until.elementLocated(By.className('profile')))
        await profile.click()



        // Mudar Contacto (perfil)
        /* let changeContact = await driver.findElement(By.className('changeContact'))
        await changeContact.click()

        await driver.wait(until.alertIsPresent())
        let alert = await driver.switchTo().alert()
        console.log(alert)
        await alert.sendKeys('938462746')
        await alert.accept() */



        // Mudar imagem de perfil (perfil)
        /* let changeProfileImg = await driver.findElement(By.className('changeProfileImg'))
        await changeProfileImg.click() */



        // Mudar password (perfil)
        let newPassword = await driver.findElement(By.className('newPassword'))
        let confirmPassword = await driver.findElement(By.className('confirmPassword'))
        let changePassword = driver.wait(until.elementLocated(By.className('changePassword')))
        newPassword.sendKeys("gomes")
        confirmPassword.sendKeys("gomes")
        await changePassword.click()
        let profileclose = driver.wait(until.elementLocated(By.className('closebtn')))
        await profileclose.click()

    } catch (error) {
        console.log(error)
    }
})();