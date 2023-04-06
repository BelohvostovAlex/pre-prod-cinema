export enum AuthFormInputsPossibleNames {
  EMAIL = "email",
  PASSWORD = "password",
  SURNAME = "surname",
  USERNAME = "username",
}

export enum AuthFormInputsErrors {
  TEXT_MIN_LENGTH = "at least 2 sybmols",
  TEXT_MAX_LENGTH = "should't be over 20 symbols",
  TEXT_ONLY_LETTER = "only letters",
  REQUIRED = "field is required",
  INVALID_EMAIL = "invalid email address",
  PASSWORD_MIN = "at least 6 symbols",
  PASSWORD_MUST_INCLUDE = "must include lower, upper, number, and special chars",
}
