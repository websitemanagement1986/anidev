# Anidev — Online Store

Fresh fruits, vegetables, grains, cereals and artificial jewelry. Built by **Anidev**.

## Features

- 4 categories, 40 products with real photos
- Guest checkout (no login)
- Online payment via Razorpay (UPI, cards, net banking)
- Cash on Delivery (COD)
- Order confirmation emails via Resend

## Categories

- Fresh Fruits
- Fresh Vegetables
- Grains & Cereals
- Artificial Jewelry

## Local Development

```bash
cd C:\Repositiries\Anidev
npm install
cp .env.example .env
npm run download-images
npm start
```

Open http://localhost:3000

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `RAZORPAY_KEY_ID` | Razorpay public key |
| `RAZORPAY_KEY_SECRET` | Razorpay secret |
| `RESEND_API_KEY` | Email sending (optional) |
| `FROM_EMAIL` | Sender email (default: orders@anidevmultitrading.in) |
| `ADMIN_EMAIL` | Order & contact notifications |
| `PORT` | Server port (default: 3000) |

## Hostinger Deployment

1. Connect GitHub repo `websitemanagement1986/anidev`
2. Node.js app, Express preset, `npm start`
3. Set environment variables in Hostinger panel

## Contact

- **Company:** Anidev Multitrading Pvt Ltd
- **Phone:** +91 8447559220
- **Email:** support@anidevmultitrading.in
- **Address:** Office no 616, SL Tower, Commercial Belt Alpha 1, Greater Noida, Gautam Buddha Nagar, UP 201310
