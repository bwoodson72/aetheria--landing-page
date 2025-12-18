# Aetheria — Architectural Innovation Landing Page

A premium, high-performance portfolio landing page for **Aetheria**, a global architectural collective focused on "Breathing Structures" and regenerative urban design. This project showcases modern web development techniques, featuring fluid animations, smooth scrolling, and optimized assets.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (via `motion/react`)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## ✨ Key Features

- **Advanced Animations**:
  - Infinite diamond-pattern background panning in the Hero section.
  - Scroll-triggered parallax effects in the Vision section.
  - Staggered entrance animations for content blocks.
  - Interactive project grid with grayscale-to-color hover effects.
- **Performance Optimized**:
  - Fully refactored to use **WebP** image format for superior compression.
  - Next.js Image component for automatic resizing and lazy loading.
- **Responsive Design**: Mobile-first approach ensuring a seamless experience across all device sizes.
- **Smooth Navigation**: Integrated Lenis for a buttery-smooth scrolling experience and anchor link transitions.

## 📁 Project Structure

```text
src/
├── app/                # Next.js App Router pages and layouts
├── components/         # Reusable UI components
│   ├── nav.tsx         # Fixed navigation with backdrop blur
│   ├── heroSection.tsx # Hero with motion background
│   ├── visionSection.tsx# Parallax vision block
│   ├── showcaseGrid.tsx# Interactive project gallery
│   ├── studioSection.tsx# Brand story and stats
│   └── ...             # Other section components
├── public/             # Optimized assets (WebP images, SVGs)
└── ...config files     # Tailwind, Next.js, and TypeScript configs
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/landing-page-2.git
   cd landing-page-2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 License

This project is licensed under the MIT License.
