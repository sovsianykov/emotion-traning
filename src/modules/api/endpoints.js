export  const BEERS = 'beers';
export  const FOOD = 'food';

const ENDPOINTS = {
    [BEERS] : {
        uri: '/beers',
        method: 'GET'
    },
    [FOOD] : {
        uri: '/beers?food=potato',
        method: 'GET'
    },
};

export default ENDPOINTS;
