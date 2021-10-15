const setDataToLocalStorage = (nameData, data) => {
  return window.localStorage.setItem(nameData, JSON.stringify(data));
};

export default setDataToLocalStorage;
