let passportMarried = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'Bobryisk',
  },
};

let clone3 = {};
for (let key in passportMarried) {
  clone3[key] = passportMarried[key];
}

clone3.married = true;

console.log(clone3);
