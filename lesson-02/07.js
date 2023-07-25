let passportMarried = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'LA',
  },
};

let passport2 = { ...passportMarried, address: { ...passportMarried.address } };
passport2.married = true;

console.log(passportMarried);
console.log(passport2);

// let passportMarriedTrue = { ...passportMarried };

// passportMarriedTrue.married = true;

// console.log(passportMarried);
// console.log(passportMarriedTrue);
