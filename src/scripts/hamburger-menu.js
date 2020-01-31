;
////hamburger
const hamburger = document.querySelector('.hamb-menu');
const first = document.querySelector('.first');
const firstClose = document.querySelector('.first__close');
function noScroll() {
  window.scrollTo(0, 0);
}


hamburger.addEventListener('click', function(event) {
  event.preventDefault();

  window.addEventListener('scroll', noScroll); 

  first.style.display = 'flex';
});

firstClose.addEventListener('click', function(event) {
  event.stopPropagation();
  event.preventDefault();

  window.removeEventListener('scroll', noScroll);

  first.style.display = 'none';

  first.addEventListener('click', function(event) {
     event.preventDefault();
     
  })
})
