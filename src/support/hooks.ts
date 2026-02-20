import { Before, After, AfterStep, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { CustomWorld } from './world';
setDefaultTimeout(120000);
Before(async function (this: CustomWorld) {
  await this.init();
});

AfterStep(async function (this: CustomWorld, { result }) {
  if (result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, 'image/png');
  }
});

After(async function (this: CustomWorld) {
  await this.close();
});
