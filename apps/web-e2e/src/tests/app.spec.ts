import { expect, test } from '@playwright/test';

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render Vite and React logos with correct links', async ({
    page,
  }) => {
    const viteLink = page.getByRole('link', { name: 'Vite logo' });
    const reactLink = page.getByRole('link', { name: 'React logo' });

    await expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
    await expect(reactLink).toHaveAttribute('href', 'https://react.dev');
  });

  test('should show the correct heading', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Vite + React' });

    await expect(heading).toBeVisible();
  });

  test('should increment counter correctly', async ({ page }) => {
    const button = page.getByRole('button', { name: /count is/i });

    await expect(button).toHaveText('count is 0');

    await button.click();
    await expect(button).toHaveText('count is 1');

    await button.click();
    await expect(button).toHaveText('count is 2');
  });

  test('should display helper text', async ({ page }) => {
    const helperText = page.getByText(
      'Click on the Vite and React logos to learn more'
    );

    await expect(helperText).toBeVisible();
  });
});
