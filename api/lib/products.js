const PRODUCTS = [
  { id: 'banana-robusta', name: 'Banana — Robusta', price: 38 },
  { id: 'mango-alphonso', name: 'Mango — Alphonso', price: 299 },
  { id: 'apple-gala', name: 'Apple — Royal Gala', price: 189 },
  { id: 'pomegranate', name: 'Pomegranate', price: 145 },
  { id: 'orange-imported', name: 'Orange — Imported', price: 99 },
  { id: 'watermelon', name: 'Watermelon', price: 59 },
  { id: 'grapes-green', name: 'Grapes — Green', price: 89 },
  { id: 'papaya', name: 'Papaya — Ripe', price: 45 },
  { id: 'tomato-local', name: 'Tomato — Local', price: 32 },
  { id: 'onion', name: 'Onion', price: 28 },
  { id: 'potato', name: 'Potato', price: 25 },
  { id: 'carrot-orange', name: 'Carrot — Orange', price: 28 },
  { id: 'capsicum-green', name: 'Capsicum — Green', price: 32 },
  { id: 'cauliflower', name: 'Cauliflower', price: 35 },
  { id: 'spinach-palak', name: 'Palak — Cleaned', price: 18 },
  { id: 'ginger', name: 'Ginger', price: 28 },
  { id: 'basmati-rice', name: 'Basmati Rice — Premium', price: 189 },
  { id: 'sona-masoori', name: 'Sona Masoori Rice', price: 95 },
  { id: 'whole-wheat-atta', name: 'Whole Wheat Atta', price: 249 },
  { id: 'toor-dal', name: 'Toor Dal', price: 145 },
  { id: 'moong-dal', name: 'Moong Dal — Yellow', price: 125 },
  { id: 'chana-dal', name: 'Chana Dal', price: 110 },
  { id: 'oats-rolled', name: 'Oats — Rolled', price: 165 },
  { id: 'corn-flakes', name: 'Corn Flakes', price: 185 },
  { id: 'muesli', name: 'Muesli — Fruit & Nut', price: 299 },
  { id: 'ragi-flour', name: 'Ragi Flour', price: 75 },
  { id: 'bajra-flour', name: 'Bajra Flour', price: 65 },
  { id: 'poha-thick', name: 'Poha — Thick', price: 55 },
  { id: 'earrings-gold-plated', name: 'Earrings — Gold Plated Drop', price: 199 },
  { id: 'necklace-pearl', name: 'Necklace — Pearl Strand', price: 299 },
  { id: 'bangles-set', name: 'Bangles — Designer Set', price: 249 },
  { id: 'ring-solitaire', name: 'Ring — Solitaire Style', price: 149 },
  { id: 'anklet-silver', name: 'Anklet — Silver Tone', price: 179 },
  { id: 'bracelet-kada', name: 'Bracelet — Kada Style', price: 219 },
  { id: 'earrings-jhumka', name: 'Jhumka Earrings — Traditional', price: 279 },
  { id: 'necklace-choker', name: 'Choker — Stone Studded', price: 349 },
  { id: 'nose-pin-set', name: 'Nose Pin — Stud Set', price: 99 },
  { id: 'maang-tikka', name: 'Maang Tikka — Bridal', price: 399 },
  { id: 'bracelet-set', name: 'Bracelet Set — Stackable', price: 299 },
  { id: 'pendant-heart', name: 'Pendant — Heart with Chain', price: 189 },
];

function validateCart(cart) {
  if (!Array.isArray(cart) || cart.length === 0) throw new Error('Cart is empty');
  const items = [];
  let total = 0;
  for (const entry of cart) {
    const product = PRODUCTS.find((p) => p.id === entry.id);
    if (!product) throw new Error(`Unknown product: ${entry.id}`);
    const qty = Number(entry.qty);
    if (!qty || qty < 1 || qty > 99) throw new Error(`Invalid quantity for ${product.name}`);
    const lineTotal = product.price * qty;
    items.push({ id: product.id, name: product.name, price: product.price, qty, lineTotal });
    total += lineTotal;
  }
  if (total <= 0) throw new Error('Invalid order total');
  return { items, total, amountPaise: Math.round(total * 100) };
}

module.exports = { PRODUCTS, validateCart };
