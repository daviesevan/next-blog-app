import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CartegoryList from "@/components/categoryList/CartegoryList";
import CardList from "@/components/CardList/CardList";

export default function Home() {
  return <div className={styles.container}>
    <Featured />
    <CartegoryList />
    <div className={styles.content}>
      <CardList />

    </div>
  </div>;
}
