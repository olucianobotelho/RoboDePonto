const puppeteer = require('puppeteer');
(async () => {
  const browserFetcher = puppeteer.createBrowserFetcher();
  const revisionInfo = await browserFetcher.download('533271');
  const browser = await puppeteer.launch({headless:false
  });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0); 
    await page.goto('http://192.168.32.21');
    await page.type('#lblLogin',"teste fabrica")
    await page.type('#lblPass','111111') 
    await page.click('.primary');  
    page.waitForNavigation(10200);
    await page.waitForSelector('#divMenuEvents');
    await page.click('[class="tile-content iconic bg-orange fg-white"]');
    await page.waitForSelector('#downloadEvents'); 
    await page.click('[class="menuSelected"]');
    page.waitForNavigation(9800);
    await page.click('[class="button primary"]');  
    console.log("Download iniciado")
  // SCRIPT VERIFICANDO SE FOI BAIXADO
  let fs = require('fs');
  await fs.watch('C:/Users/luciano.paiva/Downloads',(changeType,file)=>{
    // AQUI É GERADA A DATA DO DIA E CONVERTIDA EM STRING E DEVIDAMENTE FORMATADA
    data = new Date()
    let stringdate =((data.getDate() )) + "-" + ((data.getMonth() + 1))+ "-" + data.getFullYear()
    dataconvertida= stringdate.toString()       
      //  AQUI É GERADA A VARIAVEL PARA NOMEAR O ARQUIVO INCLUINDO A DATA DO DIA
       nometeste= "Arquivo de Ponto da Sede "+`${dataconvertida}`
	  setTimeout(function(){
		console.log(`Arquivo de ponto ${file} coletado`)
	  console.log("Preparando para renomear")
	  },20000)        
       // AQUI O ARQUIVO BAIXADO É SELECIONADO E APLICADO A ALTERAÇÃO DE NOME INCLUINDO O FORMATO TXT
       setTimeout(function() {	
		arquivo = `C:/Users/luciano.paiva/Downloads/${file}`		   
		   console.log("Renomeando...")
        fs.rename(arquivo, `C:/Ponto_4327/${nometeste}.txt` , function(){              
                 // AQUI ELE INFORMA O ARQUIVO QUE FOI RENOMEADO
                  console.log('Arquivo renomeado foi: ', file);
             })		
    }, 1500000);
  })  
})
();