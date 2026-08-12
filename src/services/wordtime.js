import axios from 'axios';
import { LOCAL_CITY } from '../utils/constants';
import { getWithExpiry, setWithExpiry } from '../utils/local-storage';
import citiesMap from './cities-map';

const CORS_PROXY = 'https://api.allorigins.win/get';
const URL = 'http://worldtimeapi.org/api/timezone';
const LOCAL_STORAGE_PREFIX = 'dsplay.worldclock.city';
const KEY_VERSION = `${LOCAL_STORAGE_PREFIX}/version`;
const VERSION = '1.0';

export async function loadData(cities = []) {
  try {
    const timezones = await Promise.all(cities.map(async (city) => {
      let utcOffset;

      if (city !== LOCAL_CITY) {
        const key = `${LOCAL_STORAGE_PREFIX}/${city}`;
        utcOffset = getWithExpiry(key);
        const storedVersion = localStorage.getItem(KEY_VERSION);

        if (!(utcOffset && storedVersion === VERSION)) {
          try {
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
          } catch {
            // ignore - clock falls back to no utcOffset (renders using the browser's local time)
          }
        }
      }

      return ({
        name: city,
        utcOffset,
      });
    }));

    return timezones.filter((timezone) => timezone);
  } catch {
    return [];
  }
}
