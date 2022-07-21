import { regex, Validator, required, minLength, maxLength } from "react-admin";

export const validateCityName: Validator[] = [
  required(),
  minLength(2),
  maxLength(80),
  regex(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/, "Saisir une ville valide"),
];

export const validateMediumStringOnly: Validator[] = [
  required(),
  minLength(2),
  maxLength(100),
];

export const validateNumber: Validator[] = [
  required(),
  regex(/[0-9]+/, "Saisir un nombre valide !"),
];

export const validateNumberOptional: Validator[] = [
  regex(/[0-9]+/, "Saisir un nombre valide !"),
];

export const validateUrl: Validator[] = [
  required(),
  regex(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    "Saisir un url valide !"
  ),
];

export const validateUrlOptional: Validator[] = [
  regex(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    "Saisir un url valide !"
  ),
];

export const validateLongStringOnly: Validator[] = [
  required(),
  minLength(2),
  maxLength(255),
  regex(/^[a-zA-Z ]*$/, "Saisir un texte valide !"),
];

export const validateContent: Validator[] = [required()];

export const validatePostalCode: Validator[] = [
  required(),
  regex(/^\d{5}$/, "Le code postal est incorrect !"),
];

export const validateEmail: Validator[] = [
  required(),
  regex(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  ),
  "Veuillez saisir un email valide !",
];

export const validatePassword: Validator[] = [
  required(),
  regex(
    /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/,
    "Le mot de passe doit contenir 8 caractères minimum, 1 lettre et 1 chiffre !"
  ),
];

export const validatePasswordOptional: Validator[] = [
  regex(
    /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/,
    "Le mot de passe doit contenir 8 caractères minimum, 1 lettre et 1 chiffre !"
  ),
];
