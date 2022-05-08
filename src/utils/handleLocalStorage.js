const setStorage = (name, data) =>
  window.localStorage.setItem(name, JSON.stringify(data));

const getStorage = (name) => JSON.parse(window.localStorage.getItem(name));

const removeStorageItem = (name) => window.localStorage.removeItem(name);

const utilsStorage = { setStorage, getStorage, removeStorageItem };

export default utilsStorage;
