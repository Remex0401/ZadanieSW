# Zadanie SW

A modern Next.js application for browsing products with advanced filtering, searching, and pagination capabilities.

## Features

- **Product Catalog** - Display products from REST API
- **Filtering** - Filter products by status (Active/Promo) 
- **Live Search** - Real-time product search by name
- **Pagination** - Navigate through multiple product pages
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Storybook** for developing components
- **SEO Optimized** - Server-side rendering with Next.js App Router

## Getting Started

### Prerequisites 

- Node.js 18 or later
- npm package manager

### Installation 

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd ZadanieSW
   ```

2. **Navigate to project directory:**

   ```bash
   cd zadanie-sw
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Configure environment variables:**
   
   Create a `.env.local` file in the `zadanie-sw` directory:
   ```env
   NEXT_PUBLIC_API_URL=https://685596751789e182b37bc02b.mockapi.io
   ```

## Development

### Start development server

   ```bash
   npm run dev
   ```
   Application will be available at: http://localhost:3000

### Run Storybook

   ```bash
   npm run storybook
   ```
   Storybook will be available at: http://localhost:6006

## Production

### Build for production

   ```bash
   npm run build
   npm run start
   ```

## Project Structure 
   
   ```
   zadanie-sw/
   ├── components/          # React components
   │   ├── layout/          # Layout components (Navbar, PageFiltered)
   │   ├── product/         # Product-related components
   │   └── ui/              # Reusable UI components (Button, Card, etc.)
   ├── lib/                 # Utilities and API functions
   ├── src/app/             # Next.js App Router pages
   ├── public/              # Static assets
   └── .storybook/          # Storybook configuration
   ```

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Storybook** - Component development environment
- **React Paginate** - Pagination component

## Responsive Design 

The application features a mobile-first responsive design that adapts to different screen sizes:

- **Mobile**: Single column layout with collapsible navigation
- **Tablet**: Multi-column grid with optimized spacing  
- **Desktop**: Full-featured layout with expanded components

Each page displays 8 products regardless of screen size, with the layout automatically adjusting to provide the best user experience.


## Development Notes

- Uses **npm** as the package manager
- API endpoint configured via environment variables
- SEO optimized with server-side rendering

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Storybook
5. Submit a pull request



