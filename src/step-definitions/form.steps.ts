import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FormPage } from '../pages/FormPage';
import { CustomWorld } from '../support/world';
import { config } from '../config/env';

let formPage: FormPage;

// ===============================
// Navigation
// ===============================

Given('I open DemoQA homepage', async function (this: CustomWorld) {
    formPage = new FormPage(this.page);
    await formPage.open(config.baseUrl);
});

When('I navigate to Practice Form', async function () {
    await formPage.navigateToPracticeForm();
});

// ===============================
// Valid Scenario
// ===============================

When('I fill the form', async function () {
    await formPage.fillCompleteForm();
});

Then('I should see success message', async function () {
    await formPage.waitForSuccessMessage();
});



