import { Builder, By, WebDriver } from 'selenium-webdriver';

describe('Zalando Terms and Conditions Page Navigation Test', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        // Add any login steps if necessary
    });

    // Placeholder test that always passes
    test('Placeholder Test', () => {
        expect(true).toBe(true);
    });

    test('Clicking Terms & Conditions Element Redirects to the Terms Page', async () => {
        await driver.get('https://www.zalando.co.uk/');

        try {
            // Click on the "Terms & Conditions" element
            const termsElement = await driver.findElement(By.xpath("//span[contains(text(), 'Terms & Conditions')]"));
            await termsElement.click();

            // Sleep for a moment to allow the page to load (you can remove this in production)
            await driver.sleep(2000);

            // Get the current URL
            const currentUrl = await driver.getCurrentUrl();

            // Check if the URL contains the expected path
            expect(currentUrl).toContain('/zalando-terms/');

        } catch (error) {
            throw new Error('Terms & Conditions page navigation failed: ' + error);
        }
    }, 30000); // Adjust the timeout as needed

    afterAll(async () => {
        await driver.quit();
    });
});
