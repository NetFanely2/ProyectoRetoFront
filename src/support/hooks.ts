import { Before, After, Status, World } from '@cucumber/cucumber';
import { ChromiumBrowser, chromium, Page, BrowserContext } from '@playwright/test';

// Extendemos la interfaz propia del World de Cucumber
export interface ICustomWorld extends World {
  page?: Page;
}

let browser: ChromiumBrowser;
let context: BrowserContext;

Before(async function (this: ICustomWorld) {

  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  this.page = await context.newPage();
});

After(async function (this: ICustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, 'image/png');
  }
  await this.page?.close();
  await context?.close();
  await browser?.close();
});