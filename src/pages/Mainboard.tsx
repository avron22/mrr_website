import styles from "./Mainboard.module.css";

const Mainboard = () => {
    return (
        <>
        <div className={styles.wrapper}>
            <section className={styles.top}>
                <button className={styles.kidsBtn}>KIDS</button>
                <div className={styles.kidsGrid}>
                    <div className={styles.kidsTextLeft}>
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                    </div>

                    <div className={styles.photoWrapper}><img className={styles.kidsPhotos} src="./src/assets/K1.1.png" alt="Kid 1" /></div>
                    <div className={styles.photoWrapper}><img className={styles.kidsPhotos} src="./src/assets/K2.1.png" alt="Kid 2" /></div>
                    <div className={styles.photoWrapper}><img className={styles.kidsPhotos} src="./src/assets/K3.1.png" alt="Kid 3" /></div>
                    <div className={styles.photoWrapper}><img className={styles.kidsPhotos} src="./src/assets/K4.1.png" alt="Kid 4" /></div>

                    <div className={styles.kidsTextRight}>
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                        <img src="./src/assets/kidsText.png" alt="" />
                    </div>
                </div>

            </section>
            <section className={styles.center}>
                <h1>MANILA RUNWAY REPUBLIC MODELS</h1>
            </section>

            <section className={styles.bottom}>
                 <button className={styles.teensBtn}>TEENS</button>
                <div className={styles.teensGrid}>
                    <div className={styles.teensTextLeft}>
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                    </div>

                    <div className={styles.photoWrapper}><img className={styles.teensPhotos} src="./src/assets/T1.1.png" alt="Teen 1" /></div>
                    <div className={styles.photoWrapper}><img className={styles.teensPhotos} src="./src/assets/T2.1.png" alt="Teen 2" /></div>
                    <div className={styles.photoWrapper}><img className={styles.teensPhotos} src="./src/assets/T3.1.png" alt="Teen 3" /></div>
                    <div className={styles.photoWrapper}><img className={styles.teensPhotos} src="./src/assets/T4.1.png" alt="Teen 4" /></div>
                    
                    <div className={styles.teensTextRight}>
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                        <img src="./src/assets/teensText.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Mainboard;