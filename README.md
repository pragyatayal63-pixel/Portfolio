# 🚀 Pragya Tayal — 3D Developer Portfolio

A modern, interactive developer portfolio featuring 3D animations, interactive keycap models, buttery-smooth transitions, and a cosmic space-themed aesthetic.

## ✨ Features

- **Interactive 3D Keyboard** — Interactive Spline keyboard where keycaps represent core technical skills with descriptions on interaction.
- **Fluid Motion & Animations** — Powered by GSAP and Framer Motion for scroll, reveal, and responsive canvas particle effects.
- **Projects Showcase** — Clean tabular showcase highlighting key full-stack and AI projects (PsyTrack, Local Freelancer Marketplace) with interactive detail modals.
- **Theme Support** — Full Dark and Light mode options with interactive toasts.
- **Contact Form** — Direct client-to-inbox messaging integrated with EmailJS.
- **Fully Responsive** — Optimized for desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16 (Turbopack), React 19, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI, Aceternity UI |
| **Animation** | GSAP, Framer Motion |
| **3D Runtime** | Spline Runtime |
| **Email Delivery** | EmailJS |
| **Smooth Scrolling** | Lenis |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pragyatayal63-pixel/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Run development server:**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

