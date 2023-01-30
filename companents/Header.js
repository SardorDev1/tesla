import { Fade } from "react-reveal"
import styles from "../styles/Home.module.css"
export default function Header() {
    return (
        <>
            <section className={styles.section}>

                <div className={styles.TextsArea} >

                    <Fade bottom  >
                        <h3>Model Y</h3>
                    </Fade>
                    <Fade bottom >
                        <p>Order online for <span className={styles.touchless}  > Touchless delivery</span></p>
                    </Fade>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.btnMain} >
                        <Fade bottom cascade >
                            <a href="#" className={styles.btn}  >
                                custom Order

                            </a>



                            <a href="#" className={styles.btn}  >
                                existing inventory

                            </a>
                        </Fade>
                    </div>
                    <img src="/images/down-arrow.svg" loading="lazy" className={styles.downicon} alt="Down Icon" />

                </div>

            </section>

        </>
    )
}
