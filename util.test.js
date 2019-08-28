const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

// Unit Test Example
test('should output name and age', () => {
    const text = generateText('Alec', 22);
    expect(text).toBe('Alec (22 years old)');
    // Can have multiple tests cases inside a suite
    /*
        const text2 =  generateText('Jake', 24)
        expect(text2).toBe('Jake (24 years old)');
    */
});

// Checking for false positives
test('should output dataless string', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
    // Checking if nothing is passed into generateText
    /*
        const text2 = generateText();
        expect(text2).toBe('undefined (undefined years old)');
    */
});

// Integgration Test

test('Should generate a valid text output', () => {
    const text = checkAndGenerate('Alec', 22);
    expect(text).toBe('Alec (22 years old)');
})


test('Should add user to DOM', async () => {
    const browser = await puppeteer.launch({
        headless: true, // False make UI visible
        // slowMo: 80,
        args: ['--window-size=1920,1080']
    })
    const page = await browser.newPage();
    page.goto('file:///C:/Users/apmas/Documents/Github/js-testing-introduction/index.html'
    );
    await page.waitForNavigation();
    await page.click('input#name');
    await page.type('input#name', 'Jean');
    await page.click('input#age');
    await page.type('input#age', '33');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent)
    expect(finalText).toBe('Jean (33 years old)');
}, 10000);