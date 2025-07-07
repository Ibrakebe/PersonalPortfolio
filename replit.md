# Ibrahima Kebe Portfolio Project

## Overview

This is a modern full-stack portfolio application built with React, TypeScript, and Express. The application features a futuristic design with advanced animations and showcases the developer's skills, projects, and contact information. It's configured as a monorepo with client and server components, utilizing modern development tools and practices.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom futuristic themes
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for complex animations and transitions
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL storage
- **API Structure**: RESTful endpoints prefixed with `/api`

### Development Setup
- **Monorepo Structure**: Shared code between client and server
- **Hot Reloading**: Vite development server with Express middleware
- **Type Safety**: Full TypeScript coverage across the stack
- **Path Aliases**: Configured for clean imports (@/, @shared/)

## Key Components

### Frontend Components
- **Navigation**: Glassmorphism navbar with smooth scroll navigation
- **Hero Section**: Animated landing section with typing effects
- **About Section**: Personal introduction with staggered animations
- **Skills Section**: Interactive skill categories with progress indicators
- **Projects Section**: Portfolio showcase with hover effects
- **Terminal Section**: Simulated terminal interface for developer experience
- **Contact Section**: Form with toast notifications
- **Particle Background**: Dynamic particle system for visual enhancement

### Backend Components
- **Storage Interface**: Abstracted data layer with in-memory and database implementations
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error middleware with proper status codes
- **Request Logging**: Detailed API request logging with performance metrics

### UI System
- **Design System**: Consistent component library with shadcn/ui
- **Theme**: Dark futuristic theme with custom color palette
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA-compliant components from Radix UI

## Data Flow

### Client-Server Communication
1. **Static Assets**: Vite serves client-side assets in development
2. **API Requests**: Client makes requests to `/api` endpoints
3. **Data Fetching**: TanStack Query manages server state and caching
4. **Error Handling**: Centralized error handling with user-friendly messages

### Database Operations
1. **Schema Definition**: Drizzle schema with TypeScript types
2. **Migrations**: Automated database migrations with drizzle-kit
3. **Data Access**: Repository pattern through storage interface
4. **Type Safety**: End-to-end type safety from database to UI

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18+ with modern hooks and concurrent features
- **Styling**: Tailwind CSS with PostCSS processing
- **Database**: PostgreSQL with Drizzle ORM and Neon serverless
- **Animations**: Framer Motion for complex animations
- **UI Components**: Extensive Radix UI component library

### Development Dependencies
- **Build Tools**: Vite for frontend, esbuild for backend
- **Type Checking**: TypeScript with strict configuration
- **Development**: tsx for TypeScript execution, nodemon alternative

### Font and Icon Dependencies
- **Fonts**: Google Fonts (Orbitron, Inter, JetBrains Mono)
- **Icons**: Font Awesome for consistent iconography

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations run against production database

### Environment Configuration
- **Database**: Configured via `DATABASE_URL` environment variable
- **Sessions**: PostgreSQL session store for production scalability
- **Static Files**: Express serves built frontend assets in production

### Development vs Production
- **Development**: Vite dev server with HMR and middleware integration
- **Production**: Express serves static files with API routes
- **Database**: Same schema works for both local and production databases

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```