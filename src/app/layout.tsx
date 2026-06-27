import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';

const fira = Fira_Code({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Casey McGrath | Risk & Financial Software Engineer',
  description:
    'Portfolio for Casey McGrath, a risk manager turned software engineer building financial, operational-risk, and data tools.',
  keywords: [
    'Casey McGrath',
    'software engineer',
    'risk management',
    'financial technology',
    'portfolio',
  ],
  openGraph: {
    title: 'Casey McGrath | Risk & Financial Software Engineer',
    description:
      'Risk manager turned software engineer building financial, operational-risk, and data tools.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  );
}
