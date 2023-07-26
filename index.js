const { Builder, Browser, By, Key, until } = require('selenium-webdriver');


//     let driver = new Builder().forBrowser(Browser.FIREFOX).build();
//    driver.get('https://www.instagram.com/')

 let driver = new Builder().forBrowser(Browser.FIREFOX).build();
 driver.then(d => d.get('https://www.instagram.com/'));  // You can do this...
//  driver.get('https://www.instagram.com/');      // ...or this

// let driver1 = new Builder().forBrowser(Browser.FIREFOX).build();
// driver1.then(d => d.get('https://www.google.com/'));  // You can do this...

    const locators = {
        loginName: By.css("div.-MzZI:nth-child(1) > div:nth-child(1) > label:nth-child(1) > input:nth-child(2)"),
        loginPass: By.css("div.-MzZI:nth-child(2) > div:nth-child(1) > label:nth-child(1) > input:nth-child(2)"),
        loginClick: By.css("div.bkEs3:nth-child(3)"),
        salvarInformacoes: By.xpath("/html/body/div[1]/section/main/div/div/div/div/button"),
        ativarNotificacoes: By.css("button._a9--:nth-child(2)"),
        buttonSeguidores: By.css("li._aa_5:nth-child(2) > a:nth-child(1) > div:nth-child(1)")
    }

    const navigators = {
        urlPerfilInsta1: "https://www.instagram.com/silvamendesti/",
        urlPerfilInsta2: "https://www.instagram.com/recifeordinario/"
    }

    const loginName = () => {
        setTimeout(() => {
            driver.findElement(locators.loginName).sendKeys('juniormedeiros___')
        }, 15000)
    }
    const loginPass = () => {
        setTimeout(() => {
            driver.findElement(locators.loginPass).sendKeys('Juninho9090@')
        }, 15000)
    }
    const loginClick = () => {
        setTimeout(() => {
            driver.findElement(locators.loginClick).click()
        }, 20000)
    }
    const salvarInformacoes = () => {
        setTimeout(() => {
            driver.findElement(locators.salvarInformacoes).click()
        }, 30000)
    }
    const ativarNotificacoes = () => {
        setTimeout(() => {
            driver.findElement(locators.ativarNotificacoes).click()
        }, 45000)
    }
    const urlPerfilInsta = () => {
        setTimeout(async () => {
            driver.navigate().to(navigators.urlPerfilInsta2)
        }, 55000)
    }
    const buttonSeguidores = () => {
        setTimeout(() => {
            driver.findElement(locators.buttonSeguidores).click()
        }, 70000)
    }

    const buscarElements = async () => {
            const elements = await driver.findElements(By.className('_aacl _aaco _aacw _adda _aad6 _aade'))

           elements.forEach(el => {
                console.log(el)
            })
   }
  
// passo a passo do ROBÔ
 setTimeout(() => {
    loginName() // 1
    loginPass() // 2
    loginClick() // 3
    salvarInformacoes() // 4
    ativarNotificacoes() // 5
    urlPerfilInsta() // 6
    buttonSeguidores() // 7
 }, 30000)

 setTimeout(() => {
    buscarElements() 
}, 180000);

////#####################################################################################
// const { Builder, Browser, By, Key, until } = require('selenium-webdriver');


// //     let driver = new Builder().forBrowser(Browser.FIREFOX).build();
// //    driver.get('https://www.instagram.com/')

//  let driver = new Builder().forBrowser(Browser.FIREFOX).build();
//  driver.then(d => d.get('https://www.instagram.com/'));  // You can do this...
// //  driver.get('https://www.instagram.com/');      // ...or this

// // let driver1 = new Builder().forBrowser(Browser.FIREFOX).build();
// // driver1.then(d => d.get('https://www.google.com/'));  // You can do this...

//     const locators = {
//         loginName: By.css("div.-MzZI:nth-child(1) > div:nth-child(1) > label:nth-child(1) > input:nth-child(2)"),
//         loginPass: By.css("div.-MzZI:nth-child(2) > div:nth-child(1) > label:nth-child(1) > input:nth-child(2)"),
//         loginClick: By.css("div.bkEs3:nth-child(3)"),
//         salvarInformacoes: By.xpath("/html/body/div[1]/section/main/div/div/div/div/button"),
//         ativarNotificacoes: By.css("button._a9--:nth-child(2)"),
//         buttonMensagem: By.css("div._aada"),
//         escreverMensagem: By.css("._abbh > textarea:nth-child(1)"),
//         buttonEnviarMensagem: By.css("div._abbi:nth-child(3) > button:nth-child(1)")
//     }

//     const navigators = {
//         urlPerfilInsta: "https://www.instagram.com/silvamendesti/",
//     }

//     const loginName = () => {
//         setTimeout(() => {
//             driver.findElement(locators.loginName).sendKeys('juniormedeiros___')
//         }, 15000)
//     }
//     const loginPass = () => {
//         setTimeout(() => {
//             driver.findElement(locators.loginPass).sendKeys('Juninho9090@')
//         }, 15000)
//     }
//     const loginClick = () => {
//         setTimeout(() => {
//             driver.findElement(locators.loginClick).click()
//         }, 20000)
//     }
//     const salvarInformacoes = () => {
//         setTimeout(() => {
//             driver.findElement(locators.salvarInformacoes).click()
//         }, 30000)
//     }
//     const ativarNotificacoes = () => {
//         setTimeout(() => {
//             driver.findElement(locators.ativarNotificacoes).click()
//         }, 35000)
//     }
//     const urlPerfilInsta = () => {
//         setTimeout(async () => {
//             driver.navigate().to(navigators.urlPerfilInsta)
//         }, 40000)
//     }
//     const buttonMensagem = () => {
//         setTimeout(() => {
//             driver.findElement(locators.buttonMensagem).click()
//         }, 55000)
//     }
//     const escreverMensagem = () => {
//         setTimeout(() => {
//             driver.findElement(locators.escreverMensagem).sendKeys('oi bolho eu sou um robô')
//         }, 65000)
//     }
//     const buttonEnviarMensagem = () => {
//         setTimeout(() => {
//             driver.findElement(locators.buttonEnviarMensagem).click()
//         }, 70000)
//     }

//     const buscarElement = async () => {
//             const elements = await driver.findElements(By.className('_aacl _aaco _aacu _aacx _aad6 _aade'))

//            elements.forEach(el => {
//                 el.getText().then(t => {
//                         if(t == 'bom dia') {
//                             console.log('bom dia')
//                         }
//                         else console.log('não achou o bom dia')
//                 })
//             })
//             // driver.wait(until.elementTextContains())
//             // query.getText().then(title => {
//             //     if(title == 'Eee') {
//             //         console.log('Eee')
//             //     }
//             // })
//    }
//       // query.wait(async () => {
//         // query.getText().then(title =>  {
//     //         console.log(title)
//     //       return title === 'Eee';
//     //     });
//     //   });
//     // query.wait(until.('webdriver - Google Search'));

//     // driver.wait(() => {
//     //     return driver.getTitle().then(title =>  {
//     //       return title === 'oi';
//     //     });
//     //   }, 180000);

//     // driver.

// // passo a passo do ROBÔ
//  setTimeout(() => {
//     loginName() // 1
//     loginPass() // 2
//     loginClick() // 3
//     salvarInformacoes() // 4
//     ativarNotificacoes() // 5
//     urlPerfilInsta() // 6
//     buttonMensagem() // 7
//     escreverMensagem() // 8
//     buttonEnviarMensagem() // 9
//  }, 60000)

//  setInterval(() => {
//     buscarElement() 
// }, 180000);
    
//#####################################################################################
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>

//     async function example() {

//         await driver.get('https://www.instagram.com/')

//         await driver.findElement(By.className('_2hvTZ')).sendKeys('silvamendesti').catch(onrejected => {console.log(onrejected)})

//         await driver.findElement(By.css('div.-MzZI:nth-child(2) > div:nth-child(1) > label:nth-child(1) > input:nth-child(2)')).sendKeys('Juninho9090').catch(onrejected => {console.log(onrejected)})
        
//         driver.sleep(2000)
//         await driver.findElement(By.css('div.bkEs3:nth-child(3)')).click().catch(onrejected => {console.log(onrejected)})

//         setTimeout(async () => {
//             await driver.navigate().to('https://www.instagram.com/accounts/onetap/?next=%2F')

//             await driver.findElement(By.xpath('/html/body/div[1]/section/main/div/div/div/div/button')).click()
//         }, 60000)

//         setTimeout(async () => {

//             await driver.findElement(By.css('button._a9--:nth-child(2)')).click()
//         },65000)

//         setTimeout(async () => {
//             await driver.navigate().to('https://www.instagram.com/evlyn.monteiro/')

//             // await driver.findElement(By.css('button._a9--:nth-child(2)')).click()
//         },70000)

//         setTimeout(async () => {
//             await driver.findElement(By.css('div._ab9o:nth-child(1) > button:nth-child(1) > div:nth-child(1)')).click()
//         },75000)

//         setTimeout(async () => {
//             await driver.findElement(By.css('._abbh > textarea:nth-child(1)')).sendKeys('oi bolho eu sou um robô')
//         },80000)

//         setTimeout(async () => {
//             await driver.findElement(By.css('div._abbi:nth-child(3) > button:nth-child(1)')).click()
//         },85000)
        



//         // driver.sleep(3)
//         // driver.sleep(3000)
//         // await driver.get('https://www.instagram.com/evlyn.monteiro/') 

//         // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//     // } finally {
//     //     // await driver.quit();
//     // }
// }

// example()