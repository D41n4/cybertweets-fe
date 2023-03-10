export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
export const passwordErr =
  "Password must contain 8-16 characters, at least one uppercase letter, one lowercase letter and one number";
export const userNameRegex = /^[a-zA-Z]{2,30}$/;
export const emailRegex = /^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$/;
