JAVASCRIPT STYLE GUIDE.

Отступы

Горизонтальные отступы.

    Отступ при вложенности - 2 пробела для каждого уровня:

  //плохо
  if (age > 6) {
  alert (‘Школьник’);
  }

  //хорошо
  if (age > 6) {
    alert (‘Школьник’);
  }

Вертикальные отступы.

    Между логическими блоками(циклами, функциями и т.д.) следует оставлять пустую строку. Это делает код более читабельным.

  //плохо
  var i;
  var iMax = items.length;

  for (i = 0; i < iMax, ++i) {
   // тело цикла
  }
  function showName() {
   // тело функции
  }


  //хорошо
  var i;
  var iMax = items.length;
  for (i = 0; i < iMax, ++i) {
   // тело цикла
  }

  function showName() {
   // тело функции
  }


Деструктуризация

    При обращении к нескольким свойствам объекта используйте деструктуризацию объекта.

  // плохо
  function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
  }

  // хорошо
  function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
  }


Функции

    Имя функции должно быть глаголом на английском языке или начинаться с него. Для имён, состоящих из нескольких слов, используйте camelCase.

  //плохо
  function pravkaimeni() {
   // тело функции
  };

  //хорошо
  function editName() {
   // тело функции
  };


Стрелочные функции

    Когда вам необходимо использовать анонимную функцию (например, при передаче встроенной функции обратного вызова), используйте стрелочную функцию

  // плохо
  [1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
  });

  // хорошо
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });


Пробелы

    Используйте пробелы между параметрами и не используйте между именем функции и скобкой;

  //плохо
   function edit (name,age) {
   // тело функции
  }


  //хорошо
   function edit(name, age) {
   // тело функции
  }

    При создании анонимной функции необходимо использовать пробел перед скобкой

  //плохо
   function(name,age) {
   // тело функции
  }
  //хорошо
   function (name, age) {
   // тело функции
  }

    Используйте пробелы вокруг операторов.

  //плохо
   if (age<100) {
   // тело цикла
  }

  //хорошо
   if (age < 100) {
   // тело цикла
  }


Скобки

    Открывающая фигурная скобка располагается на той же строке. Перед скобкой пробел. Закрывающая скобка располагается на новой строке.

  //плохо
  function edit(name, age)
  {
   if (age < 100) {/*тело цикла*/}
  }

  //хорошо
  function edit(name, age) {
   if (age < 100) {
   // тело цикла
   }
  }


Кавычки

    Всегда в коде скрипта используйте одинарные кавычки, если не требуется иного. Двойные кавычки допустимы, если в этой же строке необходимо использовать апостроф (') или одинарные кавычки для других целей.

  //плохо
  var string = "строка";

  //хорошо
  var string = 'строка';
  var phrase = "you're next";

Точка с запятой

    В конце выражения обязательна точка с запятой.
  //плохо
  alert('Привет')
  alert('Мир')  

  //хорошо
  alert('Привет');
  alert('Мир');


Комментарии

    Для пояснения кода используются комментарии. Комментарии не исполняются интерпретатором JavaScript.
    Однострочные комментарии начинаются с двойного слэша //. За ним обязательно должен идти пробел;
    Многострочные комментарии располагаются между /* и */. За символом начала комментария обязательно должен идти пробел. Символ конца комментария располагается на новой строке.

  //плохо
  /*Пример комментария.
  Многострочного комментария.*/

  //Пример однострочного комментария.

  //хорошо

  /* Пример комментария.
  Многострочного комментария.
  */

  // Пример однострочного комментария.


Переменные.

    Для именования переменных используйте существительные на английском языке(не транслит!). Имя переменной должно быть осмысленным.
    Имя может состоять из букв, цифр, символов $ и _, не должно начинаться с цифры.

  //плохо
  var ovoschi;
  var rrfgov;

  //хорошо
  var vegetables;
