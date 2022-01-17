export const patternName = /^[À-úA-z]{2,}(\s)?([À-úA-z]{2,}(\s)?)*$/
export const patternPhone = /^[0-9]{5}-[0-9]{4}$/
export const patternCompletePhone =
  /^\+[0-9]{2}\s\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/
export const patternCardValidate = /^(0[1-9]|1[0,1,2])[/](2[1,9])$/
export const patternCardSecuriryCodeFour = /^[0-9]{4}$/
export const patternCardSecuriryCodeThree = /^[0-9]{3}$/
export const patternCardNumber = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/
export const patternDate =
  /^([1-9]|0[1-9]|[1,2][0-9]|3[0,1])[/](0[1-9]|1[0,1,2])[/]\d{4}$/
export const patternEmail =
  /^[\d\D]{3,}@{1}[a-z]{3,}[.][a-z]{2,}([.][a-z]{2,})?$/
