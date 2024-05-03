import { FooterComponent } from "@/components/Footer ";
import "./globals.css";
import { NavbarComponent } from "@/components/Navbar ";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        {/* Navbar */}
        <NavbarComponent />
        {children}
        {/* footer */}
        <FooterComponent />
      </body>
    </html>
  );
}
