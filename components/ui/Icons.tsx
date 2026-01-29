interface IconProps {
  className?: string
}

export function CatIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-.5 0-1 .19-1.41.59l-3 3c-.18.18-.33.39-.46.61-.39-.13-.79-.2-1.22-.2-1.93 0-3.5 1.57-3.5 3.5 0 .54.13 1.05.35 1.5H2v9.91C2 22.01 2.99 23 4.09 23h15.82c1.1 0 2.09-.99 2.09-2.09V11h-.72c.22-.45.35-.96.35-1.5 0-1.93-1.57-3.5-3.5-3.5-.43 0-.83.07-1.22.2-.13-.22-.28-.43-.46-.61l-3-3C13 2.19 12.5 2 12 2zm-1 3.41L12.41 4l1.41 1.41L12 7.24l-1.82-1.83L11 4.59v.82zM5.91 8c.83 0 1.5.67 1.5 1.5S6.74 11 5.91 11s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm12.18 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM12 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-5 6c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5zm10 0c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5z"/>
    </svg>
  )
}

export function HeartIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  )
}

export function HomeIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  )
}

export function PawIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.35 3c1.18 0 2.15.75 2.54 1.82.5 1.36.08 2.77-1.07 3.72-.54.45-1.18.72-1.85.79-.15.01-.3.02-.45.02-1.18 0-2.15-.75-2.54-1.82-.5-1.36-.08-2.77 1.07-3.72.54-.45 1.18-.72 1.85-.79.15-.01.3-.02.45-.02M8.35 1c-.25 0-.51.02-.76.05-.99.1-1.95.49-2.74 1.16-1.73 1.44-2.37 3.7-1.61 5.79.59 1.6 2.01 2.75 3.74 3h.32c.34.04.68.04 1.02 0 1-.11 1.95-.49 2.74-1.16 1.73-1.44 2.37-3.7 1.61-5.79C11.97 2.44 10.55 1.28 8.82 1.03 8.67 1.01 8.51 1 8.35 1zm7.3 2c-.25 0-.51.02-.76.05-.99.1-1.95.49-2.74 1.16-1.73 1.44-2.37 3.7-1.61 5.79.59 1.6 2.01 2.75 3.74 3h.32c.34.04.68.04 1.02 0 1-.11 1.95-.49 2.74-1.16 1.73-1.44 2.37-3.7 1.61-5.79-.59-1.61-2.01-2.76-3.74-3.01-.15-.02-.31-.04-.45-.04h-.13zM4.65 9c-.25 0-.51.02-.76.05-.99.1-1.95.49-2.74 1.16C-.58 11.65-1.22 13.91-.46 16c.59 1.6 2.01 2.75 3.74 3h.32c.34.04.68.04 1.02 0 1-.11 1.95-.49 2.74-1.16 1.73-1.44 2.37-3.7 1.61-5.79-.59-1.61-2.01-2.76-3.74-3.01-.15-.02-.31-.04-.45-.04h-.13zm14.7 0c-.25 0-.51.02-.76.05-.99.1-1.95.49-2.74 1.16-1.73 1.44-2.37 3.7-1.61 5.79.59 1.6 2.01 2.75 3.74 3h.32c.34.04.68.04 1.02 0 1-.11 1.95-.49 2.74-1.16 1.73-1.44 2.37-3.7 1.61-5.79-.59-1.61-2.01-2.76-3.74-3.01-.15-.02-.31-.04-.45-.04h-.13zM12 14c-1.79 0-3.32.59-4.51 1.54-1.31 1.05-2.09 2.48-2.32 4.18-.13.97.06 1.79.54 2.44.51.69 1.27 1.01 2.09 1.13.46.07.94.09 1.44.04 1.02-.11 2.08-.34 3.04-.7.5-.19.99-.42 1.45-.68 1.28-.74 2.31-1.79 2.85-2.77.48-.87.6-1.65.4-2.36-.37-1.35-1.64-2.31-3.45-2.7-.5-.11-1.01-.12-1.53-.12z"/>
    </svg>
  )
}

export function GiftIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z"/>
    </svg>
  )
}

export function CalendarIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
    </svg>
  )
}

export function LocationIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  )
}

export function FoodIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
    </svg>
  )
}

export function MedicineIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.22 11.29l6.56-6.56a4.992 4.992 0 017.07 0l.71.71a4.992 4.992 0 010 7.07l-6.56 6.56a4.992 4.992 0 01-7.07 0l-.71-.71a4.992 4.992 0 010-7.07zm8.49-4.24L7.05 12.7c-.39.39-.39 1.02 0 1.41l2.12 2.12 5.66-5.66-2.12-2.12z"/>
    </svg>
  )
}

export function HospitalIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
    </svg>
  )
}

export function ScissorsIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/>
    </svg>
  )
}

export function VaccineIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 2v4H8v2h3v2H8v2h3v4.17l-1.59-1.59L8 16l4 4 4-4-1.41-1.42L13 16.17V12h3v-2h-3V6h3V4h-3V2h-2z"/>
    </svg>
  )
}

export function ChatIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
    </svg>
  )
}

export function DocumentIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
    </svg>
  )
}

export function CheckIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  )
}

export function CopyIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

export function TreeIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L5.5 9h3v4h-3L12 20l6.5-7h-3V9h3L12 2z"/>
    </svg>
  )
}

export function EmailIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
}

export function InstagramIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

export function RibbonIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm-6.5 5c-.28 0-.5.22-.5.5V22l3.5-3 3.5 3v-6.5c0-.28-.22-.5-.5-.5h-6zm13 0c-.28 0-.5.22-.5.5V22l3.5-3 3.5 3v-6.5c0-.28-.22-.5-.5-.5h-6z"/>
    </svg>
  )
}

export function TicketIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54z"/>
    </svg>
  )
}

export function ShoppingBagIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/>
    </svg>
  )
}

export function VolunteerIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
    </svg>
  )
}

export function MapIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
    </svg>
  )
}

export function CleaningIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm3 10H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z"/>
    </svg>
  )
}

export function LightbulbIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
    </svg>
  )
}

// Decorative cat-themed elements
export function PawPrintIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <ellipse cx="12" cy="17" rx="4" ry="3.5"/>
      <circle cx="6" cy="10" r="2.5"/>
      <circle cx="18" cy="10" r="2.5"/>
      <circle cx="8.5" cy="6" r="2"/>
      <circle cx="15.5" cy="6" r="2"/>
    </svg>
  )
}

export function CatSilhouetteIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 4.5l-1-2.5 2.5 1.5L15 4l-1 2.5c.83.38 1.5 1.12 1.5 2 0 .55-.22 1.05-.59 1.41l.59.59v1l-2-1-2 1v-1l.59-.59c-.37-.36-.59-.86-.59-1.41 0-.88.67-1.62 1.5-2zm0 12c-3.31 0-6-2.69-6-6 0-1.01.26-1.97.7-2.8l1.3.8c-.31.6-.5 1.28-.5 2 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-.72-.19-1.4-.5-2l1.3-.8c.44.83.7 1.79.7 2.8 0 3.31-2.69 6-6 6z"/>
    </svg>
  )
}

export function CatFaceIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      {/* Ears */}
      <path d="M8 28 L4 8 L20 20 Z"/>
      <path d="M56 28 L60 8 L44 20 Z"/>
      {/* Face */}
      <ellipse cx="32" cy="38" rx="24" ry="20"/>
      {/* Eyes */}
      <ellipse cx="22" cy="34" rx="4" ry="5" fill="white"/>
      <ellipse cx="42" cy="34" rx="4" ry="5" fill="white"/>
      <circle cx="22" cy="35" r="2" fill="black"/>
      <circle cx="42" cy="35" r="2" fill="black"/>
      {/* Nose */}
      <path d="M32 42 L29 46 L35 46 Z" fill="pink"/>
      {/* Whiskers */}
      <line x1="8" y1="40" x2="24" y2="42" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="8" y1="44" x2="24" y2="44" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="8" y1="48" x2="24" y2="46" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="56" y1="40" x2="40" y2="42" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="56" y1="44" x2="40" y2="44" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="56" y1="48" x2="40" y2="46" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

export function WhiskersIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="0" y1="8" x2="18" y2="10"/>
      <line x1="0" y1="12" x2="18" y2="12"/>
      <line x1="0" y1="16" x2="18" y2="14"/>
      <line x1="48" y1="8" x2="30" y2="10"/>
      <line x1="48" y1="12" x2="30" y2="12"/>
      <line x1="48" y1="16" x2="30" y2="14"/>
    </svg>
  )
}

export function CatEarsIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 24" fill="currentColor">
      <path d="M4 24 L0 0 L16 16 Z"/>
      <path d="M44 24 L48 0 L32 16 Z"/>
    </svg>
  )
}
