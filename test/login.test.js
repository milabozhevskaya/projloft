const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(40000);

beforeAll(() => {
  return client.init().url('http://localhost:8080/admin#/login');
});

test("в форме есть поле для ввода логина", () => {
  return client
    .isExisting('.admin__login')
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
test("в форме есть поле для ввода пароля", () => {
  return client
    .isExisting('.admin__password')
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
test("в форме есть кнопка зарегистрироваться", () => {
  return client
    .isExisting('.admin__btn')
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
test('при незаполненных полях клик отправить не работает', () => {
  return client
    .isEnabled('.admin__btn')
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
// test('при верно заполненных полях клик отправить работает', () => {
//   return client
//     .setValue('.admin__login', 'bozhevskaya-012020')
//     .setValue('.admin__password', 'lilu')
//     .isEnabled('.admin__btn')
//     // .getCurrentUrl('http://localhost:8080/admin#/')
//     // .isVisible('.nav')
//     .then(browsers => {
//       for (const browserName in browsers) {
//         expect(browsers[browserName]).toBe(true);
//       }
//     })
//     // .screenshot()
//     // .then(browsers => {
//     //   for (const browserName in browsers) {
//     //     fs.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
//     //   }
//     // });
    
// });
// browser.switchWindow('https://google.com');
// test('при нажатии кнопки выйти админ закрывается', () => {
//   return client
//     .click('.admin-exit__ref')
//     .isVisible('.login-overlay')
//     .then(browsers => {
//       for (const browserName in browsers) {
//         expect(browsers[browserName]).toBe(true);
//       }
//     })
//     // .screenshot()
//     // .then(browsers => {
//     //   for (const browserName in browsers) {
//     //     fs.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
//     //   }
//     // });
// });

afterAll(() => {
  return client.end();
});