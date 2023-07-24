let passportMarried = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'Bobryisk',
  },
};

let passportMarriedTrue = structuredClone(passportMarried);
passportMarriedTrue.married = true;

// Проверяем женатость
console.log(passportMarried);
console.log(passportMarriedTrue);
