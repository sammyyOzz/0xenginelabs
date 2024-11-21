import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/navbar";
import Container from "@/components/ui/container";
import { Box } from "@chakra-ui/react";
import { Open_Sans } from 'next/font/google'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "0x Engine Labs",
  description: "0x Engine Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={openSans.className}>
        <Provider>
          <Box bg="#000000" pb={20}>
            <Container>
              <Navbar />
            </Container>
          </Box>
          {children}
        </Provider>
      </body>
    </html>
  );
}
