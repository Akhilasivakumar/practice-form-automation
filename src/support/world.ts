import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { config } from '../config/env';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async launchBrowser() {
    this.browser = await chromium.launch({
      headless: config.headless
    });
  }

  async createContextAndPage() {
    this.context = await this.browser.newContext({ baseURL: config.baseUrl });
    this.page = await this.context.newPage();
  }

  async init() {
    await this.launchBrowser();
    await this.createContextAndPage();
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
