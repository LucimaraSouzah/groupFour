import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Bem vindo ao projeto em grupo!</h1>

        <p className={styles.description}>
          Agora analisem o arquivo index.tsx na pasta pages
        </p>

        <div className={styles.grid}>
          <p className={styles.card}>
            <span>Encontre o erro &rarr;</span>
            Existe um erro neste arquivo. Veja que este bloco aparece diferente
            na tela.
          </p>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Crie um repositório &rarr;</h2>
            <p>Após concluir o trabalho suba o código no github do grupo</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Evite componentes demais &rarr;</h2>
            <p>Crie somente componentes essenciais.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Trabalho em grupo &rarr;</h2>
            <p>Ajude para que todos do grupo participe, envolva-se.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
