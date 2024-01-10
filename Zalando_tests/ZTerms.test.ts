import { Builder, By, WebDriver } from 'selenium-webdriver';

describe('Zalando Terms and Conditions Page Navigation Test', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
     
    });

    
    test('Placeholder Test', () => {
        expect(true).toBe(true);
    });

    test('Clicking Terms & Conditions Element Redirects to the Terms Page', async () => {
        await driver.get('https://www.zalando.co.uk/');

        try {
            
            const termsElement = await driver.findElement(By.xpath("//span[contains(text(), 'Terms & Conditions')]"));
            await termsElement.click();

            await driver.sleep(2000);

            const currentUrl = await driver.getCurrentUrl();

            expect(currentUrl).toContain('/zalando-terms/');

        } catch (error) {
            throw new Error('Terms & Conditions page navigation failed: ' + error);
        }
    }, 30000); 

    afterAll(async () => {
        await driver.quit();
    });
});
