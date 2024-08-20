import { test, expect } from '@playwright/test';

// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { equal } from 'node:assert';
import { text } from 'node:stream/consumers';

test('fin', async ({ page }) => {
    console.log('1.finsearch.spec.ts');
    console.log('Change to de-DE-one settings');
    await page.goto('https://assets.oneweb.mercedes-benz.com/plugin/tradein-app/index.html');
    await page.getByRole('button').click();
    await page.getByRole('combobox', { name: 'Configuration' }).selectOption('de-DE-one');
    await page.getByRole('combobox', { name: 'WKO Type' }).selectOption('User with multiple vehicles and dealer');
    await page.getByText('Apply settings').click()
    console.log('Apply settings');
    console.log('1.Ihre Fahrzeugdaten');
    console.log('Click on FIN search');
    await page.getByText('FIN', { exact: true }).click();
    await page.getByPlaceholder('Ihre FIN eingeben').click();
    await page.getByPlaceholder('Ihre FIN eingeben').fill('WDD2050781R489147');
    await page.locator('wb-input').filter({ hasText: 'Erstzulassung' }).locator('wb-icon').click();
    await page.getByRole('button', { name: '2020' }).click();
    await page.getByRole('button', { name: 'Nov' }).click();
    await page.getByLabel('Aktueller Kilometerstand').click();
    await page.getByLabel('Aktueller Kilometerstand').fill('100000000');
    await page.getByRole('button', { name: 'Weiter' }).click();
    console.log('2.Ihre Kontaktinformation');
    await page.getByLabel('Vorname').click();
    await page.getByLabel('Vorname').fill('Automation');
    await page.getByLabel('Nachname').click();
    await page.getByLabel('Nachname').fill('qa');
    await page.getByLabel('E-Mail-Adresse').click();
    await page.getByLabel('E-Mail-Adresse').fill('trade-in@experienceone.com');
    console.log('Click on Next button ');
    await page.getByRole('button', { name: 'Weiter' }).click();
    console.log('3.Unser Orientierungswert');
    console.log('taking screenshot');
    await page.screenshot({path: 'screenshot/fincustomerconfirmationpage.png'});
    await page.getByRole('button', { name: 'Jetzt Angebot sichern' }).click();
    console.log('Click on Next button ');
    console.log('4.Ihr Mercedes-Benz Partner');
    // await page.getByTestId('dl-search-input').fill('13059, Berlin');
    // await page.getByTestId('dl-search-input').press('Enter');
    // await page.getByTestId('dl-search-input').focus();
    // await page.getByTestId('dl-search-input').press('Enter');
    // await page.waitForTimeout(3000);
    for (const li of await page.getByRole('button', { name: '2',exact: true }).first().all())
    await li.click()
    await page.waitForTimeout(2000);
    const link =  await page.locator('.leaflet-marker-icon').first().count();
    console.log("link1 found " + link);
    if (link > 0)
    {
        for (const pi of await page.locator('.leaflet-marker-icon').first().all())
        await pi.click();

    }
    await page.waitForTimeout(2000);
    const elm =  await page.locator('div:nth-child(4) > div:nth-child(3)').first().count();
    console.log("link2 found " + elm);
    if (elm > 0)
    {

       await page.locator('div:nth-child(4) > div:nth-child(3)').first().click();

    }

    await page.getByRole('button', { name: 'Diesen Partner wählen' }).click();
    console.log('5.Ihr zukünftiger Mercedes');
    await page.locator('label').filter({ hasText: 'Ich interessiere mich für einen Mercedes Neuwagen/Vorführwagen' }).locator('div').click();
    await page.locator('label').filter({ hasText: 'Ich interessiere mich für einen Mercedes Gebrauchtwagen' }).locator('div').click();
    await page.locator('label').filter({ hasText: 'Ich möchte ohne Wunschmodell fortfahren' }).locator('div').click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    console.log('6.Weitere Informationen');
    console.log('Enter the  final Contact details');
    await page.getByLabel('Vorname').click();
    await page.getByLabel('Vorname').fill('automaton');
    await page.getByLabel('Nachname').fill('qa');
    await page.getByLabel('E-Mail-Adresse').click();
    await page.getByLabel('E-Mail-Adresse').fill('teadein@experienceone.com');
    await page.getByLabel('Ihre Nachricht').click();
    await page.getByLabel('Ihre Nachricht').fill('qa');
    await page.locator('wb-radio-control').filter({ hasText: 'Telefon' }).locator('div').click();
    await page.getByLabel('Telefonnummer').click();
    await page.getByLabel('Telefonnummer').fill('45465656565');
    await page.getByRole('combobox', { name: 'Bevorzugtes Zeitfenster' }).selectOption('morning');
    await page.getByLabel('Ihre Nachricht').click();
    await page.getByLabel('Ihre Nachricht').fill('fin qa');
    await page.getByRole('button', { name: 'Weiter' }).isEnabled();
    await page.screenshot({path: 'screenshot/contactfordealer.png'});
    await page.getByRole('button', { name: 'Weiter' }).click();
    console.log('7.Wir haben Ihre Anfrage erhalten.');
    console.log('Clicked on Weiter');
    await page.waitForTimeout(2000);
    await page.screenshot({path: 'screenshot/finconfirmationpage.png'});
    console.log('taking screenshot');

});