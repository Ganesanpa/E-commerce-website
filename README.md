## Getting Started
# 🛍️ Next.js E-commerce Frontend

This is a fully functional E-commerce frontend application built using **Next.js**, **Tailwind CSS**, and **Ant Design**. It supports product listing, cart management, authentication (login/signup), and a complete checkout experience.

## 🚀 Features

- ✅ Product listing with:
  - Category filter
  - Search functionality
  - Price sorting
  - Load More (pagination)
- 🛒 Cart management with:
  - Add/Remove products
  - Quantity adjustments
  - Total price calculation
- 👤 User Authentication:
  - Login and Sign-up with form validation
  - Auth state stored in `localStorage`
- 💳 Checkout flow with:
  - Order summary
  - Success confirmation
  - Order history stored locally
- 🌗 Dark & Light Theme toggle
- 🔄 Responsive UI with Ant Design & TailwindCSS
- 📁 Local fake API simulation using `lib/fakeApi.js`

---

## 📸 Screenshots

> *(You can upload screenshots in your GitHub repo and reference them like below)*

![Home Page](screenshots/home.png)
![Cart Page](screenshots/cart.png)
![Checkout](screenshots/checkout.png)
![login Page](screenshort/login.png)
![Sign up Page](screenshort/signup.png)
![product Page](screenshort/product.png)
![order summery Page](screenshort/orderummery.png)
![order history Page](screenshort/Screenshot 2025-07-06 210049.png)


---

## 🧑‍💻 Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ant Design](https://ant.design/)
- [React Hot Toast](https://react-hot-toast.com/)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 📂 Project Structure
ecommerce-frontend/
├── public/
│ └── images/ # Product images
├── src/
│ ├── app/ # Next.js pages
│ ├── components/ # UI components (ProductCard, FilterBar, etc.)
│ ├── context/ # Auth and Cart Context
│ ├── data/ # Static product data
│ ├── lib/ # Fake API logic
├── .gitignore
├── README.md
└── package.json

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
