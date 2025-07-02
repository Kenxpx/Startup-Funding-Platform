# 🚀 Startup Funding Platform

A scalable, responsive, and production-ready platform built with Next.js and Tailwind CSS to connect startups, investors, mentors, and partners. This project implements a complete funding lifecycle with static deployment capabilities and a modular component structure.

---

## 🌐 Live Demo

[View Live Site](https://startupcatalystnetwork.in/)

---

## 🔧 Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Lucide Icons
- Formspree (for form handling)
- Hostinger (static deployment)

---

## 📁 Features

- Fully static website using `next export`
- Modular, component-driven architecture
- Role-based registration (Startup, Investor, Mentor, Partner)
- SEO-optimized, responsive layout
- Contact forms, event listings, and blog
- Mobile-first design with clean UI

---

## 🛠 Setup Instructions

### Prerequisites

- Node.js 18+
- npm

### Development

```bash
git clone https://github.com/Kenxpx/Startup-Funding-Platform.git
cd Startup-Funding-Platform

npm install --legacy-peer-deps
npm run dev
```

### Production Build

```bash
npm run build
npm run export
```

Exports static files to the `/out` directory.

---

## 🚀 Deployment (Hostinger)

1. Build the site using the steps above.
2. Open Hostinger File Manager → `public_html`
3. Delete existing files (if any)
4. Upload contents of the `/out` folder
5. Ensure `index.html` is at the root of `public_html`

---

## 📂 Directory Structure After Upload

```
public_html/
├── index.html
├── _next/
├── about/
├── blog/
├── contact/
├── events/
├── join-network/
├── services/
└── images/
```

---

## 🧪 Troubleshooting

- Clear browser cache after upload
- Ensure all folders are uploaded completely
- Confirm `index.html` is at root
- Use server error logs for debugging if needed

---

## 📄 License

MIT License

---

## 👤 Author

**Sachin Bind**  
[GitHub](https://github.com/Kenxpx)
