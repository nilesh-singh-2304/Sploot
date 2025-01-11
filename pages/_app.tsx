import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
   <>
     <Navbar />
     <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    /><Component {...pageProps} />
   </>);
}
