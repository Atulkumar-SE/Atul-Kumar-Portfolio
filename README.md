# 🚀 Atul Kumar's Portfolio

![Portfolio Banner](./public/aj.png)

A sleek, premium, high-performance developer portfolio built with modern frontend architecture. This project showcases interactive UI/UX designs, responsive web development layouts, and structured project modules with a focus on seamless user experiences.

---

## ✨ Features

- **⚡ High Performance**: Optimized Next.js with App Router for lightning-fast page loads
- **🎨 Modern Design**: Beautiful, responsive UI built with Tailwind CSS
- **🎭 Smooth Animations**: Fluid transitions and interactive elements powered by Framer Motion
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **🎯 SEO Optimized**: Meta tags and structured content for better search visibility
- **🌙 Dark Mode Ready**: Easily extensible for dark/light theme support

---

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **[Next.js 14](https://nextjs.org/)** | React framework with App Router architecture |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework for rapid UI development |
| **[Framer Motion](https://www.framer.com/motion/)** | Animation library for fluid transitions and interactive states |
| **[Lucide React](https://lucide.dev/)** | Beautiful, customizable SVG icons |
| **[Google Fonts (Syne)](https://fonts.google.com/)** | Geometric, modern typography |

---

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── layout.js          # Root layout component
│       ├── page.js            # Home page
│       └── globals.css        # Global styles
├── public/
│   ├── aj.png                 # Portfolio profile image
│   └── Atul Kumar-Frontend.pdf # Resume/CV
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS setup
├── next.config.js             # Next.js configuration
└── README.md                  # This file
```

---

## 💻 Getting Started

Follow these steps to set up and run the repository locally on your machine:

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🎨 Customization Guide

### Update Personal Information
Edit `src/app/page.js` to customize:
- Your name and title
- Professional summary
- Links to your profiles (GitHub, LinkedIn, Twitter, etc.)

### Modify Colors & Branding
Edit `tailwind.config.js` to customize:
```javascript
theme: {
  colors: {
    primary: '#FF9800',    // Your brand color
    secondary: '#...',     // Secondary color
    // Add more custom colors
  }
}
```

### Add Your Resume
Replace the existing PDF in `public/Atul Kumar-Frontend.pdf` with your own resume.

### Update Profile Image
Replace `public/aj.png` with your own image (recommended size: 400x400px for best quality).

### Add Project Screenshots
1. Create a `projects` folder in `public/`:
   ```bash
   mkdir public/projects
   ```
2. Add your project screenshots/images to this folder
3. Reference them in your project components:
   ```jsx
   <img src="/projects/your-project.png" alt="Project Name" />
   ```

---

## 📸 Image Optimization Tips

- **Profile Image**: Use a square image (400x400px minimum) in PNG or JPEG format
- **Project Screenshots**: Use 1200x600px for landscape or 600x800px for portrait
- **Optimization**: Compress images using tools like:
  - [TinyPNG](https://tinypng.com/)
  - [ImageOptim](https://imageoptim.com/)
  - Built-in Next.js Image component for automatic optimization

### Using Next.js Image Component
For better performance, use the optimized Image component:
```jsx
import Image from 'next/image';

<Image
  src="/aj.png"
  alt="Profile"
  width={400}
  height={400}
/>
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
Vercel is the optimal hosting platform for Next.js projects:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Custom Domain** (Optional):
   - Add your domain in Vercel project settings
   - Update DNS records as instructed

### Deploy to GitHub Pages
```bash
npm run build
npm run export
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

---

## 🛠️ Key Features & Technologies

### Next.js App Router
- Modern file-based routing system
- Server-side rendering (SSR) for optimal performance
- Built-in API routes support

### Tailwind CSS
- Utility-first CSS framework
- Custom theme configuration in `tailwind.config.js`
- Responsive design breakpoints built-in

### Framer Motion
- Smooth page transitions
- Interactive component animations
- Keyframe animations for engaging visuals

### Lucide React Icons
- 1000+ customizable SVG icons
- Lightweight and performant
- Easy to use React components

---

## 📝 Configuration Files

### `tailwind.config.js`
Pre-configured with custom theme including brand colors and typography. Modify the `theme` section to customize colors, fonts, and spacing.

### `next.config.js`
Contains Next.js specific configurations including image optimization and build settings.

### `postcss.config.js`
PostCSS configuration for Tailwind CSS processing.

---

## 🔗 Resources & Links

- **[Next.js Documentation](https://nextjs.org/docs)**
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)**
- **[Framer Motion Documentation](https://www.framer.com/motion/)**
- **[Lucide Icons](https://lucide.dev/icons)**
- **[Google Fonts](https://fonts.google.com/)**

---

## 📊 Performance Metrics

This portfolio is optimized for:
- **Lighthouse Performance**: 90+ score
- **Core Web Vitals**: Excellent
- **Mobile-Friendly**: 100% responsive
- **Load Time**: < 2 seconds

---

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to:
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the **MIT License**. See the LICENSE file for more details.

---

## 👨‍💻 About

Built by **Atul Kumar** | Frontend Developer

- **Portfolio**: [Your Portfolio URL]
- **GitHub**: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- **LinkedIn**: [Your LinkedIn URL]
- **Email**: [your.email@example.com]

---

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark mode toggle
- [ ] Add contact form with email integration
- [ ] Create interactive project showcase
- [ ] Add testimonials section
- [ ] Implement analytics tracking

---

**Made with ❤️ using Next.js & Tailwind CSS**
