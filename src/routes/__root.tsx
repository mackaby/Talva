import { useEffect } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import { SITE_URL, GITHUB_URL, talva } from "@/content/site";
import appCss from "../styles.css?url";

const SHARE_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/03804760-fb18-49ea-8572-35ff83964bc5/id-preview-49eab2c5--2259859c-ac66-4622-a34f-df6e1244cf9c.lovable.app-1775071001037.png";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Talva",
  alternateName: ["Talva Platform", "Talva.dev"],
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description: talva.definition,
  foundingDate: "2026",
  sameAs: [GITHUB_URL],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Talva",
  alternateName: "Talva Platform",
  url: SITE_URL,
  description: talva.definition,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "DFZ_oqcYf7tkch1iCiZmqDI3h1FmmAbx1VpsrhQevBg" },
      { title: "Talva — the platform for AI-native software" },
      { name: "description", content: talva.definition },
      { name: "author", content: "Talva" },
      { name: "theme-color", content: "#0b0f1a" },
      { property: "og:site_name", content: "Talva" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SHARE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", type: "image/png", href: "/favicon.png", sizes: "48x48" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "LLM summary" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationLd) },
      { type: "application/ld+json", children: JSON.stringify(websiteLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootError,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function NotFound() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <p className="mb-3 font-mono text-sm text-primary">404</p>
        <h1 className="mb-4 text-4xl font-bold text-foreground">Page not found</h1>
        <p className="mb-8 text-muted-foreground">This page does not exist or has moved.</p>
        <Button asChild>
          <Link to="/">Go to the home page</Link>
        </Button>
      </div>
    </SiteLayout>
  );
}

function RootError({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">This page didn't load</h1>
        <p className="mb-8 text-muted-foreground">Something went wrong. Try again, or go back home.</p>
        <div className="flex justify-center gap-3">
          <Button
            onClick={() => {
              void router.invalidate();
              reset();
            }}
          >
            Try again
          </Button>
          <Button variant="outline" asChild>
            <a href="/">Go home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
