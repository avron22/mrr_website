import styles from "./Infocus.module.css";

const Infocus = () => {
    return(
        <>

        <div className={styles.wrapper}>
            <img className={styles.infocusImg} src="/src/assets/infocus.png" alt="" />

            <section className={styles.runwayModels}>
                <h1>Runway Models</h1>
                <div className={styles.runwayModelsGrid}>
                    <div className={styles.row1}>
                        <div className={styles.runwayModelsItem}>
                            <img src="./src/assets/Artboard-1.png" alt="" />
                        </div>
                        <div className={styles.runwayModelsItem}>
                            <img src="./src/assets/Artboard-2.png" alt="" />
                        </div>
                        <div className={styles.runwayModelsItem}>
                            <img src="./src/assets/Artboard-3.png" alt="" />
                        </div>
                        <div className={styles.runwayModelsItem}>
                            <img src="./src/assets/Artboard-4.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.runwayModelsItem}>
                            <img src="./src/assets/Artboard-5.png" alt="" />
                        </div>
                        <div className={styles.runwayModelsItem}>
                            <img src="./src/assets/Artboard-6.png" alt="" />
                        </div>
                        <div className={styles.runwayModelsItem}>
                            <img src="./src/assets/Artboard-7.png" alt="" />
                        </div>
                        <div className={styles.runwayModelsItem}>
                            <p>Become part of a vibrant community celebrating youth, talent, and fashion.</p>
                            <div className={styles.buttonContainer}>
                                <div className={styles.buttonWrapper}>
                                    <button><span>Contact Us</span></button>
                                    <img className={styles.icon} src="./src/assets/Icon-weather-stars.svg" alt="" />
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.performers}>
                <h1>Performers</h1>
                <p>Showcase your talents and be known. Here are our Model / Performers from The Voice Kids.</p>
                <div className={styles.performersGrid}>
                    <div className={styles.performersImageWrapper}>
                        <img src="./src/assets/Performer-1.jpg" alt="Performer 1" />
                    </div>
                    <div className={styles.performersImageWrapper}>
                        <img src="./src/assets/Performer-2.jpg" alt="Performer 2" />
                    </div>
                    <div className={styles.performersImageWrapper}>
                        <img src="./src/assets/Performer-3.jpg" alt="Performer 3" />
                    </div>
                </div>
            </section>

        </div>

        </>
    );
};

export default Infocus;