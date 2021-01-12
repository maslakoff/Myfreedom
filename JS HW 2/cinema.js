let films = ['Один дома', 'Король лев', 'Отряд самоубийц', 'Веном'];
let filmsString = `Добро пожаловать в "Дом Кино".\nСегодня в афише: ${films.join(', ')}.`;
// Показываем афишу
alert(filmsString);

let userFilmChoice = prompt('Выберите фильм, на который хотите пойти');

function isExistingFilm(userFilm) {
  // Ищем индекс в массиве films. Возввращаем true или false, сравнивая с -1 (минус один получаем тогда, когда искомого элемента нет в массиве)
  return films.findIndex(function(film) {
    return film === userFilm;
  }) !== -1;
}

function getFilmIdx(userFilm) {
  // Берем индекс и возвращаем фильм под этим индексом

  let idx = films.findIndex(function(film) {
    return film === userFilm;
  });

  if (idx !== -1) {
    return films[idx];
  }
}

if (isExistingFilm(userFilmChoice)) {
  let userRowChoice = prompt('Какой ряд Вы желаете выбрать?');
  let userPlaceChoice = prompt('Какое место для Вас было бы предпочтительнее?');
  let proposPopcorn = confirm('Предлагаем Вам приобрести дополнительно попкорн для более комфортного времяпрепровождения.');
  if (proposPopcorn === true) {
    alert(`Приятного просмотра! \n\nФильм: ${userFilmChoice} \nРяд: ${userRowChoice} \nМесто: ${userPlaceChoice} \n\nПросим предъявить чек контролёру кинотеатра перед сеансом.`)
  } else {
    alert(`Приятного просмотра! \n\nФильм: ${userFilmChoice} \nРяд: ${userRowChoice} \nМесто: ${userPlaceChoice} \nЕсли вдруг передумаете насчёт попкорна, Вы всегда можете успеть приобрести его до начала сеанса \n\nПросим предъявить чек контролёру кинотеатра перед сеансом.`)
  }
} else {
  alert('Извините, сегодня в кино такого фильма нет.')
}

