import { Builder, By, WebDriver } from 'selenium-webdriver';

describe('Zalando Women Page Navigation Test', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        // Add any login steps if necessary
    });

    test('Clicking Women Element Redirects to Women Page', async () => {
        await driver.get('https://www.zalando.co.uk/');

        try {
            // Click on the "Women" element
            const womenElement = await driver.findElement(By.xpath("//a[@href='/women-home/']"));
            await womenElement.click();

            // Sleep for a moment to allow the page to load (you can remove this in production)
            await driver.sleep(2000);

            // Get the current URL
            const currentUrl = await driver.getCurrentUrl();

            // Check if the URL contains the expected path
            expect(currentUrl).toContain('/women-home/');

        } catch (error) {
            throw new Error('Women page navigation failed: ' + error);
        }
    }, 30000); // Adjust the timeout as needed

    afterAll(async () => {
        await driver.quit();
    });
});
