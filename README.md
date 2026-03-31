# Muktaloy Residency

A premium real estate website built with **Next.js (App Router)** and **Tailwind CSS**.

It showcases the property professionally, highlights amenities and available units, provides a categorized gallery with lightbox preview, and includes a working inquiry form connected to a mock API route.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript
- lucide-react (icons)

## Features

- Premium, responsive UI (mobile-first)
- Sticky navbar with active section highlighting
- Smooth scrolling navigation
- Fullscreen hero with CTA actions
- About, amenities, apartment details, and location sections
- Available units system with status badges (Available/Occupied)
- Categorized gallery (Exterior/Interior/Rooms/Surroundings) with lightbox modal
- Tenant Portal external action link
- Contact inquiry form with:
  - loading state
  - success and error messages
  - API route submission (`/api/contact`)
- SEO metadata with Open Graph and Twitter card support

## Project Structure

- `app/`
  - `layout.tsx` - global layout and metadata
  - `page.tsx` - homepage section composition
  - `globals.css` - global styles and utilities
  - `api/contact/route.ts` - mock inquiry endpoint
- `components/`
  - reusable section components and data definitions
- `tailwind.config.ts` - theme and custom colors
- `next.config.mjs` - Next.js config (image remote patterns)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open in browser:

[`http://localhost:3000`](http://localhost:3000)

## Build for Production

```bash
npm run build
npm run start
```

## Inquiry API

### Endpoint

`POST /api/contact`

### Request Body

```json
{
  "name": "John Doe",
  "phone": "+8801XXXXXXXXX",
  "message": "I want details about Unit B2."
}
```

### Behavior

- Returns `400` if any field is missing
- Simulates processing delay
- Returns success JSON when valid

## Customization Notes

- Update unit data in `components/data.ts`
- Replace placeholder contact details in `components/contact-section.tsx` and `components/footer.tsx`
- Replace hero/gallery images or move to local assets inside `public/` if desired
- Update metadata URL/domain in `app/layout.tsx`

---

Designed for a clean, trustworthy, and modern residential property experience.
