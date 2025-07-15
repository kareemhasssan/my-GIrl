const image = document.getElementById("image");
const music = document.getElementById("music");


// تشغيل الموسيقى عند تمرير الفأرة بعد السماح بها
image.addEventListener("mouseover", function () {
  music.play();
});

// إيقاف الموسيقى عند إخراج الفأرة
image.addEventListener("mouseout", function () {
  music.pause();
  music.currentTime = 0; // إعادة الصوت للبداية
});
image.addEventListener("touchstart", function () {
    music.play();
  });

  // إيقاف الموسيقى عند إزالة الإصبع
  image.addEventListener("touchend", function () {
    music.pause();
    music.currentTime = 0; // إعادة الصوت للبداية
  });

  // منع سحب الصورة عند لمسها على الهاتف
  image.addEventListener("touchmove", function (event) {
    event.preventDefault();
  });