let rule =
  'Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом';

let a = '25';
let b = rule.length;

switch (true) {
  case b > a:
    console.log('Все таки нет правил без исключения');
    break;
  case b < a:
    console.log('У меня 100 пудов все получится');
    break;
  case b === a:
    console.log('50 на 50');
    break;
}
