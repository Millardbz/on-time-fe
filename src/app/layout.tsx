import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          <main className="px-20 bg-gray-100">{children}</main>
          <Footer className="footer" />
        </div>
      </body>
    </html>
  );
}
