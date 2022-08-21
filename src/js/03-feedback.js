//? Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
//? При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
//? При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
//? Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onForm, 500));

onLocalStorage();

let onFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onFormSubmit(e) {
  e.preventDefault();
  if (e.target[0].value !== '' && e.target[1].value !== '') {
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(onFormData);
    onFormData = {};
  }
}

function onForm(e) {
  onFormData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(onFormData));
}

function onLocalStorage() {
  const sevedMessage = localStorage.getItem(STORAGE_KEY);

  if (sevedMessage) {
    const sevedMessageParse = JSON.parse(sevedMessage);

    if (sevedMessageParse['email'] !== undefined) {
      refs.input.value = sevedMessageParse['email'];
    } else {
      refs.input.value = '';
    }

    if (sevedMessageParse['message'] !== undefined) {
      refs.textarea.value = sevedMessageParse['message'];
    } else {
      refs.textarea.value = '';
    }
  }
}
