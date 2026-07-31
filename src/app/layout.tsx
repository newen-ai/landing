import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Newen | Consultoría y desarrollo de software",
  description:
    "Consultoria empresarial, desarrollo de software, ERP e integracion de inteligencia artificial.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Newen | Consultoría y desarrollo de software",
    description:
      "Consultoria empresarial, desarrollo de software, ERP e integracion de inteligencia artificial.",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newen | Consultoría y desarrollo de software",
    description:
      "Consultoria empresarial, desarrollo de software, ERP e integracion de inteligencia artificial.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
