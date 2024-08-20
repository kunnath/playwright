import { test, expect } from '@playwright/test';


test('model', async ({ page }) => {
    console.log('2.modelsearch.spec.ts');
    console.log('Change to de-DE-one settings');
    await page.goto('https://assets.oneweb.mercedes-benz.com/plugin/tradein-app/index.html');
    await page.getByRole('button').click();
    await page.getByRole('combobox', { name: 'Configuration' }).selectOption('de-DE-one');
    await page.getByRole('combobox', { name: 'WKO Type' }).selectOption('User with multiple vehicles and dealer');
    await page.getByText('Apply settings').click()
    console.log('1.Ihre Fahrzeugdaten');
    console.log('Click on the Modellsuche');
    await page.locator('label').filter({ hasText: 'Modellsuche' }).locator('div').click();
    await page.locator('wb-input').filter({ hasText: 'Erstzulassung' }).locator('wb-icon').click();
    await page.getByRole('button', { name: '2020' }).click();
    await page.getByRole('button', { name: 'Nov' }).click();
    await page.locator('#Make svg').first().click();
    await page.getByLabel('Hersteller').click();
    await page.getByRole('listitem').filter({ hasText: 'Mercedes-Benz' }).click();
    await page.locator('#Model path').click();
    await page.getByLabel('Modell', { exact: true }).click();
    await page.getByRole('listitem').filter({ hasText: 'CLA' }).click()
    console.log('Fahrzeugtyp ');
    await page.getByRole('combobox', { name: 'Fahrzeugtyp' }).selectOption('Kombi');
    console.log('Kraftstoff ');
    await page.getByRole('combobox', { name: 'Kraftstoff' }).selectOption('Benzin');
    console.log('Motor/Leistung ');
    await page.getByRole('combobox', { name: 'Motor/Leistung' }).selectOption({ index: 2 });
    console.log('Getriebe');
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'Getriebe' }).selectOption({ index: 1 });
    console.log('Modellversion ');
    await page.waitForTimeout(2000);
    await page.getByRole('combobox', { name: 'Modellversion' }).hover();
    await page.getByRole('combobox', { name: 'Modellversion' }).selectOption({ index: 2 });
    console.log('Screenshot of model search');
    await page.screenshot({path: 'screenshot/beforecheckbox.png'})
    console.log('Checkbox validation ');
    await page.getByText('DE - Kb5 CLA 200 EU6d-T, SB (EURO 6d-TEMP) Edition 1, 2019 - 2019', { exact: false }).click();
    await page.waitForTimeout(2000);
    console.log('Enter the Aktueller Kilometerstand ');
    await page.getByLabel(('Aktueller Kilometerstand')).isEnabled();
    console.log('screenshot before before checkbox');
    await page.screenshot({path: 'screenshot/aftercheckbox.png'});
    await page.getByLabel('Aktueller Kilometerstand').isEditable();
    console.log('screenshot after  checkbox');
    await page.getByLabel('Aktueller Kilometerstand').isEditable();
    await page.getByLabel('Aktueller Kilometerstand').fill('1000');
    await page.screenshot({path: 'screenshot/Kilometerstand.png'});
    await page.getByRole('button', { name: 'Weiter' }).click();
    console.log('2.Ihre Kontaktinformation');
    console.log('Click on next button');
    await page.waitForTimeout(2000);
    await page.getByLabel('Vorname').click();
    await page.getByLabel('Vorname').fill('Automation');
    await page.getByLabel('Nachname').fill('qa');
    await page.getByLabel('Vorname').click();
    await page.getByLabel('E-Mail-Adresse').click();
    await page.getByLabel('E-Mail-Adresse').fill('trade-in@experienceone.com');
    console.log('Entered contact details');
    await page.getByRole('button', { name: 'Weiter' }).click();
    console.log('3.Unser Orientierungswert');
    console.log('Loading Jetzt Termin vereinbaren page  ');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Jetzt Angebot sichern' }).focus();
    await page.getByRole('button', { name: 'Jetzt Angebot sichern' }).click();
    await page.waitForTimeout(2000);
    console.log('Click on next button');
    console.log('4.Ihr Mercedes-Benz Partner');
    await page.getByTestId('dl-search-input').fill('13059, Berlin');
    await page.getByTestId('dl-search-input').press('Enter');
    await page.getByTestId('dl-search-input').focus();
    await page.getByTestId('dl-search-input').press('Enter');
    await page.waitForTimeout(5000);
    for (const li of await page.getByRole('button', { name: '5',exact: true }).first().all())
    await li.click()
    await page.waitForTimeout(2000);
    const link =  await page.locator('.leaflet-marker-icon').first().count();
    console.log("link1 found " + link);
    if (link > 0)
    {
        for (const pi of await page.locator('.leaflet-marker-icon').first().all())
        await pi.first().click();


    }
    await page.waitForTimeout(2000);
    const elm =  await page.locator('div:nth-child(4) > div:nth-child(3)').first().count();
    console.log("link2 found " + elm);
    if (elm > 0)
    {

       await page.locator('div:nth-child(4) > div:nth-child(3)').first().click();

    }

    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Diesen Partner wählen' }).click();
    console.log('5.Ihr zukünftiger Mercedes');
    await page.locator('label').filter({ hasText: 'Ich interessiere mich für einen Mercedes Neuwagen/Vorführwagen' }).locator('div').click();
    await page.locator('label').filter({ hasText: 'Ich interessiere mich für einen Mercedes Gebrauchtwagen' }).locator('div').click();
    await page.locator('label').filter({ hasText: 'Ich möchte ohne Wunschmodell fortfahren' }).locator('div').click();
    await page.getByRole('button', { name: 'Weiter' }).click();
    console.log('6.Weitere Informationen');
    console.log('Contact details enter');
    await page.getByLabel('Vorname').click();
    await page.getByLabel('Vorname').fill('qa');
    await page.getByLabel('Nachname').click();
    console.log('Nachname');
    await page.getByLabel('Nachname').fill('auto');
    await page.getByLabel('E-Mail-Adresse').click();
    await page.getByLabel('Nachname').click();
    console.log('E-Mail-Adresse');
    await page.getByLabel('E-Mail-Adresse').fill('auto@experienceone.com');
    await page.locator('wb-radio-control').filter({ hasText: 'E-Mail' }).locator('div').click();
    await page.getByLabel('Ihre Nachricht').click();
    console.log('Ihre Nachricht');
    await page.getByLabel('Ihre Nachricht').fill('model');
    await page.screenshot({path: 'screenshot/contact.png'});
    console.log('Ihre Nachricht model');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Weiter' }).focus();
    await page.getByRole('button', { name: 'Weiter' }).click();
    console.log('Click on Weiter');
    console.log('7.Wir haben Ihre Anfrage erhalten.');
    await page.waitForTimeout(2000);
    await page
    .locator('.ti-dealer-confirmation__inner')
    .screenshot({path: 'screenshot/modelconfirmationpage.png'});
    console.log('screenshot of model confirmation page');
});