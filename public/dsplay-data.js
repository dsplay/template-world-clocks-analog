var dsplay_config = {
    // config parameters
    locale: 'pt_br',
    orientation: window.innerHeight < window.innerWidth ? 'landscape' : 'portrait',
    // Android SDK version
    osVersion: 19,
    // DSPLAY App version code
    appVersion: 99,
};

var dsplay_media = {
    duration: 30000,

    // for json service based media
    result: { "validity": "2018-08-13T18:22:55.238Z", "showOutdated": true, "data": {
    } },

    // custom media parameters
    customMediaParam: "value",

    times:{
        current:{
            id: 0,
            cName:       "Recife - BR",
            cUtcOffset:  "-03:00"
        },
        world_cities: [
            {
                id: 1,
                wName:   "Tokyo - JP",
                wUtcOffset:    "+09:00"
            },
            {
                id: 2,
                wName:   "New York - US",
                wUtcOffset:    "-04:00"
            },
            {
                id: 3,
                wName:   "Beirut - LB",
                wUtcOffset:    "+03:00"
            },
            {
                id: 4,
                wName:   "Dublin - IE",
                wUtcOffset:    "+01:00"
            },
            {
                id: 5,
                wName:   "Chukotka - RU",
                wUtcOffset:    "+12:00"
            },
            {
                id: 6,
                wName:   "Happy Valley-Goose Bay - CA",
                wUtcOffset:    "-03:00"
            },
            {
                id: 7,
                wName:   "Tegucigalpa - HN",
                wUtcOffset:    "-06:00"
            }
        ]
    },
};

var dsplay_template = {
    // template parameter
    cities : {
        
    },
    template_var: "My Template Var",

    logo: '../test-assets/dsplay-logo.png',

    brand_image: "",

    title: "My Super Template",
    expanded: "false",
    theme: "dark"

};