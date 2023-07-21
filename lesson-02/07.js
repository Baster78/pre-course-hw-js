let passportMarried = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'Bobryisk',
  },
};

const clone3 = structuredClone(passportMarried);
clone3.married = true;

console.log(passportMarried);
console.log(clone3);
