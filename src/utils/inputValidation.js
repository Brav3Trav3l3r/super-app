export const nameIsValid = (name) => {
  const regex = new RegExp("^[a-zA-Z ]{2,}$");
  return regex.test(name);
};

export const emailIsValid = (email) => {
  const regex = new RegExp("^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$");
  return regex.test(email);
};

export const usernameIsValid = (usernanme) => {
  const regex = new RegExp("^[a-zA-Z0-9_]{4,16}$");
  return regex.test(usernanme);
};

export const contactIsValid = (contact) => {
  const regex = new RegExp("^[0-9]{10}$");
  return regex.test(contact);
};
