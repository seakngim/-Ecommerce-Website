import { FooterComponent } from "@/components/Footer ";
import "../globals.css";
import { NavbarComponent } from "@/components/Navbar ";
import { inter, localCustomFont, suwannaphum } from "./fonts";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${suwannaphum.variable} ${inter.variable} ${localCustomFont.variable}`}
      >
        {/* Navbar */}
        <NavbarComponent />
        <main>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        {/* footer */}
        <FooterComponent />
      </body>
    </html>
  );
}
