const URL = process.env.URL;
var CryptoJS = require("crypto-js");

// GET all products
export const getOrders = async () => {
  const res = await fetch(`http://localhost:3000/api/orders`);
  const data = await res.json();

  return data;
};

// GET individual customer
export const getOrderId = async (orderId) => {
  const res = await fetch(`http://localhost:3000/api/orders/${orderId}`);
  const data = await res.json();

  if (data) return data;
  return {};
};

// with ipaymu payment gateway
const apikey = null;
const va = "1179000899";
const url = "https://sandbox.ipaymu.com/api/v2/payment"; // development mode
// const url = 'https://my.ipaymu.com/api/v2/payment/direct'; // for production mode

export const ipaymu = async (formData) => {
  var bodyEncrypt = CryptoJS.SHA256(JSON.stringify(formData));
  var stringtosign = "POST:" + va + ":" + bodyEncrypt + ":" + apikey;
  var signature = CryptoJS.enc.Hex.stringify(
    CryptoJS.HmacSHA256(stringtosign, apikey)
  );

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        signature: signature,
        va: va,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
