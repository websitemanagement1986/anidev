/**
 * Downloads product photos from Wikimedia Commons (and Fomino cache) into assets/products/
 * Run: node scripts/download-product-photos.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const dir = path.join(__dirname, '..', 'assets', 'products');
const fominoDir = path.join(__dirname, '..', '..', 'Fomino', 'assets', 'products');
fs.mkdirSync(dir, { recursive: true });

const UA = 'AnidevBot/1.0 (https://anidevmultitrading.in; support@anidevmultitrading.in)';

// Wikimedia Commons — fruits (aligned with Fomino) + jewelry
const COMMONS = {
  'banana-robusta': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Cavendish_banana_from_Maracaibo.jpg/960px-Cavendish_banana_from_Maracaibo.jpg',
  'mango-alphonso': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mango_and_cross_sections.jpg/960px-Mango_and_cross_sections.jpg',
  'apple-gala': 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Gala_Apples_-_Flickr_-_The_Marmot.jpg',
  'pomegranate': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Pomegranate02_edit.jpg/960px-Pomegranate02_edit.jpg',
  'orange-imported': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/960px-Ambersweet_oranges.jpg',
  'watermelon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/960px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg',
  'grapes-green': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Green_Grape_3.jpg/960px-Green_Grape_3.jpg',
  papaya: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Ripe-papaya_72963-360x480_%284791301103%29.jpg',

  'earrings-gold-plated': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Arabesque_-_gold_and_kyanite_earrings%2C_cropped.jpg/960px-Arabesque_-_gold_and_kyanite_earrings%2C_cropped.jpg',
  'earrings-jhumka': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ear_Ring_for_Indian_Wedding_1.jpg/960px-Ear_Ring_for_Indian_Wedding_1.jpg',
  'maang-tikka': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Jhumar%2C_head_ornament_from_Lucknow%2C_late_19th_century_housed_at_National_Museum%2C_Delhi.jpg/960px-Jhumar%2C_head_ornament_from_Lucknow%2C_late_19th_century_housed_at_National_Museum%2C_Delhi.jpg',
  'ring-solitaire': 'https://upload.wikimedia.org/wikipedia/commons/d/df/Carmen_Diamond_engagement_ring_platinum_by_1791_Diamond.jpg',
  'bangles-set': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Colourful_bangles_at_a_shop%2C_Colaba%2C_Mumbai.jpg/960px-Colourful_bangles_at_a_shop%2C_Colaba%2C_Mumbai.jpg',
  'bracelet-kada': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bangle_and_Kada_Box.jpg/960px-Bangle_and_Kada_Box.jpg',
  'bracelet-set': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Composable-Bracelet.jpg',
  'necklace-pearl': 'https://upload.wikimedia.org/wikipedia/commons/a/af/White_pearl_necklace.jpg',
  'necklace-choker': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Gold_necklace_MET_DP118060.jpg/960px-Gold_necklace_MET_DP118060.jpg',
  'nose-pin-set': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Antique_Indian_Nose_Ring_Jewellery.jpg/960px-Antique_Indian_Nose_Ring_Jewellery.jpg',
  'anklet-silver': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Anklet_MET_sf91-1-1111b.jpg/960px-Anklet_MET_sf91-1-1111b.jpg',
  'pendant-heart': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Heart_shaped_pendant._Wellcome_M0016860.jpg/960px-Heart_shaped_pendant._Wellcome_M0016860.jpg',

  'corn-flakes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Spoonful_of_cereal.jpg/960px-Spoonful_of_cereal.jpg',
  muesli: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Muesli.jpg/960px-Muesli.jpg',

  'basmati-rice': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Basmati_Rice_India%2C_raw.jpg/960px-Basmati_Rice_India%2C_raw.jpg',
  'sona-masoori': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Masoori_Rice_%285193854729%29.jpg/960px-Masoori_Rice_%285193854729%29.jpg',
  'whole-wheat-atta': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Whole_wheat_grain_flour_being_scooped.jpg/960px-Whole_wheat_grain_flour_being_scooped.jpg',
  'toor-dal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Pigeon_Pea_%28Toor_Dal%29_%2849683602388%29.jpg/960px-Pigeon_Pea_%28Toor_Dal%29_%2849683602388%29.jpg',
  'moong-dal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Moong_dal.jpg/960px-Moong_dal.jpg',
  'chana-dal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Chana_dal.jpg/960px-Chana_dal.jpg',
  'oats-rolled': 'https://upload.wikimedia.org/wikipedia/commons/9/97/Rolled_oats.jpg',
  'ragi-flour': 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Finger_millet_grains_of_mixed_color.jpg',
  'bajra-flour': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Millet_grains.jpg/960px-Millet_grains.jpg',
  'poha-thick': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Poha.jpg/960px-Poha.jpg',
};

// Vegetables & grains — still Pexels until full Commons migration
const PEXELS = {
  'tomato-local': 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  onion: 'https://images.pexels.com/photos/144248/onions-vegetables-food-healthy-144248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  potato: 'https://images.pexels.com/photos/144251/potatoes-vegetables-erdfrucht-bio-144251.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'carrot-orange': 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'capsicum-green': 'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  cauliflower: 'https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'spinach-palak': 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  ginger: 'https://images.pexels.com/photos/4198142/pexels-photo-4198142.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
};

const PHOTOS = { ...COMMONS, ...PEXELS };

function isValidImage(buf) {
  if (!buf || buf.length < 3000) return false;
  const head = buf.slice(0, 32).toString('utf8');
  if (head.includes('<!DOCTYPE') || head.includes('<html')) return false;
  const isJpeg = buf[0] === 0xff && buf[1] === 0xd8;
  const isPng = buf[0] === 0x89 && buf[1] === 0x50;
  return isJpeg || isPng;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function download(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 8) return reject(new Error('too many redirects'));
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': UA } }, (res) => {
      if (res.statusCode === 429) {
        res.resume();
        return reject(new Error('HTTP 429'));
      }
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        res.resume();
        return download(next, redirects + 1).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        res.resume();
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
    req.setTimeout(45000, () => req.destroy(new Error('timeout')));
  });
}

async function fetchImage(id, url) {
  let buf;
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      buf = await download(url);
      break;
    } catch (err) {
      if (attempt === 5 || !String(err.message).includes('429')) throw err;
      const wait = attempt * 3000;
      process.stdout.write(`retry in ${wait / 1000}s... `);
      await sleep(wait);
    }
  }
  if (!isValidImage(buf)) throw new Error('not a valid image');
  return buf;
}

async function main() {
  const ids = Object.keys(PHOTOS);
  let ok = 0;
  let fail = 0;

  for (const id of ids) {
    const out = path.join(dir, `${id}.jpg`);
    const fominoSrc = path.join(fominoDir, `${id}.jpg`);
    if (fs.existsSync(fominoSrc) && !COMMONS[id]) {
      fs.copyFileSync(fominoSrc, out);
      console.log(`Copied from Fomino: ${id}`);
      ok++;
      continue;
    }
    try {
      process.stdout.write(`Downloading ${id}... `);
      const buf = await fetchImage(id, PHOTOS[id]);
      fs.writeFileSync(out, buf);
      console.log(`OK (${(buf.length / 1024).toFixed(0)} KB)`);
      ok++;
    } catch (err) {
      console.log(`FAIL: ${err.message}`);
      fail++;
    }
    await sleep(COMMONS[id] ? 2000 : 500);
  }

  const catDir = path.join(__dirname, '..', 'assets', 'categories');
  fs.mkdirSync(catDir, { recursive: true });

  // Wide landscape photos chosen to fill category cards (not single-product crops)
  const CATEGORY_PHOTOS = {
    'fresh-fruits': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Mixed_fruit.jpg/960px-Mixed_fruit.jpg',
    'fresh-vegetables': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Fresh_Vegetables_display_in_Iloilo_Terminal_Public_Market_01.jpg/960px-Fresh_Vegetables_display_in_Iloilo_Terminal_Public_Market_01.jpg',
    'grains-cereals': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Basmati_Rice_India%2C_raw.jpg/960px-Basmati_Rice_India%2C_raw.jpg',
    'artificial-jewelry': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/An_array_of_jewellery_being_sold_at_Rishikesh.jpg/960px-An_array_of_jewellery_being_sold_at_Rishikesh.jpg',
  };

  for (const [slug, url] of Object.entries(CATEGORY_PHOTOS)) {
    const dst = path.join(catDir, `${slug}.jpg`);
    try {
      process.stdout.write(`Category ${slug}... `);
      const buf = await fetchImage(slug, url);
      fs.writeFileSync(dst, buf);
      console.log(`OK (${(buf.length / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.log(`FAIL: ${err.message}`);
      fail++;
    }
    await sleep(2000);
  }

  console.log(`\nDone: ${ok} images, ${fail} missing`);
  if (fail > 0) process.exit(1);
}

main().catch((e) => { console.error(e); process.exit(1); });
