import { Builder, By, WebDriver } from 'selenium-webdriver';

describe('Zalando Women Page Navigation Test', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    test('Clicking Women Element Redirects to Women Page', async () => {
        await driver.get('https://www.zalando.co.uk/');

        try {
            const womenElement = await driver.findElement(By.xpath("//a[@href='/women-home/']"));
            await womenElement.click();

            await driver.sleep(2000);

            const currentUrl = await driver.getCurrentUrl();

            expect(currentUrl).toContain('/women-home/');

        } catch (error) {
            throw new Error('Women page navigation failed: ' + error);
        }
    }, 30000); 
    afterAll(async () => {
        await driver.quit();
    });
});
