# 🚀 Abhrajyoti Dhara's Portfolio

A modern, responsive portfolio website showcasing the work and skills of **Abhrajyoti Dhara**, a passionate software developer specializing in full-stack web development.

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with smooth animations
- **📱 Fully Responsive**: Optimized for all screen sizes and devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and build times
- **🎭 Interactive Animations**: Powered by Framer Motion for engaging user experience
- **🌙 Dark Theme**: Sleek dark design with blue accent colors
- **📧 Contact Integration**: Direct links to social media and professional profiles

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript/TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter)
- **Deployment**: Ready for Netlify/Vercel

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/abhra92/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📂 Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.jsx       # Navigation component
│   ├── Home.jsx         # Hero section
│   ├── Projects.jsx     # Projects showcase
│   ├── Skills.jsx       # Technical skills
│   ├── Experience.jsx   # Professional experience
│   ├── Contact.jsx      # Contact information
│   └── Blurbackground.jsx # Animated background
├── constants/           # Application constants
│   └── index.js         # Portfolio data and content
├── assets/             # Static assets
└── App.jsx             # Main application component
```

## 🎯 Sections

### 🏠 Home

- Personal introduction and professional summary
- Call-to-action button for CV download
- Animated typing effect for role descriptions

### 💼 Projects

- **Netflix Clone**: React-based streaming UI replica
- **Portfolio Website**: Personal portfolio with W3.CSS
- **Number Guessing Game**: Interactive JavaScript game
- **Responsive Chips Website**: Clean brand website
- **Christmas Landing Page**: Seasonal landing page
- **3D Temple**: Interactive Three.js experience

### 🛠️ Skills

- **Programming Languages**: Java, Python, JavaScript, TypeScript, C/C++, HTML/CSS, SQL
- **Frameworks & Libraries**: Spring Boot, Angular, React, Bootstrap, Tailwind CSS
- **Tools & Platforms**: Docker, Git/GitLab, Netlify, GCP, Jenkins, Vercel, VS Code, GitHub, Postman

### 👨‍💻 Experience

- **Current**: Software Developer at Sernion (Remote)
- **Previous**: Software Developer Intern at Euphoria GNX (Remote)

### 📞 Contact

- **Email**: abhrajoytidhara2@gmail.com
- **LinkedIn**: [abhra92](https://www.linkedin.com/in/abhra92/)
- **GitHub**: [abhra92](https://github.com/abhra92)
- **Instagram**: [abhratech_nexus](https://www.instagram.com/abhratech_nexus/)
- **X (Twitter)**: [_abHra_](https://x.com/_abHra_)
- **LeetCode**: [abhratech](https://leetcode.com/u/abhratech/)
- **HackerRank**: [abhrajoytidhara2](https://www.hackerrank.com/profile/abhrajoytidhara2)

## 🚀 Deployment

The portfolio is ready for deployment on popular platforms. Here are detailed instructions for each:

### 🌍 Netlify (Recommended)

**Option 1: Drag & Drop Deploy**

1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Drag and drop the `dist/` folder to Netlify's deploy area
4. Your site will be live instantly with a random URL
5. You can change the site name in Site Settings

**Option 2: Git Integration (Automatic Updates)**

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```
2. Connect your GitHub repo to Netlify
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy automatically on every push

### ▲ Vercel (Alternative)

**Option 1: Vercel CLI**

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Build and deploy:
   ```bash
   npm run build
   vercel --prod
   ```

**Option 2: Git Integration**

1. Go to [vercel.com](https://vercel.com) and connect your GitHub
2. Import your repository
3. Vercel auto-detects Vite settings
4. Deploy with one click

### 🐙 GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to package.json scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: "/your-repo-name/",
   });
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

### 🔧 Custom Domain Setup

After deploying, you can add a custom domain:

**For Netlify:**

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records as instructed

**For Vercel:**

1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records

### 📱 Environment Variables

If you add any API keys or environment variables:

1. Create `.env.local` file:
   ```
   VITE_API_KEY=your_api_key
   VITE_EMAIL_SERVICE_ID=your_service_id
   ```
2. Add to your deployment platform's environment variables section
3. Never commit `.env.local` to Git (already in .gitignore)

### 🔍 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Contact form/links function
- [ ] Resume/CV link is accessible
- [ ] Social media links are correct
- [ ] Site loads fast (check with `npm run preview`)
- [ ] Mobile responsiveness works
- [ ] SEO meta tags are proper

### 🚀 Quick Deploy Commands

```bash
# Build for production
npm run build

# Test production build locally
npm run preview

# Deploy to Netlify (if CLI installed)
npx netlify deploy --prod --dir=dist

# Deploy to Vercel (if CLI installed)
npx vercel --prod
```

## 🎨 Customization

To customize the portfolio with your own information:

1. **Update personal data** in `src/constants/index.js`
2. **Replace project information** with your own projects
3. **Modify color scheme** in Tailwind configuration
4. **Update social links** in the Contact component
5. **Replace favicon** with your own design

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

Feel free to reach out for collaborations or opportunities:

- **Portfolio**: [https://www.abhrajoyti.me/](https://www.abhrajoyti.me/)
- **Email**: abhrajoytidhara2@gmail.com
- **LinkedIn**: [Abhrajyoti Dhara](https://www.linkedin.com/in/abhra92/)

---

⭐ **Star this repository if you found it helpful!**
