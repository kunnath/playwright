import { test, expect } from '@playwright/test';

// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { equal } from 'node:assert';
import { text } from 'node:stream/consumers';

test('IhreFahrzeugdaten', async ({ page }) => {
    console.log('1.finsearch.spec.ts');
    console.log('Change to de-DE-one settings');
    await page.goto('https://assets.oneweb.mercedes-benz.com/plugin/tradein-app/index.html');
    await page.getByRole('button').click();
    await page.getByRole('combobox', { name: 'Configuration' }).selectOption('de-DE-one');
    await page.getByRole('combobox', { name: 'WKO Type' }).selectOption('User with multiple vehicles and dealer');
    await page.getByText('Apply settings').click()
    console.log('Apply settings');
    //verify the FIN radio button
    await page.getByText('FIN', { exact: true }).click();
    const radio = page.getByRole('radio', { name: 'choice' })
    expect(radio).toBeChecked()
    expect(radio).not.toBeChecked() 
  

    }
    )