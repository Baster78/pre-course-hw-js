let rule =
  'Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом';

let a = 25;
let b = rule.length;

switch (true) {
  case a > b:
    rule.length > a;
    console.log('Все таки нет правил без исключения');
  case a < b:
    console.log('У меня 100 пудов все получится');
  case a == b:
    console.log('50 на 50');
}
