import Image from "next/image";
import styles from "@/app/Home.module.css";
import './globals.css';
import Navbar from "@/components/Navbar/Navbar";
import MainContent from "@/components/LandingPage/MainContent/MainContent";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}
