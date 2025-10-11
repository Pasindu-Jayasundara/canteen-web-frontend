export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@fot\.ruh\.ac\.lk$/;
  return emailRegex.test(email);
};
