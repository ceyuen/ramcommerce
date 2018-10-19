export default function parseSessionStorage () {
  let orderItems = [];
  for (let key in window.sessionStorage) {
    if (typeof window.sessionStorage[key] === 'string') {
      orderItems.push(JSON.parse(window.sessionStorage[key]));
    }
  }
  return orderItems;
}