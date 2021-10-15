const isLocalStorageDataLoaded = (nameData) => {
  const data = window.localStorage.getItem(nameData);
  if (!!data === false) return false;

  const dataValues = Object.values(JSON.parse(data));
  const isDataValues = dataValues.find((value) => value.length > 0);
  return !!isDataValues;
};

export default isLocalStorageDataLoaded;
