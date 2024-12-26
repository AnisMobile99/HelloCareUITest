import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./root.css";
import { Header } from "~/views/Header/Header";
import { SearchProvider } from "./contexts/SearchContext";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900&display=swap",
  },
];

export default function App() {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans bg-white text-gray-900">
        <SearchProvider>
          <Header />
          <div id="root">
            <Outlet />
          </div>
        </SearchProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
