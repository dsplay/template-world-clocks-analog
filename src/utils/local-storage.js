/* eslint-disable no-console, import/no-mutable-exports */

export function setWithExpiry(key, value, ttl = 99999999999) {
  try {
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
      value,
      expiry: Date.now() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  } catch (e) {
    console.log('error storing data in localStorage', e);
  }
}

export function getWithExpiry(key) {
  try {
    const itemStr = localStorage.getItem(key);

    // if the item doesn't exist, return null
    if (!itemStr) {
      return undefined;
    }

    const item = JSON.parse(itemStr);

    // compare the expiry time of the item with the current time
    if (Date.now() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key);
      return undefined;
    }
    return item.value;
  } catch (e) {
    console.log('error retrieving data from localStorage', e);
  }

  return undefined;
}
