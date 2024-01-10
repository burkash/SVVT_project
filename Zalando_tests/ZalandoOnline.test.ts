import { Builder, WebDriver } from 'selenium-webdriver';

describe('Zalando Website Online Test', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    test('Check if Zalando website is online', async () => {
        try {
            await driver.get('https://www.zalando.co.uk');
            const title = await driver.getTitle();
            expect(title).toBeTruthy(); 
        } catch (error) {
            fail('The website is not accessible.'); 
        }
    }, 30000); 

    afterAll(async () => {
        await driver.quit();
    });
});
