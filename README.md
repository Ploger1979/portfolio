# Portfolio (Static HTML/CSS/JS)

ده بورتفوليو Static معمول بـ **HTML / CSS / JavaScript** (مفيش React/Next.js)، وبالتالي **مش محتاج npm** ولا `package.json`.

## تشغيله على جهازك
### الطريقة الأفضل (VS Code)
1. افتح المشروع في VS Code  
2. ثبّت إضافة **Live Server**  
3. افتح `index.html`  
4. اضغط **Go Live**  
هتلاقيه فتح في المتصفح على رابط زي: `http://127.0.0.1:5500/`

### طريقة سريعة
افتح `index.html` دبل كليك (لكن Live Server أفضل عشان أي JavaScript يشتغل بدون مشاكل).

## نشره على GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <REPO_URL>
git push -u origin main
```

## نشره على Netlify
1. افتح Netlify → **Add new site**  
2. **Import from Git** → اختار GitHub  
3. اختار الريبو بتاع البورتفوليو  
4. (Static) سيب Build Command فاضي، و Publish Directory خليها `.`  
5. Deploy → هتاخد لينك مباشر تقدر تبعته لأي حد.

## ملاحظات مهمة
- تأكد إن كل الروابط للصور والـ CSS والـ JS تكون **Relative** زي:
  - `./css/style.css`
  - `./js/script.js`
  - `./images/...`
- لو هتضيف صفحات جديدة، خلي الروابط واضحة زي `about.html` وهكذا.
