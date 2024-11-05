"use client";
import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import { SdkTester } from "./components/SdkTester";

export default dynamic(
  async function Home() {
    const stuff = await import("@zetamarkets/zetax-sdk");
    const exchangeConnection = new stuff.ExchangeConnection(
      "https://sov-rollup-test.zeta.markets/"
    );
    exchangeConnection
      .getUserAccountAddresses()
      .then((res) => console.log(res));

    return function PageComponentLoaded() {
      return (
        <div className={styles.page}>
          <main className={styles.main}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <SdkTester />
          </main>
        </div>
      );
    };
  },
  {
    ssr: false,
    loading: () => <p>LOADING WASMs</p>,
  }
);
