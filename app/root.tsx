import './tailwind.css'
import './font.css'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Toaster } from '@/components/ui/sonner'

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <Links />
      </head>
      <body
        suppressHydrationWarning
      >
        <Outlet />
        <Toaster />
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  )
}
