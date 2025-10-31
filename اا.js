console.log('Hello World!');
function shareArticle(text) {
  const url = window.location.href;
  if (navigator.share) {
    // للأجهزة الداعمة للمشاركة
    navigator.share({ title: "General News", text, url })
      .catch(err => console.log("خطأ في المشاركة:", err));
  } else {
    // نسخ الرابط إلى الحافظة كبديل
    const fullText = text + "\n" + url;
    navigator.clipboard.writeText(fullText)
      .then(() => alert("تم نسخ رابط المقال إلى الحافظة!"))
      .catch(() => alert("لا يمكن نسخ الرابط تلقائيًا، انسخه يدويًا."));
  }
}