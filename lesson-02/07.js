let passportMarried = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'Bobryisk',
  },
};

function copyMarried(passportMarried) {
  let copiedPrep = {
    ...passportMarried,
    married: true,
    address: { ...passportMarried.address },
  };
  return copiedPrep;
}

let copiedPrep = copyMarried(passportMarried);

console.log(passportMarried);

console.log(copiedPrep);
