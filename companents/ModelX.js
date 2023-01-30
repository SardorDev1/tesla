import { Fade } from "react-reveal"
import styles from "../styles/Home.module.css"
export default function ModelX() {
    return (
        <>
            <section className={styles.section}>

                <div className={styles.TextsArea} >

                  <Fade bottom  >
                  <h3>Model X</h3>
                  </Fade>
                  <Fade bottom >
                    <p>Order online for <span className={styles.touchless}  > Touchless delivery</span></p>
                    </Fade>
                </div>
                <div classsName={styles.buttons}>
                    <div className={styles.btnMain} >
                    <Fade bottom >
                        <a href="#" className={styles.btn}  >
                            custom Order
                        
                        </a>
                        </Fade>

                        <Fade bottom >
                        <a href="#" className={styles.btn}  >
                            existing inventory

                        </a>
                        </Fade>
                    </div>

                </div>
            
            </section>

        </>
    )
}
