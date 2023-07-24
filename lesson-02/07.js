let passportMarried = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'Bobryisk',
  },
};

let copiedPrep = {
  ...passportMarried,
  married: true,
  address: { ...passportMarried.address },
};

console.log(passportMarried);
console.log(copiedPrep);
