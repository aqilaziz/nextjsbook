import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aqil Aziz Latihan Website Nextjs",
  description: "Tutorial Web Programming",
  keywords: "ini adalah keyword untuk pemula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar bg-base-100 ">
          <div className="flex-1">
            <Link href="/visi" className="btn btn-ghost normal-case text-xl">
              Pondok Pesantren Karangasem Paciran
            </Link>
            <div>
              <ul className="menu menu-horizontal bg-base-200">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/about/contact">Kontak</Link>
                </li>
                <li>
                  <Link href="/about/contact/greg">Greg</Link>
                </li>
                <li>
                  <Link href="/githubuser">GitHubUser</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
