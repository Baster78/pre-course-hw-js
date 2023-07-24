let passportMarried = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'Bobryisk',
  },
};

let copiedPrep = {
  name: 'Petr',
  surname: 'Petrov',
  Married: true,
  address: { ...passportMarried.address },
};

console.log(passportMarried);
console.log(copiedPrep);
