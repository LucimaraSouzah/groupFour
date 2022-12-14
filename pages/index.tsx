import type { NextPage } from "next";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HomePage />
    </div>
  );
};

export default Home;
