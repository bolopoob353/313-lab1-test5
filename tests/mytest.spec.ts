
import {test,expect} from '@playwright/test';

//Тест1: Буруу нууц үгээр нэвтрэхэд алдааны мессеж зөв гарч ирж байгааг шалгах 
test('Wrong password (negative)', async ({ page }) =>{

//SauceDemo дэлгүүрийн нэвтрэх хуудас руу орох
await page.goto('https://www.saucedemo.com');

// Хэрэглэгчийн нэр буруу нууц үг оруулах
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('wrong_password');
await page.getByRole('button', { name: 'Login' }).click();

//Нэвтрэлт амжилгүй болж алдааны мессеж дэлгэцэнд харагдаж байгааг шалгах 
await expect(page.getByText('Username and password do not match',{exact: false})).toBeVisible();

// URL өөрчлөгдөөгүй эсэхийг шалгах
await expect(page).toHaveURL('https://www.saucedemo.com/');});


//Тест2: Хэрэглэгч амжилттай нэвтэрч бараа сагслаад гарах хийж байгааг шалгах 
test('Add to cart', async ({ page }) =>{

//Дэлгүүрийн нэвтрэх хуудас руу орох
await page.goto('https://www.saucedemo.com');

//Зөв хэрэглэгийн нэр буруу нууц үгээр нэвтрэх 
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button',{ name:'Login'}).click();

//Амжилттай нэвтэрсний дараа "Product" хэсэг харагдаж байгааг шалгах
await expect(page.getByText('Products', { exact:true})).toBeVisible();

//Дэлгүүрйин барааг сагсанд нэмэх 
await page.getByRole('button',{ name: 'Add to cart'}).first().click();

//Барааг зөв нэмсэн эсэхийг шалгах 
await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

//Цэсийг нээж системээс гарах 
await page.getByRole('button',{name:'Open Menu'}).click();
await page.getByRole('link',{ name:'Logout'}).click();
await expect(page).toHaveURL('https://www.saucedemo.com/');});


//Тест3: Амжиллтай нэвтэрч системээс гарах
test('Successful login and logout', async ({ page }) => {

await page.goto('https://www.saucedemo.com');

//Зөв хэрэглэгчийн нэр нууц үгээр нэвтрэх 
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', { name: 'Login' }).click();

//Амжилттай нэвтэрсний дараа "Product" хэсэг харагдаж байгааг шалгах
await expect(page.getByText('Products', { exact: true })).toBeVisible();
await expect(page).toHaveURL(/inventory\.html/);

//Цэсийг нээж системээс гарах 
await page.getByRole('button', { name: 'Open Menu' }).click();
await page.getByRole('link', { name: 'Logout' }).click();

//Гарсны дараа эхлэлийн нэвтрэх хуудас руу буцсан эсэхийг шалгах
await expect(page).toHaveURL('https://www.saucedemo.com/');
});
