import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "UniBiz",
  description:
    "Unibiz adalah aplikasi inovatif yang dirancang untuk mendukung pengelolaan unit bisnis Universitas Udayana secara efisien dan transparan dalam transisi menuju PTN BH. Dengan fitur utama seperti pemantauan kinerja, pengelolaan keuangan, dan alur persetujuan digital, Unibiz memberikan kemudahan dalam mengoptimalkan unit bisnis yang sudah ada serta mendukung pengembangan bisnis baru. Melalui dashboard real-time, pengelola kampus dapat mengakses laporan keuangan, grafik pemasukan, dan indikator kinerja untuk memastikan pengelolaan bisnis berjalan sesuai regulasi dan mendukung kemandirian finansial universitas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
