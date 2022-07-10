export function generateErrors(errorMessage) {
  switch (errorMessage) {
    case "INVALID_PASSWORD":
      return "Email или пароль введены некорректно";
    case "EMAIL_EXISTS":
      return "Пользователь с таким Email уже существует";
    default:
      return "Слишком много попыток входа. Попробуйте позже";
  }
};