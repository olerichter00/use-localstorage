import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  var _useState = useState(),
      storedValue = _useState[0],
      setStoredValue = _useState[1];

  var handleItemUpdate = function handleItemUpdate(event) {
    if (key !== event.key) return;
    var item = window.localStorage.getItem(key);
    setStoredValue(item ? JSON.parse(item) : initialItem());
  };

  var initialItem = function initialItem() {
    return initialValue instanceof Function ? initialValue() : initialValue;
  };

  useEffect(function () {
    window.addEventListener('storage', handleItemUpdate);
    var item = window.localStorage.getItem(key);
    setStoredValue(item ? JSON.parse(item) : initialItem());
    return function () {
      return window.removeEventListener('storage', handleItemUpdate);
    };
  }, []);

  var setValue = function setValue(newValue) {
    var valueToStore = newValue instanceof Function ? newValue() : newValue;
    storeItem(valueToStore);
    setStoredValue(valueToStore);
  };

  var storeItem = function storeItem(item) {
    window.localStorage.setItem(key, JSON.stringify(item));
    var event = new StorageEvent('storage', {
      key: key
    });
    window.dispatchEvent(event);
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
//# sourceMappingURL=use-localstorage.esm.js.map
