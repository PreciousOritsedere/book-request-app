import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export const metadata = {
  title: "Library Management",
  description: "Manage book requests efficiently",
  keywords: "library, book requests, librarian, student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto p-4">
          {children}
        </div>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
