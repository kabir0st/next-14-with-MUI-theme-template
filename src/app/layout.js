'use client'
import localFont from "next/font/local";
import { AppBar, Toolbar, Typography, Container, ThemeProvider } from "@mui/material";
import { useState } from "react";
import NavBar from "@/globalComponents/navBar";
import theme from "@/theme"; // Assuming this is where the MUI theme is imported
import "./globals.css";

// Import local fonts
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


export default function RootLayout({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleTheme = () => setDarkMode(!isDarkMode);

  return (
    <html lang="en">
      <ThemeProvider theme={theme(isDarkMode)}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased ${isDarkMode ? "dark" : ""
            }`}
        >
          {/* AppBar with glassmorphism */}
          <AppBar position="sticky" className="bg-glass-light dark:bg-glass-dark backdrop-filter backdrop-blur rounded-xl shadow-glass">
            <Toolbar>
              <NavBar />
              <Typography variant="h6" className="ml-4 text-light-text dark:text-dark-text">
                Frames NP
              </Typography>
            </Toolbar>
          </AppBar>

          {/* Main Content */}
          <main className="min-h-screen py-10 bg-light-background dark:bg-dark-background">
            <Container>{children}</Container>
          </main>

          {/* Footer */}
          <footer className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text py-4">
            <Container>
              <Typography variant="body2" className="text-center">
                © {new Date().getFullYear()} Frames NP. All rights reserved.
              </Typography>
            </Container>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
