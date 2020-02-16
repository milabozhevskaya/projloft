export const wrapIntoFormData = plainObject => {
  console.log(plainObject);
  const formData = new FormData();
  Object.keys(plainObject).forEach(key => {
    formData.append(key, plainObject[key]);
  });
  return formData;
}