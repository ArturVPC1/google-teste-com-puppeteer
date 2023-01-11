const puppeteer = require('puppeteer');

async function run() {
  // Inicializa o navegador
  const browser = await puppeteer.launch({headless: false});

  // Abre uma nova página
  const page = await browser.newPage();

  // Vai para o site do Google
  await page.goto('https://www.google.com/');

  // Digita a palavra "teste" na barra de pesquisa
  await page.type('input[name=q]', 'teste');

  // Envia o formulário de pesquisa
  await page.evaluate(() => {
    document.querySelector('form').submit();
  });

  // Espera até que a página carregue os resultados da pesquisa
  await page.waitForSelector('#search');

  //tirar print
  await page.screenshot({path: 'FUNCIONOU.png'});

  // Fecha o navegador
  await browser.close();
}

run();
