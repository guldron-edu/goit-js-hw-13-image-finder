import refs from './refs';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';
import { success, error, notice, Stack } from '@pnotify/core';
defaults.sticker = false;
defaults.closer = false;
defaults.delay = 1000;

const myStack = new Stack({
  dir1: 'top',
  dir2: 'left',
  firstpos1: 90,
  firstpos2: 10,
  context: refs.htmlEntryPoint,
});

function showNotification() {
  success({
    text: `Вот результаты Вашего запроса`,
    stack: myStack,
  });
}

function lastNotification() {
  notice({
    text: `Больше ничего нет :(`,
    stack: myStack,
  });
}

function errorNotification() {
  error({
    text: `По Вашему запросу ничего не найдено.`,
    stack: myStack,
  });
}
export { showNotification, errorNotification, lastNotification };
