var parallax = (function () {
  var bgWelcome1 = document.querySelector('.welcome-bg__item--1');
  var bgWelcome2 = document.querySelector('.welcome-bg__item--2');
  var bgWelcome3 = document.querySelector('.welcome-bg__item--3');
  var bgWelcome4 = document.querySelector('.welcome-bg__item--4');
  var bgWelcome5 = document.querySelector('.welcome-bg__item--5');
  var bgWelcome6 = document.querySelector('.welcome-bg__item--6');
  var bgWelcome8 = document.querySelector('.welcome-bg__item--8');
  var bgWelcome9 = document.querySelector('.welcome-bg__item--9');

  var star = document.querySelector('.star');
  var about = document.querySelector('.about');

  return {
    move: function (block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformString = 'translate3d(0,' + strafe + ', 0)';
      var style = block.style;
      // style.top = strafe;
      style.transform = transformString;
      style.webkitTransform = transformString;
    },
    init: function (wScroll) {
      var bottomOffset = getOffsets('end-section').top,
          welcomeOffset = getOffsets('welcome-section').bottom;
      if (welcomeOffset > 0) {
        this.move(bgWelcome1, wScroll, 35);
        this.move(bgWelcome2, wScroll, 32);
        this.move(bgWelcome3, wScroll, 30);
        this.move(bgWelcome4, wScroll, 25);
        this.move(bgWelcome5, wScroll, 20);
        this.move(bgWelcome6, wScroll, 15);
        this.move(bgWelcome8, wScroll, 10);
        this.move(bgWelcome9, wScroll, 50);
      }
      
      // if (bottomOffset < 0) {
      //   this.move(bgEnd1, bottomOffset, 300);
      //   this.move(bgEnd2, bottomOffset, 300);
      //   this.move(bgEnd3, bottomOffset, 300);
      //   this.move(bgEnd4, bottomOffset, 300);
      //   this.move(bgEnd5, bottomOffset, 300);
      //   this.move(bgEnd6, bottomOffset, 300);
      // }
    }
  }
}());

function getOffsets(block) {
  var element = document.querySelector('.'+block),
      rect = element.getBoundingClientRect();
  return rect;
}

window.onscroll = function () {
  var wScroll = window.pageYOffset;

  parallax.init(wScroll);
};