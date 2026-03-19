import { Metadata, Viewport } from 'next';
import SmoothScroll from '@/components/ui/SmoothScroll';
import { bebasNeue, dmSerifDisplay, ibmPlexMono, spaceGrotesk, libreBaskerville } from '@/lib/fonts';
import './globals.css';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vasanthaganesh.dev"),
  title: "Vasanthaganesh R | Vibe-Driven Full-Stack Developer",
  description: "I build at the intersection of code and craft — treating every product like a world worth inhabiting. Full-stack developer located in Puducherry, India.",
  keywords: ["Vasanthaganesh", "Full-Stack Developer", "Next.js", "React", "Frontend Developer", "Backend Developer", "Puducherry"],
  authors: [{ name: "Vasanthaganesh" }],
  creator: "Vasanthaganesh",
  publisher: "Vasanthaganesh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vasanthaganesh R | Vibe-Driven Full-Stack Developer",
    description: "I build at the intersection of code and craft — treating every product like a world worth inhabiting.",
    url: "https://vasanthaganesh.dev",
    siteName: "Vasanthaganesh Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vasanthaganesh R Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasanthaganesh R | Full-Stack Developer",
    description: "I build at the intersection of code and craft — treating every product like a world worth inhabiting.",
    images: ["/og-image.jpg"],
    creator: "@vasanthaganesh",
  },
  alternates: {
    canonical: "https://vasanthaganesh.dev",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`
      ${bebasNeue.variable} 
      ${dmSerifDisplay.variable} 
      ${ibmPlexMono.variable} 
      ${spaceGrotesk.variable} 
      ${libreBaskerville.variable}
    `}>
      <head>
        {/* JSON-LD Structured Data for Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vasanthaganesh R",
              "url": "https://vasanthaganesh.dev",
              "jobTitle": "Full-Stack Developer",
              "homeLocation": {
                "@type": "Place",
                "name": "Puducherry, India"
              },
              "sameAs": [
                "https://github.com/vasanthaganesh",
                "https://www.linkedin.com/in/vasanthaganesh/"
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans text-paper bg-ink antialiased selection:bg-ember selection:text-paper min-h-screen flex flex-col">
        <a 
          href="#main-content" 
          className="skip-to-content absolute left-[-9999px] top-4 z-[100] bg-ember text-paper px-6 py-3 font-mono text-sm uppercase tracking-widest focus:left-4 transition-all"
        >
          Skip to content
        </a>

        <SmoothScroll>
          <main id="main-content">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
