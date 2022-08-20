//! Ознакомься с документацией библиотеки Vimeo плеера.
//? Добавь библиотеку как зависимость проекта через npm.
//? Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
//! Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
//! Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
//! При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
//! Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const VIDEO_CURRENT_TIME = 'videoplayer-current-time';
autoPleay();
const onTimeupdate = function (e) {
  localStorage.setItem('VIDEO_CURRENT_TIME', e.seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));

function autoPleay() {
  const savedCurrentSeconds = localStorage.getItem('VIDEO_CURRENT_TIME');
  if (savedCurrentSeconds !== null) {
    player.setCurrentTime(savedCurrentSeconds);
  }
}
