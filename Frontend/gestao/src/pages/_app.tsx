import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "@/styles//header.module.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
