import { Builder, By, WebDriver, until, WebElement } from 'selenium-webdriver';

describe('Zalando Wishlist Test', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    test('Access Wishlist on Zalando leads to login page', async () => {
        await driver.get('https://www.zalando.co.uk/');

        let wishlistButton: WebElement;
        try {
            wishlistButton = await driver.wait(until.elementLocated(By.css("[data-testid='wardrobe']")), 10000);
            await wishlistButton.click();

            
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toContain('accounts.zalando.com/authenticate'); 

        } catch (error) {
            throw new Error('Wishlist button not found: ' + error);
        }
    }, 30000); 

    afterAll(async () => {
        await driver.quit();
    });
});
