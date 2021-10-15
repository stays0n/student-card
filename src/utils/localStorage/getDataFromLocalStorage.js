const getDataFromLocalStorage = (nameData) => {
  return JSON.parse(window.localStorage.getItem(nameData));
};

export default getDataFromLocalStorage;
