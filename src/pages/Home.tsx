
import styles from "./Home.module.css";


const Home = () => {
  return (
    <>
      <section className={styles.details}>
        <img src="/src/assets/MANILA.png" alt="Manila" />
        <p className={styles.paragraph}>
          Welcome to Manila Runway Republic, the ultimate destination for young
          fashion enthusiasts! We are dedicated to nurturing the talents of
          aspiring models and creating high-quality events for kids and teens. Our
          platform offers a comprehensive range of opportunities, from
          professional photoshoots to dazzling fashion shows.
        </p>
        <img className={styles.runway} src="/src/assets/RUNWAY.png" alt="Runway" />

      </section>
      <section className={styles.images}>
        <img src="/src/assets/HomeImg1.png" alt="Home Image 1" />
        <img src="/src/assets/HomeImg2.png" alt="Home Image 2" />
        <img src="/src/assets/HomeImg3.png" alt="Home Image 3" />
        <img src="/src/assets/HomeImg4.png" alt="Home Image 4" />
      </section>
      <section className={styles.brands}>
        <h2>Brand Partners</h2>
        <div className={styles.brandLogos}>
          <img src="/src/assets/logos/AlicioThailand.jpg" alt="Alicio Thailand logo" />
          <img src="/src/assets/logos/Diesel.jpg" alt="Diesel logo" />
          <img src="/src/assets/logos/DKNY.jpg" alt="DKNY logo" />
        </div>
      </section>
    </>
  );
};

export default Home;

