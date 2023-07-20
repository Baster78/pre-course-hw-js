let rule =
  'Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом';

let a = 25;
switch (true) {
  case rule.length < a:
    console.log('"У меня 100 пудов все получится"');
  case rule.length > a:
    console.log('Все таки нет правил без исключения');
  case rule.length == a:
    console.log('"50 на 50"');
}
