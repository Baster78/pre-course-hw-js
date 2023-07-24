let passportMarried = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'LA',
  },
};

// Добавляем информацию о женатости
passportMarried.married = true;

// Проверяем женатость
if (passportMarried.married) {
  console.log('Парень женат!');
} else {
  console.log('Парень не женат.');
}
