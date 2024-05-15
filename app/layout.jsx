
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Ajith Chakkdath",
  description: "Expert MERN stack developer in Thrissur, Kerala, specializing in responsive web development with React and Next.js. Offering custom solutions for e-commerce sites, portfolio websites, and company landing pages. Elevate your online presence; contact me today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme = 'light'>
        <Header />
        {children}
      <Footer />
        </ThemeProvider>
       
        </body>
    </html>
  );
}
