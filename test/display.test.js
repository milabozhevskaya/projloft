const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(100000);

beforeAll(() => {
  return client.init().url('http://localhost:8080');
});

test('на странице есть кнопки влево и враво и виден первый элемент', () => {
  return client
    .isVisible('.display__btn-next')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    .isVisible('.display__btn-prev')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    .getAttribute('.display-pic', 'src')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe('https://webdev-api.loftschool.com/uploads/259q27b5385131286_origin.jpg');
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
    .click('.display__btn-prev')
    .pause(500)
    .getAttribute('.display-pic', 'src')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe('https://webdev-api.loftschool.com/uploads/259q27b5385131286_origin.jpg');
      }
    })
    // .screenshot()
    // .then(browsers => {
    //   for (const browserName in browsers) {
    //     Slider.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
    //   }
    // });
});
test('при нажатии вправо 5 раз слайдер показывает последний слайд', () => {
  return client
    .click('.display__btn-next')
    .click('.display__btn-next')
    .click('.display__btn-next')
    .click('.display__btn-next')
    .click('.display__btn-next')
    .pause(500)
    .getAttribute('.display-pic', 'src')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe('https://webdev-api.loftschool.com/uploads/259q4cc1c5f704298_origin.jpg');
      }
    })
    
    // .screenshot()
    // .then(browsers => {
    //   for (const browserName in browsers) {
    //     Slider.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
    //   }
    // });
});
test('при нажатии вправо 5 раз слайдер показывает последний слайд', () => {
  return client
    .click('.display__btn-prev')
    .click('.display__btn-prev')
    .click('.display__btn-prev')
    .click('.display__btn-prev')
    .click('.display__btn-prev')
    .click('.display__btn-prev')
    .pause(500)
    .getAttribute('.display-pic', 'src')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe('https://webdev-api.loftschool.com/uploads/259q27b5385131286_origin.jpg');
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
