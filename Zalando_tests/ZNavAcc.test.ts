import { Builder, By, WebDriver, until, WebElement } from 'selenium-webdriver';

describe('Zalando New Section Navigation to Account Test', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    test('Navigate to a section on Zalando and check for URL change', async () => {
        await driver.get('https://www.zalando.co.uk/');

        let newSectionButton: WebElement;
        try {
            
            newSectionButton = await driver.wait(until.elementLocated(By.css("[data-testid='user-account-icon']")), 10000);
            await newSectionButton.click();
        } catch (error) {
            throw new Error('New section button not found: ' + error);
        }

        
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).not.toBe('https://www.zalando.co.uk/');
    }, 30000); 

    afterAll(async () => {
        await driver.quit();
    });
});
