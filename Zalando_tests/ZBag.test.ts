import { Builder, By, WebDriver, until, WebElement } from 'selenium-webdriver';

describe('Zalando Shopping Bag Functionality Test', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        // Add any login steps if necessary
    });

    test('Access Shopping Bag on Zalando', async () => {
        await driver.get('https://www.zalando.co.uk/');

        let bagButton: WebElement;
        try {
            bagButton = await driver.wait(until.elementLocated(By.css("[data-testid='cart-link']")), 10000);
            await bagButton.click();

            // Verification: Check if the URL is the shopping bag page
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toContain('/cart/'); // Using 'toContain' for partial match

        } catch (error) {
            throw new Error('Shopping bag button not found: ' + error);
        }
    }, 30000); // Adjust the timeout as needed

    afterAll(async () => {
        await driver.quit();
    });
});
