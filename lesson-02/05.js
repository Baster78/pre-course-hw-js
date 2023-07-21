let passport = {
  name: 'Petr',
  surname: 'Petrov',
};

let clone = {};

for (let name in passport) {
  clone[name] = passport[name];
}

clone.name = 'Ivan';
console.log(passport.name);
console.log(clone.name);
