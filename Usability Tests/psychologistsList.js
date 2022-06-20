const { Builder, By, Key, until, WebDriver } = require('selenium-webdriver');
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
        loginUsername.sendKeys("carloslopes")
        loginPassword.sendKeys("lopes")
        let login = await driver.findElement(By.className('btn'))
        await login.click()

        // Escolher lista de psicólogos (Navbar)
        let navPsychologists = driver.wait(until.elementLocated(By.className('navPsychologists')))
        await navPsychologists.click()


        //selecionar psicologo
        let psychologist = driver.wait(until.elementLocated(By.className('btn fontAsap')))
        await psychologist.click()


        //Marcar consulta
        let makeAppointment = driver.wait(until.elementLocated(By.className('fontNunito bgOrange orangebtns')))
        await makeAppointment.sendKeys(Key.ENTER)
        await driver.findElement(By.xpath("//select/option[@value='pedrosilva']")).click()
        let birthdate = await driver.findElement(By.id('txtAppointmentDate'))
        birthdate.sendKeys("21/06/2022")
        let appointmentHour = driver.wait(until.elementLocated(By.className('hour')))
        await appointmentHour.sendKeys(Key.ENTER)
        let saveAppointment = driver.wait(until.elementLocated(By.id('marcar')))
        await saveAppointment.sendKeys(Key.ENTER)




    } catch (error) {
        console.log(error)
    }
})();