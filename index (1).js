// scroll reveal inicio
window.sr = ScrollReveal({ reset: false });

sr.reveal('.area-1', { delay: 400 });
sr.reveal('.area-2', { delay: 500, origin: 'left', distance: '60px' });
sr.reveal('.area-3', { delay: 500, origin: 'right', distance: '60px' });
// scroll reveal fim

// video player inicio
let buttonPlay = document.querySelector("#play");
let buttonPlay1 = document.querySelector("#play1");
let classeVideo = document.querySelector(".video-youtube");
let classeVideo1 = document.querySelector(".video-youtube1");
let buttonClose = document.querySelector('.fechar-video');
let buttonClose1 = document.querySelector('.fechar-video1');
var iframe = document.querySelector('#video-iframe')
var iframe1 = document.querySelector('#video-iframe1')

buttonPlay.addEventListener("click", () => {
  classeVideo.style.display = 'block'
  iframe.setAttribute('src', 'https://www.youtube.com/embed/aHs2nKYKx4w')
});




buttonClose.addEventListener("click", () => {
  classeVideo.style.display = 'none'
  iframe.setAttribute('src', 'source')
})


buttonPlay1.addEventListener("click", () => {
  classeVideo1.style.display = 'block'
  iframe1.setAttribute('src', 'https://www.youtube.com/embed/ALSIsB63qYk')
});

buttonClose1.addEventListener("click", () => {
  classeVideo1.style.display = 'none'
  iframe1.setAttribute('src', 'source')
})



// player video fim

// carousel inicio
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
// carousel fim