$(document).ready(function () {
  let hiddenRow = $(".nohidden");
  $(".btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      $(".btn").html("Скрыть");
    } else {
      $(".btn").html("Узнай больше");
    }
  });
});
document.getElementById("btn").addEventListener("click", function () {
  var container = document.getElementById("practice_card");
  if (container.style.height === "31vw") {
    container.style.height = "23vw"; // Новая высота контейнера
  } else {
    container.style.height = "31vw"; // Возвращаем к изначальной высоте
  }
});

$(document).ready(function () {
  let hiddenRow = $(".nnohidden");
  $(".btnn").click(function () {
    hiddenRow.toggleClass("hhidden");
    if (hiddenRow.is(":visible")) {
      $(".btnn").html("Скрыть");
    } else {
      $(".btnn").html("Узнай больше");
    }
  });
});
document.getElementById("btnn").addEventListener("click", function () {
  var container = document.getElementById("ppractice");
  if (container.style.height === "31vw") {
    container.style.height = "23vw"; // Новая высота контейнера
  } else {
    container.style.height = "31vw"; // Возвращаем к изначальной высоте
  }
});

$(document).ready(function () {
  let hiddenRow = $(".nnnohidden");
  $(".btnnn").click(function () {
    hiddenRow.toggleClass("hhhidden");
    if (hiddenRow.is(":visible")) {
      $(".btnnn").html("Скрыть");
    } else {
      $(".btnnn").html("Узнай больше");
    }
  });
});
document.getElementById("btnnn").addEventListener("click", function () {
  var container = document.getElementById("pppractice");
  if (container.style.height === "31vw") {
    container.style.height = "23vw"; // Новая высота контейнера
  } else {
    container.style.height = "31vw"; // Возвращаем к изначальной высоте
  }
});

$(document).ready(function () {
  let hiddenRow = $(".nnn");
  $(".btnnnn").click(function () {
    hiddenRow.toggleClass("hhh");
    if (hiddenRow.is(":visible")) {
      $(".btnnnn").html("Скрыть");
    } else {
      $(".btnnnn").html("Узнай больше");
    }
  });
});
document.getElementById("btnnnn").addEventListener("click", function () {
  var container = document.getElementById("ppp");
  if (container.style.height === "31vw") {
    container.style.height = "23vw"; // Новая высота контейнера
  } else {
    container.style.height = "31vw"; // Возвращаем к изначальной высоте
  }
});

$(document).ready(function () {
  let hiddenRow = $(".nnnn");
  $(".btn5").click(function () {
    hiddenRow.toggleClass("hhhh");
    if (hiddenRow.is(":visible")) {
      $(".btn5").html("Скрыть");
    } else {
      $(".btn5").html("Узнай больше");
    }
  });
});
document.getElementById("btn5").addEventListener("click", function () {
  var container = document.getElementById("pppp");
  if (container.style.height === "31vw") {
    container.style.height = "23vw"; // Новая высота контейнера
  } else {
    container.style.height = "31vw"; // Возвращаем к изначальной высоте
  }
});

$('a[href^="#about"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
  }
});
$('a[href^="#practice"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
  }
});
$('a[href^="#best"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
  }
});
$('a[href^="#new"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
  }
});
$('a[href^="#series"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
  }
});

const carousel = document.querySelector(".carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  const slideOffset = -slideIndex * 100;
  carousel.style.transform = `translateX(${slideOffset}%)`;
}

prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide < totalSlides - 1) {
    goToSlide(currentSlide + 1);
  }
});
