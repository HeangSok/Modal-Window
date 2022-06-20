'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// note: document.querySelectorAll('.show-modal') will apply to all the elements that has this class; if you use document.querySelector('.show-modal'), it applies the change to the first element that use this class.
const btnsShowModal = document.querySelectorAll('.show-modal');

console.log(modal);
console.log(btnCloseModal);
console.log(btnsShowModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  //note: do not use .modal.classList.remove('.hidden'); we don't use the dot here. Dot is only use in the selector.
  // note: you can remove more classes by adding comma and another class name. Ex: modal.classList.remove('hidden', 'another class')
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal); // note: don't call closeModal with () or the function will be executed immediately each time you start the program
overlay.addEventListener('click', closeModal);

// keyboard events are so -called global events because they do not happen on one specific element. Global events normally listen on the whole document
// note: the e parameter stands for event; you can use other words
// when your key is press it will create an object, then we pass that object to the function as an arguement.
document.addEventListener('keydown', function (e) {
  //   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
