# Hostinger Deployment Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Build Steps

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Build the project:**
   \`\`\`bash
   npm run build
   \`\`\`

3. **The build will create an `out` folder with static files**

## Hostinger Upload Steps

1. **Access your Hostinger control panel**
2. **Go to File Manager**
3. **Navigate to public_html folder**
4. **Delete existing files (if any)**
5. **Upload all contents from the `out` folder to public_html**
6. **Make sure the index.html is in the root of public_html**

## File Structure After Upload
\`\`\`
public_html/
├── index.html
├── _next/
├── images/
├── about/
├── services/
├── contact/
├── events/
├── blog/
└── join-network/
\`\`\`

## Important Notes

- All images are optimized for static hosting
- No server-side features are used
- All forms use external services (Formspree)
- WhatsApp integration works client-side
- All routes are pre-generated as static HTML

## Troubleshooting

If you encounter any issues:
1. Clear browser cache
2. Check that all files uploaded correctly
3. Verify index.html is in public_html root
4. Check Hostinger error logs in control panel

## Custom Domain
If using a custom domain, make sure to:
1. Update DNS settings in Hostinger
2. Wait for DNS propagation (up to 24 hours)
3. Enable SSL certificate in Hostinger panel
\`\`\`

Let me also create a simple build script to make deployment easier:
