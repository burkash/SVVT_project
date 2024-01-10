import { Builder, By, WebDriver } from 'selenium-webdriver';

describe('Zalando Search Functionality Test', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        
    });

    test('Search Functionality Redirects to Results Page', async () => {
        await driver.get('https://www.zalando.co.uk/');

        try {
            const searchBar = await driver.findElement(By.id('header-search-input'));
            await searchBar.sendKeys('Winter Jacket');
            await searchBar.submit();

        } catch (error) {
            throw new Error('Search functionality failed: ' + error);
        }
    }, 30000); 

    afterAll(async () => {
        await driver.quit();
    });
});
