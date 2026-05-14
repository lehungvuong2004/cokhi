# Cơ Khí Mạnh Hùng - Website Project

A modern React + Vite website for a mechanical engineering company specializing in laser cutting and steel structure solutions.

## 🚀 Features

- **Modern React Setup**: Built with React 19 and Vite for fast development
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Image Gallery**: Display projects with card-based layouts
- **Navigation System**: React Router for smooth page navigation
- **Performance Optimized**: Fast HMR with Vite development server

## 🛠 Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.1
- **Styling**: Tailwind CSS 4.2.2
- **Routing**: React Router DOM 7.13.1
- **Carousel**: Swiper 12.1.3
- **Icons**: Font Awesome

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

The development server will start at `http://localhost:5173` with hot module replacement enabled.

## 🏗 Build

```bash
npm run build
```

Creates an optimized production build in the `dist` folder.

## 📂 Project Structure

```
src/
├── component/          # React components
│   ├── Header.jsx     # Navigation header
│   ├── Banner.jsx     # Hero banner section
│   ├── ImageCard.jsx  # Reusable image card component
│   ├── ProjectGallery.jsx # Projects/products gallery
│   └── ...
├── img/               # Project images
│   ├── 1.jpg - 12.jpg
│   ├── nha1.jpg - nha8.jpg (House/construction projects)
│   └── _1.jpg - _40.jpg (Additional project images)
└── App.jsx           # Main app component
```

## 📋 Components

### ImageCard Component
Reusable card component for displaying images with titles and descriptions.

**Props:**
- `image` (string): Image file path
- `title` (string): Card title
- `description` (string): Card description

```jsx
<ImageCard 
  image="/src/img/1.jpg" 
  title="Project Name" 
  description="Project description"
/>
```

### ProjectGallery Component
Displays a grid of project images as cards, automatically loading images from the img folder.

## 🎨 Design System

- **Primary Color**: Amber (#F59E0B)
- **Secondary Color**: Dark Slate (#1E293B)
- **Accent Color**: Orange-Red (#FF5722)

## 🌐 Pages

- **Trang Chủ** (Home): Hero banner and featured projects
- **Giới Thiệu** (About): Company information
- **Sản Phẩm** (Products): Product catalog
- **Công Trình** (Projects): Project showcase/gallery
- **Tin Tức** (News): News and updates
- **Liên Hệ** (Contact): Contact information

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build locally

## 🎯 Company Information

**Cơ Khí Mạnh Hùng** - Mechanical Engineering
- Expertise: Laser cutting and professional welding
- Services: Steel structure solutions with optimal design
- Motto: "Chất lượng tạo nên uy tín" (Quality builds trust)
- Contact: 0961.570.201

## 📄 License

This project is private and proprietary to Cơ Khí Mạnh Hùng.
