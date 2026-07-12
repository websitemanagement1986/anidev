/**
 * Downloads product photos for Anidev into assets/products/
 * Run: node scripts/download-product-photos.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const dir = path.join(__dirname, '..', 'assets', 'products');
const fominoDir = path.join(__dirname, '..', '..', 'Fomino', 'assets', 'products');
fs.mkdirSync(dir, { recursive: true });

const UA = 'AnidevBot/1.0 (support@anidevmultitrading.in)';

const PHOTOS = {
  'banana-robusta': 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'mango-alphonso': 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'apple-gala': 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'pomegranate': 'https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-65256.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'orange-imported': 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'watermelon': 'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'grapes-green': 'https://images.pexels.com/photos/23042/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'papaya': 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'tomato-local': 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'onion': 'https://images.pexels.com/photos/144248/onions-vegetables-food-healthy-144248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'potato': 'https://images.pexels.com/photos/144251/potatoes-vegetables-erdfrucht-bio-144251.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'carrot-orange': 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'capsicum-green': 'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'cauliflower': 'https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'spinach-palak': 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'ginger': 'https://images.pexels.com/photos/4198142/pexels-photo-4198142.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'basmati-rice': 'https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'sona-masoori': 'https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'whole-wheat-atta': 'https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'toor-dal': 'https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'moong-dal': 'https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'chana-dal': 'https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'oats-rolled': 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'corn-flakes': 'https://images.pexels.com/photos/1172450/pexels-photo-1172450.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'muesli': 'https://images.pexels.com/photos/1172450/pexels-photo-1172450.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'ragi-flour': 'https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'bajra-flour': 'https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'poha-thick': 'https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'earrings-gold-plated': 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'necklace-pearl': 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'bangles-set': 'https://images.pexels.com/photos/1454227/pexels-photo-1454227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'ring-solitaire': 'https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'anklet-silver': 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'bracelet-kada': 'https://images.pexels.com/photos/1454227/pexels-photo-1454227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'earrings-jhumka': 'https://images.pexels.com/photos/1025571/pexels-photo-1025571.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'necklace-choker': 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'nose-pin-set': 'https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'maang-tikka': 'https://images.pexels.com/photos/1025571/pexels-photo-1025571.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'bracelet-set': 'https://images.pexels.com/photos/1454227/pexels-photo-1454227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'pendant-heart': 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
};

const FALLBACK = {
  pomegranate: 'apple-gala',
  onion: 'tomato-local',
  potato: 'carrot-orange',
  papaya: 'mango-alphonso',
  'sona-masoori': 'basmati-rice',
  'whole-wheat-atta': 'basmati-rice',
  'toor-dal': 'basmati-rice',
  'moong-dal': 'basmati-rice',
  'chana-dal': 'basmati-rice',
  'ragi-flour': 'basmati-rice',
  'bajra-flour': 'basmati-rice',
  'poha-thick': 'basmati-rice',
  'anklet-silver': 'earrings-gold-plated',
  'bracelet-kada': 'bangles-set',
  'necklace-choker': 'necklace-pearl',
  'nose-pin-set': 'ring-solitaire',
  'maang-tikka': 'earrings-jhumka',
  'bracelet-set': 'bangles-set',
  'pendant-heart': 'necklace-pearl',
};

function download(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 8) return reject(new Error('too many redirects'));
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': UA } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const next = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        res.resume();
        return download(next, redirects + 1).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode}`)); res.resume(); return; }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
    req.setTimeout(45000, () => req.destroy(new Error('timeout')));
  });
}

async function main() {
  const ids = Object.keys(PHOTOS);
  let ok = 0;
  for (const id of ids) {
    const out = path.join(dir, `${id}.jpg`);
    const fominoSrc = path.join(fominoDir, `${id}.jpg`);
    if (fs.existsSync(fominoSrc)) {
      fs.copyFileSync(fominoSrc, out);
      console.log(`Copied from Fomino: ${id}`);
      ok++;
      continue;
    }
    try {
      process.stdout.write(`Downloading ${id}... `);
      const buf = await download(PHOTOS[id]);
      if (buf.length < 3000) throw new Error('too small');
      fs.writeFileSync(out, buf);
      console.log(`OK (${(buf.length / 1024).toFixed(0)} KB)`);
      ok++;
    } catch (err) {
      console.log(`FAIL: ${err.message}`);
      const fb = FALLBACK[id];
      const fbPath = path.join(dir, `${fb}.jpg`);
      if (fb && fs.existsSync(fbPath)) {
        fs.copyFileSync(fbPath, out);
        console.log(`  → copied from ${fb}`);
        ok++;
      }
    }
  }
  console.log(`\nDone: ${ok}/${ids.length} images ready`);
}

main().catch((e) => { console.error(e); process.exit(1); });
