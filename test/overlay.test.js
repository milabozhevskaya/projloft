const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
  return client.init().url('http://localhost:8080');
});

test("в форме есть кнопка отправить", () => {
  return client
    .isExisting('.form__button--ref')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    // .screenshot()
    // .then(browsers => {
    //   for (const browserName in browsers) {
    //     fs.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
    //   }
    // });
});
test('при нажатии отправить открывается оверлей', () => {
  return client
    .setValue('.form__input--name', 'namename')
    .setValue('.form__input--email', 'mi@gmail.com')
    .setValue('.form__input--textarea', 'ffffffffffffffffffffffffffffffffffffffffffff')
    .click('.form__button--ref')
    .isVisible('.overlay')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    // .screenshot()
    // .then(browsers => {
    //   for (const browserName in browsers) {
    //     fs.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
    //   }
    // });
    
});
test('при нажатии кнопки закрыть оверлей закрывается', () => {
  return client
    .click('.overlay__close')
    .isVisible('.overlay')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(false);
      }
    })
    // .screenshot()
    // .then(browsers => {
    //   for (const browserName in browsers) {
    //     fs.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
    //   }
    // });
});
test('при нажатии отправить открывается оверлей', () => {
  return client
    .setValue('.form__input--name', 'namename')
    .setValue('.form__input--email', 'mi@gmail.com')
    .setValue('.form__input--textarea', 'ffffffffffffffffffffffffffffffffffffffffffff')
    .click('.form__button--ref')
    .isVisible('.overlay')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    // .screenshot()
    // .then(browsers => {
    //   for (const browserName in browsers) {
    //     fs.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
    //   }
    // });
    
});
test('при нажатии вне оверлея оверлей закрывается', () => {
  return client
    .click('body')
    .isVisible('.overlay')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(false);
      }
    })
    // .screenshot()
    // .then(browsers => {
    //   for (const browserName in browsers) {
    //     fs.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
    //   }
    // });
});
afterAll(() => {
  return client.end();
});