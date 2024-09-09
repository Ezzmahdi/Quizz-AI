import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from "next-auth/react";
import Header from "@/components/ui/header";

import { Sidebar } from '@/components/sidebar';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quizz Ai',
  description: 'Generate Quizzes And Study Faster Using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <SessionProvider>
       <Sidebar />
        <body className="dark mx-5 mt-16 sm:ml-[300px] sm:mt-3">
          <Header />
          {children}
        </body>
      </SessionProvider>
    </html>
  )
}
