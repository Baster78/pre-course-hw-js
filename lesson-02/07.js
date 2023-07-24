let passportMarried = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'LA',
  },
};

let passportMarriedTrue = JSON.parse(JSON.stringify(passportWithAddress));
// Добавляем информацию о женатости
passportMarriedTrue.married = true;

// Проверяем женатость
console.log(passportMarried);
console.log(passportMarriedTrue);
