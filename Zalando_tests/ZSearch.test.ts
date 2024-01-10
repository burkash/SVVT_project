import { Builder, By, WebDriver } from 'selenium-webdriver';

describe('Zalando Search Functionality Test', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        // Add any login steps if necessary
    });

    test('Search Functionality Redirects to Results Page', async () => {
        await driver.get('https://www.zalando.co.uk/');

        try {
            const searchBar = await driver.findElement(By.id('header-search-input'));
            await searchBar.sendKeys('Winter Jacket');
            await searchBar.submit();

            // Add verification/assertion here
            // For example, you can check if specific elements exist on the results page.

        } catch (error) {
            throw new Error('Search functionality failed: ' + error);
        }
    }, 30000); // Adjust the timeout as needed

    afterAll(async () => {
        await driver.quit();
    });
});
