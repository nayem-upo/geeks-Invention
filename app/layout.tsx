"use client"
import './globals.css'
import AOS from 'aos';
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
