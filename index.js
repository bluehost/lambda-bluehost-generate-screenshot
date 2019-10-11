const chromium = require('chrome-aws-lambda');

exports.handler = async (event) => {

    const url = event.url;
    const width = event.width || 1366;
    const height = event.height || 768;
    const isMobile = event.isMobile || false;

    const browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.setViewport({width, height, isMobile});
    await page.goto(url);
    const screenshot = await page.screenshot({
        clip: {x: 0, y: 0, width, height},
        type: 'png',
        encoding: 'base64'
    });
    await browser.close();

    return screenshot;
};
