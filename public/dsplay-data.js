var dsplay_config = {
  // config parameters
  locale: 'de_DE',
  orientation: window.innerHeight < window.innerWidth ? 'landscape' : 'portrait',
  // Android SDK version
  osVersion: 19,
  // DSPLAY App version code
  appVersion: 99,
};

var dsplay_media = {
  duration: 30000,

  // for json service based media
  result: {
    "validity": "2018-08-13T18:22:55.238Z", "showOutdated": true, "data": {
      worldCities: [
        {
          id: 1,
          name: "Tokyo - JP",
          utcOffset: "+09:00"
        },
        {
          id: 2,
          name: "New York - US",
          utcOffset: "-04:00"
        },
        {
          id: 3,
          name: "Beirut - LB",
          utcOffset: "+03:00"
        },
        {
          id: 4,
          name: "Dublin - IE",
          utcOffset: "+01:00"
        },
        {
          id: 5,
          name: "Chukotka - RU",
          utcOffset: "+12:00"
        },
        {
          id: 6,
          name: "Happy Valley-Goose Bay - CA",
          utcOffset: "-03:00"
        },
        {
          id: 7,
          name: "Recife - BR",
          utcOffset: "-03:00"
        }
      ],
    }
  },

};

var dsplay_template = {
  // template parameter
  cities: {

  },
  template_var: "My Template Var",

  // logo: '../test-assets/dsplay-logo.png',

  // brand_image: "../test-assets/logo-01.png",
  brand_image: '',
  theme: 'light',
};