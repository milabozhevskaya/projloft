const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
  return client.init().url('http://localhost:8080');
});

test('на странице есть кнопки влево и враво и виден первый элемент', () => {
  return client
    .isVisible('.reviews__slider-direc--prev')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    .isVisible('.reviews__slider-direc--next')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    // .getCssProperty('.flickity-slider', 'translateX')
    .isVisible('.reviews__item:nth-child(1)')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    // .screenshot()
    // .then(browsers => {
    //   for (const browserName in browsers) {
    //     Slider.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
    //   }
    // });

});
test('кнопка влево в начальном положении слайдера не работает', () => {
  return client
    .click('.reviews__slider-direc--prev')
    .pause(500)
    .isVisible('.reviews__item:nth-child(1)')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    // .screenshot()
    // .then(browsers => {
    //   for (const browserName in browsers) {
    //     Slider.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
    //   }
    // });
});
test('при нажатии вправо слайдер сдвигается влево', () => {
  return client
    .click('.reviews__slider-direc--next')
    .pause(500)
    .isVisible('.reviews__item:nth-child(3)')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    .click('.reviews__slider-direc--next')
    .pause(500)
    .isVisible('.reviews__item:nth-child(5)')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    .click('.reviews__slider-direc--next')
    .click('.reviews__slider-direc--next')
    .click('.reviews__slider-direc--next')
    .pause(500)
    .isVisible('.reviews__item:nth-child(5)')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    // .screenshot()
    // .then(browsers => {
    //   for (const browserName in browsers) {
    //     Slider.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
    //   }
    // });
});

test('при нажатии влево слайдер сдвигается вправо', () => {
  return client
    .click('.reviews__slider-direc--prev')
    .pause(500)
    .isVisible('.reviews__item:nth-child(3)')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    .click('.reviews__slider-direc--prev')
    .pause(500)
    .isVisible('.reviews__item:nth-child(1)')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    // .screenshot()
    // .then(browsers => {
    //   for (const browserName in browsers) {
    //     Slider.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
    //   }
    // });
});
afterAll(() => {
  return client.end();
});
