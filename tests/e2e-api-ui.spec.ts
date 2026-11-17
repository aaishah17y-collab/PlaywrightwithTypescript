import { test, expect } from '@playwright/test';


test('E2E-API-UI Test', async ({ playwright }) => {
  const apiContext = await playwright.request.newContext();
  const response = await apiContext.post('https://reqres.in/api/users', {
    data: { name: 'Your Name', job: 'QA +AI Automation' }
  });

  expect(response.ok()).toBeTruthy();
  const user = await response.json();
  console.log('API User Created:', user);
});