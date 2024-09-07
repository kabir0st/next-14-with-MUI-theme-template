import localFont from "next/font/local";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import "./globals.css";
import NavBar from "@/globalComponents/navBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Frames NP",
  description: "Get your frames here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Main Content */}
        <main className="min-h-screen py-10 bg-gray-100">
          <Container>{children}</Container>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4">
          <Container>
            <Typography variant="body2" className="text-center">
              © {new Date().getFullYear()} Frames NP. All rights reserved.
            </Typography>
          </Container>
        </footer>
      </body>
    </html>
  );
}
