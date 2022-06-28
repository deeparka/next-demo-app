import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next JS</title>
            </Head>
            <Link href="/about">About</Link>
            <h1>Konnichiwa</h1>
        </div>
    );
}
