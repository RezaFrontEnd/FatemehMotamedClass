
// آرایه اسکریپت‌هایی که میخوای اضافه بشن
const scriptsToLoad = [
  "/6/tarkibeArray/tarkibArray.js",
  "/6/slideShow/slide.js",
  "/6/ZarfiatParking/ZarfiatParking.js",
  "/6/bmi/bmi.js",
];

// تابع برای اضافه کردن خودکار <script src="..."> به صفحه
function loadScripts() {
  scriptsToLoad.forEach(src => {
    const s = document.createElement("script");
    s.src = src;
    s.type = "text/javascript";
    document.head.appendChild(s);
  });
}

// همین الان اجرا می‌کنه
loadScripts();