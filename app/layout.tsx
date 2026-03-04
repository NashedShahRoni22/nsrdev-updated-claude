import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "NSRDEV",
  description: "NSR DEV is a leading software development company specializing in crafting innovative digital solutions. With a team of skilled developers, designers, and strategists, we transform ideas into exceptional digital experiences. We offer a wide range of services including web development, mobile app development, UI/UX design, and custom software solutions. Our mission is to drive business growth and engage audiences worldwide through cutting-edge technology and creative design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>      
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
