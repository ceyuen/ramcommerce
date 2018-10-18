import axios from 'axios';

const url = 'http://jst.edchavez.com';

export default {
  inventory: {
    getAll: () => axios.get(`${url}/api/inventory/getInventory`),
  },

  promotion: {
    getAll: () => axios.get(`${url}/api/promo`),
    getOne: ({ promoId }) => axios.get(`${url}/api/promo/${promoId}`),
  },

  shipping: {
    getAll: () => axios.get(`${url}/api/shipping`),
    getOne: ({ shipOptionId }) => axios.get(`${url}/api/shipping/${shipOptionId}`),

  },

  order: {
    post: (orderDetails) => axios.post(`${url}/api/order`, orderDetails),
  },
}

