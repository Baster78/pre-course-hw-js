let passportMarried = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'Bobryisk',
  },
};

function copyPrep(passportMarried) {
  let copiedPrep = {
    ...passportMarried,
    isMarried: true,
    address: { ...passportMarried.address },
  };

  return copiedPrep;
}

let copiedPrep = copyPrep(passportMarried);

console.log(passportMarried);
console.log(copiedPrep);
