# TPG Homepage Application

## Overview

This is a modern React-based marketing website for TPG (The Pipeline Group), a company that provides SDR-as-a-Service solutions for B2B sales teams. The application is built as a single-page application featuring a clean, conversion-focused design inspired by Ramp.com's aesthetic. The site showcases TPG's value proposition of eliminating pipeline leaks and providing full visibility into go-to-market operations through AI-supported SDR teams and comprehensive data insights.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing with single-page application structure
- **State Management**: TanStack React Query for server state management and caching
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui component library
- **Component Architecture**: Modular component structure with reusable UI components and page-specific sections
- **Build Tool**: Vite for fast development and optimized production builds

### Design System
- **Component Library**: shadcn/ui components with Radix UI primitives for accessibility
- **Theme System**: Light/dark theme support with CSS custom properties
- **Typography**: Inter font family with responsive typography scale
- **Color Palette**: Professional blue accents (220 100% 50%) with neutral grays and charcoal text
- **Layout**: Responsive grid system with max-w-6xl containers and consistent spacing scale

### Backend Architecture
- **Server**: Express.js with TypeScript for type-safe server development
- **Development**: Hot module replacement and development middleware through Vite integration
- **API Structure**: RESTful API design with /api prefix for all endpoints
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM for type-safe database operations
- **Schema**: User management schema with UUID primary keys and password authentication
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Development Storage**: In-memory storage fallback for development and testing

### Content Management
- **Static Assets**: Vite asset handling with optimized imports and bundling
- **Generated Images**: AI-generated visuals stored in attached_assets directory
- **Content Structure**: Component-based content management with props-driven customization

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting via @neondatabase/serverless
- **Connection Management**: connect-pg-simple for PostgreSQL session storage

### UI and Design Libraries
- **Radix UI**: Comprehensive set of accessible component primitives
- **Lucide React**: Modern icon library for consistent iconography
- **Framer Motion**: Animation library for interactive elements and transitions
- **Embla Carousel**: Lightweight carousel component for content display

### Development Tools
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect
- **Zod**: Runtime type validation integrated with Drizzle schemas
- **ESBuild**: Fast JavaScript bundler for production builds
- **TanStack React Query**: Server state management and caching solution

### Styling and Theming
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Class Variance Authority**: Type-safe component variant management
- **clsx**: Conditional CSS class composition utility
- **date-fns**: Date manipulation and formatting library

### Form and Validation
- **React Hook Form**: Performant form management with minimal re-renders
- **Hookform Resolvers**: Integration layer for form validation libraries

### Font and Typography
- **Google Fonts**: Inter font family loaded via CDN for optimal performance