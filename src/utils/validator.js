/**
 * валидатор это метод получающий в себя состояние формы и
 * требования к значениям в полях этой формы, в итоге
 * возращающий ошибки для каждого из полей
 */

export function validator(data, config) {
  /**
   * data это объект, у которого есть имена полей
   */
  const errors = {};

  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === '';
        break;

      case 'isCapitalSymbol': {
        const capitalRegExp = /[A-ZА-ЯЁ]+/g;
        statusValidate = !capitalRegExp.test(data);
        break;
      }

      case 'isFourDigits': {
        statusValidate = data.length !== config.value;
        break;
      }

      case 'max': {
        statusValidate = +data > config.value;
        break;
      }

      case 'min': {
        statusValidate = +data < config.value;
        break;
      }

      case 'isFullLink': {
        const fullLinkRegExp = /^https?:\/\/\S+$/g;
        statusValidate = !fullLinkRegExp.test(data);
        break;
      }

      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  /**
   * fieldName это name, surname, birthyear, portfolio... в объекте data
   */
  for (const fieldName in data) {
    /**
     * validateMethod это isRequired... в объекте
     * validatorConfig(внутри функции validator просто config) с ключём fieldName
     */
    for (const validateMethod in config[fieldName]) {
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod]);
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
