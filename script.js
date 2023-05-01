let btnOpen = document.querySelector(".btn");
let blockOpacity = document.querySelector(".block__active");
let pop__up = document.querySelector(".pop__up");
let btnPopUpClose = document.querySelector(".btn__pop_up-close");

btnOpen.onclick = () => {
  blockOpacity.classList.add('block-opacity-active');
  pop__up.classList.add('pop__up-acive');
};

btnPopUpClose.onclick = () => {
    blockOpacity.classList.remove('block-opacity-active');
  pop__up.classList.remove('pop__up-acive');
};

blockOpacity.onclick = () => {
      blockOpacity.classList.remove('block-opacity-active');
  pop__up.classList.remove('pop__up-acive');
} 