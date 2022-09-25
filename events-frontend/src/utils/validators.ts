export const emailValidator = (message?: string) => (value: string) =>
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value) || message || false;

export const trimmedRequiredStringValidator = (message?: string) => (value: string) =>
  !!value.trim() || message || false;
