import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Side from "../../components/Side";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return(
    <>
        <Header/>
       
 <div className={`max-w-5xl mx-auto py-8 md:flex ${isHome ? "justify-center":"justify-between gap-4"}`}>
  <div className={`w-full px-4 ${isHome ? "w-full":"justify-between gap-4"} `}>
    <Component {...pageProps} />
    </div>
    {!isHome && <Side />}
 </div>

    </>
    );
}
