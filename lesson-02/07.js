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
  married: true,
  address: { ...passportMarried.address },
};

console.log(copiedPrep);
console.log(passportMarried);
