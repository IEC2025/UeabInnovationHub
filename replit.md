# Innovation & Entrepreneurship Centre - UEAB Website

## Overview
This is a comprehensive React-based website for the Innovation and Entrepreneurship Centre (IEC) at the University of Eastern Africa, Baraton (UEAB). The application serves as a digital platform to showcase the centre's programs, events, news, and resources while facilitating community engagement through contact forms and newsletter subscriptions.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React frontend built with:
- **React 18** with TypeScript for type safety and modern component patterns
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **Tailwind CSS** for utility-first styling with a custom design system
- **shadcn/ui** component library for consistent UI patterns using Radix UI primitives

The frontend follows a component-based architecture with:
- Page components for main routes (HomePage, AboutPage, EventsPage, etc.)
- Reusable UI components organized by feature (home/, layout/, ui/)
- Custom hooks for state management and responsive design
- Form handling using React Hook Form with Zod validation

### Backend Architecture
The backend is built with:
- **Express.js** server using ESM modules
- **TypeScript** for type safety across the full stack
- RESTful API endpoints for contact forms and newsletter subscriptions
- Middleware for request logging, JSON parsing, and error handling
- Development and production build configurations with esbuild

### Data Storage Solutions
- **PostgreSQL** database using Neon serverless hosting
- **Drizzle ORM** for type-safe database operations and schema management
- Database schemas defined in shared TypeScript files for full-stack type safety
- Migration system using drizzle-kit for schema changes
- Connection pooling for efficient database access

### Authentication and Authorization
Currently implements basic form validation without user authentication. The system is designed to be extended with authentication mechanisms as needed.

### Design System and Styling
- Custom design system based on UEAB branding with primary blue colors
- CSS custom properties for consistent theming
- Responsive design with mobile-first approach
- Custom animations and 3D effects for enhanced user experience
- Font integration with Google Fonts (Montserrat and Open Sans)

### State Management
- **TanStack React Query** for server state management and data fetching
- **React Hook Form** for form state management
- Custom hooks for component-level state (mobile detection, toast notifications)
- Context providers for global UI state (tooltips, themes)

## External Dependencies

### Third-Party Services
- **Neon Database** - Serverless PostgreSQL hosting for production data storage
- **Google Forms** - Integration for event registration and mentorship program applications

### UI and Component Libraries
- **Radix UI** - Comprehensive set of accessible, unstyled UI primitives
- **shadcn/ui** - Pre-styled components built on Radix UI
- **Lucide React** - Icon library for consistent iconography
- **React Icons** - Additional icons including social media icons

### Development and Build Tools
- **Vite** - Fast build tool with hot module replacement
- **TypeScript** - Static type checking across the entire application
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing with autoprefixer
- **ESLint** and **Prettier** configurations for code quality

### Form and Validation
- **React Hook Form** - Performant form library with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Integration between React Hook Form and Zod

### Database and ORM
- **Drizzle ORM** - Lightweight TypeScript ORM
- **@neondatabase/serverless** - Neon database driver for serverless environments
- **drizzle-zod** - Integration between Drizzle schemas and Zod validation

### Animation and User Experience
- **Embla Carousel** - Touch-friendly carousel component
- **next-themes** - Theme switching capability
- **Custom CSS animations** - 3D effects and smooth transitions