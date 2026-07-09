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
| `FROM_EMAIL` | Sender email (default: orders@anidev.in) |
| `ADMIN_EMAIL` | Order & contact notifications |
| `PORT` | Server port (default: 3000) |

## Hostinger Deployment

1. Connect GitHub repo `websitemanagement1986/anidev`
2. Node.js app, Express preset, `npm start`
3. Set environment variables in Hostinger panel

## Contact

- **Company:** Anidev
- **Contact:** Neeraj Kumar
- **Phone:** +91 8796065003
- **Address:** Unit no 527, P5/B Block, NPX Tower, Sec-153, Noida, Gautam Buddha Nagar, UP 201301
