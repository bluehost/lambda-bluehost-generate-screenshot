const chromium = require('chrome-aws-lambda');

/**
 * Generate a screenshot from a URL.
 *
 * @param {string} url
 * @returns {Promise<string>}
 */
async function generateScreenshot(url, width = 1366, height= 768, isMobile = false) {

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
}

exports.handler = async (event) => {

    let screenshot = '';

    const url = decodeURIComponent(event.queryStringParameters.url);

    try {

        screenshot = await generateScreenshot(url);

    } catch (e) {

        console.log(e);

        return {
            statusCode: 500,
            headers: {},
            body: '',
            isBase64Encoded: false
        }

    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/png',
      },
      body: `data:image/png;base64,${screenshot}`,
      isBase64Encoded: true
    }
};
