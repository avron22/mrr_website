import styles from "./Mainboard.module.css";

const Mainboard = () => {
    return (
        <>
        <div className={styles.wrapper}>
            <section className={styles.top}>
                <div className={styles.kidsGrid}>
                    <img className={styles.grayscale} src="./src/assets/K1.1.png" alt="Kid 1" />
                    <img className={styles.grayscale} src="./src/assets/K2.1.png" alt="Kid 2" />
                    <img className={styles.grayscale} src="./src/assets/K3.1.png" alt="Kid 3" />
                    <img className={styles.grayscale} src="./src/assets/K4.1.png" alt="Kid 4" />
                </div>
            </section>
            <section className={styles.center}>
                <h1>MANILA RUNWAY REPUBLIC MODELS</h1>
            </section>

            <section className={styles.bottom}>
                <div className={styles.teensGrid}>
                    <img className={styles.grayscale} src="./src/assets/T1.1.png" alt="Teen 1" />
                    <img className={styles.grayscale} src="./src/assets/T2.1.png" alt="Teen 2" />
                    <img className={styles.grayscale} src="./src/assets/T3.1.png" alt="Teen 3" />
                    <img className={styles.grayscale} src="./src/assets/T4.1.png" alt="Teen 4" />
                </div>
            </section>
        </div>
        </>
    );
};

export default Mainboard;