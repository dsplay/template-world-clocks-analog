/* eslint-disable no-console, import/no-mutable-exports, import/prefer-default-export */
import axios from 'axios';
import { LOCAL_CITY } from '../utils/contants';
import { getWithExpiry, setWithExpiry } from '../utils/local-storage';
import citiesMap from './cities-map';

// const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const CORS_PROXY = 'https://api.allorigins.win/get';
const URL = 'http://worldtimeapi.org/api/timezone';
const LOCAL_STORAGE_PREFIX = 'dsplay.worldclock.city';
const KEY_VERSION = `${LOCAL_STORAGE_PREFIX}/version`;
const VERSION = '1.0';

export async function loadData(cities = []) {
  try {
    console.log('[WorldClock] loading data for ', cities.filter((city) => city !== LOCAL_CITY));

    const timezones = await Promise.all(cities.map(async (city) => {
      let utcOffset;

      if (city !== LOCAL_CITY) {
        const key = `${LOCAL_STORAGE_PREFIX}/${city}`;
        utcOffset = getWithExpiry(key);
        const storedVersion = localStorage.getItem(KEY_VERSION);

        if (utcOffset && storedVersion === VERSION) {
          console.log(`[WorldClock] using cached data for ${city}`);
        } else {
          try {
            console.log(`[WorldClock] trying to fetch data for ${city}`);
            const url = `${URL}/${citiesMap[city]}`;
            const response = await axios.get(CORS_PROXY, {
              params: {
                url,
              },
            });
            const { data } = response;
            const time = JSON.parse(data.contents);
            utcOffset = time.utc_offset;
            setWithExpiry(key, utcOffset, 1000 * 60 * 60 * 24);
            localStorage.setItem(KEY_VERSION, VERSION.toString());
          } catch (e) {
            console.log(`[WorldClock] error loading data for ${city}`, e);
          }
        }
      }

      return ({
        name: city,
        utcOffset,
      });
    }));

    console.log('[WorldClock] done!');
    return timezones.filter((timezone) => timezone);
  } catch (e) {
    console.log('Error loading timezone data for cities.', e);
  }
  return [];
}
