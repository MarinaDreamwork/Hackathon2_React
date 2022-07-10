const validatorConfig = {
  email: {
    isRequired: {
      message: 'Электронная почта обязательна для заполнения'
    },
    isEmail: {
      message: 'Email введен некорректно'
    }
  },
  password: {
    isRequired: {
      message: 'Пароль обязателен для заполнения'
    },
    isCapitalLetter: {
      message: 'Пароль должен содержать хотя бы одну заглавную букву'
    },
    isContainDigit: {
      message: 'Пароль должен содержать минимум одну цифру'
    },
    min: {
      message: 'Пароль должен состоять минимум из восьми символов',
      value: 8
    }
  },
  name: {
    isRequired: {
      message: 'Имя обязательно для заполнения'
    },
    min: {
      message: 'Имя должно содержать не менее 5-ти символов',
      value: 5
    }
  }
};
