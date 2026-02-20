import { Page } from '@playwright/test';
import path from 'path';
import { FormLocators } from '../locators/FormLocators';

export class FormPage {

  constructor(private readonly page: Page) { }

  // ===============================
  // Navigation
  // ===============================

  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async navigateToPracticeForm(): Promise<void> {
    await this.page.locator('div.card-body')
      .filter({ hasText: 'Forms' })
      .click();

    await this.page.getByText('Practice Form', { exact: true }).click();
  }

  // ===============================
  // Fill Complete Form
  // ===============================

  async fillCompleteForm(): Promise<void> {

    await this.page.fill(FormLocators.firstName, 'John');
    await this.page.fill(FormLocators.lastName, 'Doe');
    await this.page.fill(FormLocators.email, 'john@test.com');
    await this.page.click(FormLocators.genderMale);
    await this.page.fill(FormLocators.mobile, '9876543210');

    await this.selectDateOfBirth('19', 'February', '1995');

    await this.page.fill(FormLocators.subjects, 'Maths');
    await this.page.locator('.subjects-auto-complete__menu').waitFor();
    await this.page.keyboard.press('Enter');

    await this.page.click(FormLocators.hobbySports);

    const filePath = path.resolve('src/test-data/sample.png');
    await this.page.setInputFiles(FormLocators.uploadPicture, filePath);

    await this.page.fill(FormLocators.address, 'New York');

    await this.page.click(FormLocators.state);
    await this.page.getByText('NCR', { exact: true }).click();


    await this.page.click(FormLocators.city);
    await this.page.getByText('Delhi', { exact: true }).click();
    await this.submit();

  }

  // ===============================
  // Date of Birth
  // ===============================

  async selectDateOfBirth(
    day: string,
    month: string,
    year: string
  ): Promise<void> {

    await this.page.click(FormLocators.dateOfBirth);
    await this.page.selectOption(FormLocators.yearSelect, year);
    await this.page.selectOption(FormLocators.monthSelect, month);

    const formattedDay = day.padStart(2, '0');

    await this.page.locator(
      `.react-datepicker__day--0${formattedDay}:not(.react-datepicker__day--outside-month)`
    ).click();
    await this.page.waitForSelector('.react-datepicker', { state: 'hidden' });
  }

  // ===============================
  // Submit
  // ===============================

  async submit(): Promise<void> {
    const submitBtn = this.page.locator(FormLocators.submit);

    await submitBtn.click();

    await this.page.waitForSelector(FormLocators.successTitle, {
      state: 'visible'
    });

    // Wait for modal animation to complete
    // await this.page.waitForLoadState('networkidle');
  }


  // ===============================
  // Success Validation
  // ===============================

  async waitForSuccessMessage(): Promise<void> {
    await this.page.waitForSelector(FormLocators.successTitle, {
      state: 'visible',
    });

    // Wait 2 seconds so the success message is visible before closing.
    await this.page.waitForTimeout(2000);

    // Press Escape to close the Bootstrap modal.
    // This avoids the Google Ads anchor iframe that sits over the Close button
    // and intercepts pointer events, causing click() to timeout.
    await this.page.keyboard.press('Escape');

    await this.page.waitForSelector(FormLocators.successTitle, {
      state: 'hidden',
      timeout: 10000,
    });
  }

  async isSuccessVisible(): Promise<boolean> {
    return await this.page.isVisible(FormLocators.successTitle);
  }
}
