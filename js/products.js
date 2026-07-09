const ANIDEV = {
  name: 'Anidev',
  company: 'Anidev',
  contactPerson: 'Neeraj Kumar',
  phone: '+918796065003',
  phoneDisplay: '+91 8796065003',
  email: 'support@anidev.in',
  address: 'Unit no 527, P5/B Block, NPX Tower, Sec-153, Noida, Gautam Buddha Nagar, UP 201301',
};

const CATEGORIES = [
  { slug: 'fresh-fruits', name: 'Fresh Fruits', shortName: 'Fruits', icon: '🍎', color: '#e65100', image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=500&h=420&fit=crop', tagline: 'Farm-fresh fruits daily', description: 'Seasonal and everyday fruits picked for freshness.' },
  { slug: 'fresh-vegetables', name: 'Fresh Vegetables', shortName: 'Vegetables', icon: '🥬', color: '#2e7d32', image: 'https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg?auto=compress&cs=tinysrgb&w=500&h=420&fit=crop', tagline: 'Crisp vegetables from farms', description: 'Daily kitchen vegetables delivered fresh.' },
  { slug: 'grains-cereals', name: 'Grains & Cereals', shortName: 'Grains', icon: '🌾', color: '#f9a825', image: 'https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=500&h=420&fit=crop', tagline: 'Rice, wheat, oats & more', description: 'Premium grains and breakfast cereals for your pantry.' },
  { slug: 'artificial-jewelry', name: 'Artificial Jewelry', shortName: 'Jewelry', icon: '💎', color: '#ad1457', image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500&h=420&fit=crop', tagline: 'Elegant fashion jewelry', description: 'Trendy artificial jewelry — earrings, necklaces, bangles & more.' },
];

const PRODUCTS = [
  // Fruits
  { id: 'banana-robusta', category: 'fresh-fruits', name: 'Banana — Robusta', vendor: 'Anidev Fresh', rating: 4.4, price: 38, originalPrice: 48, packSize: '500 g', description: 'Sweet ripe Robusta bananas. Approx. 3–4 pcs.', features: ['Naturally ripened', 'Potassium rich', 'Daily fresh'] },
  { id: 'mango-alphonso', category: 'fresh-fruits', name: 'Mango — Alphonso', vendor: 'Anidev Fresh', rating: 4.8, price: 299, originalPrice: 399, packSize: '1 kg', description: 'Premium Alphonso mangoes. Seasonal favourite.', features: ['Sweet & aromatic', 'Hand sorted', 'King of mangoes'] },
  { id: 'apple-gala', category: 'fresh-fruits', name: 'Apple — Royal Gala', vendor: 'Anidev Fresh', rating: 4.5, price: 189, originalPrice: 249, packSize: '4 pcs', description: 'Crisp Royal Gala apples.', features: ['Crunchy', 'Fibre rich', 'Imported quality'] },
  { id: 'pomegranate', category: 'fresh-fruits', name: 'Pomegranate', vendor: 'Anidev Fresh', rating: 4.3, price: 145, originalPrice: 195, packSize: '2 pcs', description: 'Juicy ruby-red pomegranate.', features: ['Antioxidant rich', 'Fresh picked', 'Premium'] },
  { id: 'orange-imported', category: 'fresh-fruits', name: 'Orange — Imported', vendor: 'Anidev Fresh', rating: 4.2, price: 99, originalPrice: 134, packSize: '500 g', description: 'Sweet oranges for juice and snacking.', features: ['Vitamin C', 'Juicy', 'Easy peel'] },
  { id: 'watermelon', category: 'fresh-fruits', name: 'Watermelon', vendor: 'Anidev Fresh', rating: 4.1, price: 59, originalPrice: 79, packSize: '1 pc', description: 'Refreshing summer watermelon.', features: ['Hydrating', 'Sweet', '2–3 kg approx'] },
  { id: 'grapes-green', category: 'fresh-fruits', name: 'Grapes — Green', vendor: 'Anidev Fresh', rating: 4.4, price: 89, originalPrice: 119, packSize: '250 g', description: 'Seedless green grapes.', features: ['Seedless', 'Crisp', 'Washed'] },
  { id: 'papaya', category: 'fresh-fruits', name: 'Papaya — Ripe', vendor: 'Anidev Fresh', rating: 4.0, price: 45, originalPrice: 58, packSize: '1 pc', description: 'Ripe papaya. Approx. 800 g–1 kg.', features: ['Digestive enzymes', 'Sweet', 'Farm fresh'] },

  // Vegetables
  { id: 'tomato-local', category: 'fresh-vegetables', name: 'Tomato — Local', vendor: 'Anidev Fresh', rating: 4.3, price: 32, originalPrice: 42, packSize: '1 kg', description: 'Farm-fresh local tomatoes.', features: ['Daily harvest', 'Juicy', 'Cooking & salad'] },
  { id: 'onion', category: 'fresh-vegetables', name: 'Onion', vendor: 'Anidev Fresh', rating: 4.5, price: 28, originalPrice: 38, packSize: '1 kg', description: 'Essential kitchen onion.', features: ['Long shelf life', 'Fresh', 'Best value'] },
  { id: 'potato', category: 'fresh-vegetables', name: 'Potato', vendor: 'Anidev Fresh', rating: 4.4, price: 25, originalPrice: 35, packSize: '1 kg', description: 'Versatile potatoes for all dishes.', features: ['Clean sorted', 'Starch rich', 'Daily staple'] },
  { id: 'carrot-orange', category: 'fresh-vegetables', name: 'Carrot — Orange', vendor: 'Anidev Fresh', rating: 4.2, price: 28, originalPrice: 36, packSize: '500 g', description: 'Sweet orange carrots.', features: ['Beta-carotene', 'Crisp', 'Washed'] },
  { id: 'capsicum-green', category: 'fresh-vegetables', name: 'Capsicum — Green', vendor: 'Anidev Fresh', rating: 4.1, price: 32, originalPrice: 40, packSize: '250 g', description: 'Fresh green bell peppers.', features: ['Crunchy', 'Vitamin C', 'Uniform size'] },
  { id: 'cauliflower', category: 'fresh-vegetables', name: 'Cauliflower', vendor: 'Anidev Fresh', rating: 4.0, price: 35, originalPrice: 48, packSize: '1 pc', description: 'White cauliflower head.', features: ['Tight florets', 'Fresh daily', '400–600 g'] },
  { id: 'spinach-palak', category: 'fresh-vegetables', name: 'Palak — Cleaned', vendor: 'Anidev Fresh', rating: 4.3, price: 18, originalPrice: 24, packSize: '250 g', description: 'Pre-cleaned palak leaves.', features: ['Iron rich', 'Ready to cook', 'Washed'] },
  { id: 'ginger', category: 'fresh-vegetables', name: 'Ginger', vendor: 'Anidev Fresh', rating: 4.2, price: 28, originalPrice: 36, packSize: '100 g', description: 'Aromatic fresh ginger.', features: ['Strong flavour', 'Fresh root', 'Kitchen essential'] },

  // Grains & Cereals
  { id: 'basmati-rice', category: 'grains-cereals', name: 'Basmati Rice — Premium', vendor: 'Anidev Pantry', rating: 4.6, price: 189, originalPrice: 220, packSize: '5 kg', description: 'Aged long-grain basmati rice.', features: ['Aromatic', 'Extra long grain', 'Aged basmati'] },
  { id: 'sona-masoori', category: 'grains-cereals', name: 'Sona Masoori Rice', vendor: 'Anidev Pantry', rating: 4.4, price: 95, originalPrice: 115, packSize: '5 kg', description: 'Light and fluffy everyday rice.', features: ['South Indian favourite', 'Non-sticky', 'Daily use'] },
  { id: 'whole-wheat-atta', category: 'grains-cereals', name: 'Whole Wheat Atta', vendor: 'Anidev Pantry', rating: 4.5, price: 249, originalPrice: 279, packSize: '10 kg', description: 'Chakki-ground whole wheat flour.', features: ['100% wheat', 'Soft rotis', 'No maida'] },
  { id: 'toor-dal', category: 'grains-cereals', name: 'Toor Dal', vendor: 'Anidev Pantry', rating: 4.5, price: 145, originalPrice: 165, packSize: '1 kg', description: 'Unpolished toor dal.', features: ['Protein rich', 'Unpolished', 'Dal tadka ready'] },
  { id: 'moong-dal', category: 'grains-cereals', name: 'Moong Dal — Yellow', vendor: 'Anidev Pantry', rating: 4.4, price: 125, originalPrice: 145, packSize: '1 kg', description: 'Split yellow moong dal.', features: ['Easy digest', 'Light dal', 'Protein'] },
  { id: 'chana-dal', category: 'grains-cereals', name: 'Chana Dal', vendor: 'Anidev Pantry', rating: 4.3, price: 110, originalPrice: 130, packSize: '1 kg', description: 'Split Bengal gram dal.', features: ['Nutty flavour', 'High protein', 'Versatile'] },
  { id: 'oats-rolled', category: 'grains-cereals', name: 'Oats — Rolled', vendor: 'Anidev Pantry', rating: 4.5, price: 165, originalPrice: 195, packSize: '1 kg', description: 'Whole grain rolled oats for breakfast.', features: ['High fibre', 'Heart healthy', 'Quick cook'] },
  { id: 'corn-flakes', category: 'grains-cereals', name: 'Corn Flakes', vendor: 'Anidev Pantry', rating: 4.2, price: 185, originalPrice: 220, packSize: '475 g', description: 'Crispy corn flakes cereal.', features: ['Breakfast ready', 'Iron fortified', 'Family pack'] },
  { id: 'muesli', category: 'grains-cereals', name: 'Muesli — Fruit & Nut', vendor: 'Anidev Pantry', rating: 4.4, price: 299, originalPrice: 349, packSize: '500 g', description: 'Fruit and nut muesli mix.', features: ['No cooking', 'Nuts & raisins', 'Healthy start'] },
  { id: 'ragi-flour', category: 'grains-cereals', name: 'Ragi Flour', vendor: 'Anidev Pantry', rating: 4.3, price: 75, originalPrice: 90, packSize: '500 g', description: 'Finger millet (ragi) flour.', features: ['Calcium rich', 'Gluten free', 'Traditional grain'] },
  { id: 'bajra-flour', category: 'grains-cereals', name: 'Bajra Flour', vendor: 'Anidev Pantry', rating: 4.2, price: 65, originalPrice: 78, packSize: '500 g', description: 'Pearl millet flour for rotis.', features: ['Winter special', 'High fibre', 'Millet flour'] },
  { id: 'poha-thick', category: 'grains-cereals', name: 'Poha — Thick', vendor: 'Anidev Pantry', rating: 4.1, price: 55, originalPrice: 68, packSize: '500 g', description: 'Thick flattened rice for poha.', features: ['Quick breakfast', 'Light meal', 'Indian staple'] },

  // Artificial Jewelry
  { id: 'earrings-gold-plated', category: 'artificial-jewelry', name: 'Earrings — Gold Plated Drop', vendor: 'Anidev Jewelry', rating: 4.6, price: 199, originalPrice: 349, packSize: '1 pair', description: 'Elegant gold-plated drop earrings for parties and daily wear.', features: ['Anti-tarnish coat', 'Lightweight', 'Hypoallergenic hooks'] },
  { id: 'necklace-pearl', category: 'artificial-jewelry', name: 'Necklace — Pearl Strand', vendor: 'Anidev Jewelry', rating: 4.5, price: 299, originalPrice: 499, packSize: '1 pc', description: 'Classic artificial pearl strand necklace.', features: ['Elegant look', 'Adjustable clasp', 'Party wear'] },
  { id: 'bangles-set', category: 'artificial-jewelry', name: 'Bangles — Designer Set', vendor: 'Anidev Jewelry', rating: 4.4, price: 249, originalPrice: 399, packSize: 'Set of 6', description: 'Colourful designer bangle set.', features: ['Set of 6', 'Scratch resistant', 'Festival ready'] },
  { id: 'ring-solitaire', category: 'artificial-jewelry', name: 'Ring — Solitaire Style', vendor: 'Anidev Jewelry', rating: 4.3, price: 149, originalPrice: 249, packSize: '1 pc', description: 'Sparkling solitaire-style fashion ring.', features: ['Adjustable size', 'CZ stone', 'Gift box'] },
  { id: 'anklet-silver', category: 'artificial-jewelry', name: 'Anklet — Silver Tone', vendor: 'Anidev Jewelry', rating: 4.2, price: 179, originalPrice: 279, packSize: '1 pair', description: 'Delicate silver-tone anklet pair with charms.', features: ['Pair of 2', 'Bell charms', 'Beach & ethnic wear'] },
  { id: 'bracelet-kada', category: 'artificial-jewelry', name: 'Bracelet — Kada Style', vendor: 'Anidev Jewelry', rating: 4.4, price: 219, originalPrice: 349, packSize: '1 pc', description: 'Bold kada-style bracelet with antique finish.', features: ['Antique gold', 'Openable', 'Unisex'] },
  { id: 'earrings-jhumka', category: 'artificial-jewelry', name: 'Jhumka Earrings — Traditional', vendor: 'Anidev Jewelry', rating: 4.7, price: 279, originalPrice: 449, packSize: '1 pair', description: 'Traditional Indian jhumka earrings.', features: ['Ethnic design', 'Lightweight', 'Wedding & festive'] },
  { id: 'necklace-choker', category: 'artificial-jewelry', name: 'Choker — Stone Studded', vendor: 'Anidev Jewelry', rating: 4.5, price: 349, originalPrice: 549, packSize: '1 pc', description: 'Trendy stone-studded choker necklace.', features: ['Adjustable chain', 'Party wear', 'Statement piece'] },
  { id: 'nose-pin-set', category: 'artificial-jewelry', name: 'Nose Pin — Stud Set', vendor: 'Anidev Jewelry', rating: 4.3, price: 99, originalPrice: 159, packSize: 'Set of 3', description: 'Set of 3 artificial nose pins/studs.', features: ['Set of 3 designs', 'Comfort fit', 'Daily wear'] },
  { id: 'maang-tikka', category: 'artificial-jewelry', name: 'Maang Tikka — Bridal', vendor: 'Anidev Jewelry', rating: 4.6, price: 399, originalPrice: 649, packSize: '1 pc', description: 'Bridal-style maang tikka with stones.', features: ['Bridal look', 'Adjustable hook', 'Festival special'] },
  { id: 'bracelet-set', category: 'artificial-jewelry', name: 'Bracelet Set — Stackable', vendor: 'Anidev Jewelry', rating: 4.4, price: 299, originalPrice: 479, packSize: 'Set of 4', description: 'Stackable bracelet set in mixed metals.', features: ['Set of 4', 'Mix & match', 'Trendy stack'] },
  { id: 'pendant-heart', category: 'artificial-jewelry', name: 'Pendant — Heart with Chain', vendor: 'Anidev Jewelry', rating: 4.5, price: 189, originalPrice: 299, packSize: '1 set', description: 'Heart pendant with matching chain.', features: ['With chain', 'Rose gold tone', 'Gift ready'] },
];

const PRODUCT_IMAGE_BASE = 'assets/products';

const PRODUCT_IMAGES = Object.fromEntries(
  PRODUCTS.map((p) => [p.id, `${PRODUCT_IMAGE_BASE}/${p.id}.jpg`])
);

PRODUCTS.forEach((p) => {
  p.image = PRODUCT_IMAGES[p.id];
});

function getProductImage(product) {
  if (!product) return '';
  return product.image || PRODUCT_IMAGES[product.id] || `${PRODUCT_IMAGE_BASE}/${product.id}.jpg`;
}

function getCategory(slug) {
  return CATEGORIES.find((c) => c.slug === slug);
}

function getProductsByCategory(slug) {
  return PRODUCTS.filter((p) => p.category === slug);
}

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function formatPrice(product) {
  return `₹${product.price.toLocaleString('en-IN')}`;
}

function getDiscount(product) {
  if (!product.originalPrice || !product.price) return null;
  const pct = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  return pct > 0 ? `${pct}% OFF` : null;
}

function getDealBadge(product) {
  if (product.originalPrice && product.price && product.originalPrice - product.price >= 15) {
    return 'Best Deal!';
  }
  return null;
}

function getProductCount(categorySlug) {
  return PRODUCTS.filter((p) => p.category === categorySlug).length;
}

function getDealsProducts() {
  return PRODUCTS.filter((p) => p.originalPrice && p.price && p.originalPrice > p.price)
    .sort((a, b) => ((b.originalPrice - b.price) / b.originalPrice) - ((a.originalPrice - a.price) / a.originalPrice))
    .slice(0, 8);
}

function getTrendingProducts() {
  return [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 8);
}

if (typeof module !== 'undefined') {
  module.exports = {
    ANIDEV, CATEGORIES, PRODUCTS, PRODUCT_IMAGES,
    getCategory, getProductsByCategory, getProduct, getProductImage,
    formatPrice, getDiscount, getDealBadge, getProductCount,
    getDealsProducts, getTrendingProducts,
  };
}
