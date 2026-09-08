Lab1 - Playwright UI автомат тест

Оюутны нэр: Ё.Болормаа
Оюутны код: B222270050
 
 Хийсэн ажил
 SauceDemo (https:/www.saucedemo.com)  дээр Playwright ашиглан 3 тест бичсэн:
 1. Амжилттай нэвтрэх ба гарах
 2. Буруу нууц үгээр нэвтрэхэд алдааны мессеж гарах
 3. Нэвтэрсны дараа бараа сагслаж гарах 
 
 
 Coodegen ба Trace
 'docs/codegen.ts' - Playwright-ийн'npx playwright codegen saucedemo.com' командаар автоматаар үүссэн код
 
 
 Ялгаа
 Coodegen 'page.locator('[data-test="username"]')'  шиг CSS attribute selector ашиглдаг 
  Миний бичсэн  'page.getByPlaceholder('Username')','page.getByRole('button',{name: 'Login}) гэх мэт хэрэглдэчид харагдах шинж чанар (accessible name/role ) дээр сууоилсан Энэ нь илүү тест эвдрэхгүй байх магадлалтай тул илүү тогтвортой
  
  Assertion - г буруу утгаар өгж шалгах үед 'docs/failed-trace.zip  гарж ирсэн ч дахиад зөв болгоод ажилуулсын дараа алга болсон учраас оруулж чадаагүй 
  
