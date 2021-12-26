import Moment from 'moment';

export const convertBRDateToUSDate = (date: string) => {
  const dateSplitted = date.split('/');
  return `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]}`;
};

export const convertUSDateToBRDate = (date: string) => {
  const dateSplitted = date.split('-');
  return `${dateSplitted[2]}/${dateSplitted[1]}/${dateSplitted[0]}`;
};

export const validateDate = (birthday: string, allowMinors: boolean) => {
  const dateSplitted = birthday.split('/');

  const today = new Date();
  const day = Number(dateSplitted[0]);
  const month = Number(dateSplitted[1]);
  const year = Number(dateSplitted[2]);

  const verifyYear = year >= 1901 && year <= today.getFullYear();
  const verifyMonth = month >= 1 && month <= 12;
  let verifyDay = false;

  const monthsWith31Days: Array<number> = [1, 3, 5, 7, 8, 10, 12];
  const monthsWith30Days: Array<number> = [4, 6, 9, 11];

  if (monthsWith31Days.indexOf(month) >= 0) {
    verifyDay = day >= 1 && day <= 31;
  } else if (monthsWith30Days.indexOf(month) >= 0) {
    verifyDay = day >= 1 && day <= 30;
  } else {
    verifyDay = day >= 1 && day <= 29;
  }

  const dateIsValid = verifyYear && verifyMonth && verifyDay;

  if (dateIsValid) {
    const age = Moment().diff(convertBRDateToUSDate(birthday), 'years');

    let verifyAge = false;
    if (allowMinors) {
      verifyAge = age < 105;
    } else {
      verifyAge = age >= 18 && age < 105;
    }

    if (verifyAge) {
      return true;
    }
  }
};

export const validateEmail = (email: string) => {
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return emailRegex.test(email);
};
