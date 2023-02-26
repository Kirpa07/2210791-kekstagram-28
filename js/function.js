//Задание 1;

const lengthOfString = function (firstparameter, secondparameter) {
  if (firstparameter.length <= secondparameter) {
    return true;
  } else {
    return false;
  }
};
lengthOfString('проверяемая строка', 20);
lengthOfString('проверяемая строка', 18);
lengthOfString('проверяемая строка', 10);

//Задание 2;

const isPalString = function (parameter) {
  const tempString = parameter.toLowerCase().replaceAll(' ','');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString[i];
  }
  return reverseString === tempString;
};
isPalString('топот');

//Задание 3;

const getNumber = (parameter) => {
  let res = '';
  for (let i = 0; i < parameter.length; i++) {
    if (parseInt(parameter[i], 10)) {
      res += parameter[i];
    }
  }
  return parseInt(res, 10);
};
getNumber('Агент 007');
