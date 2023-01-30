import { Fade } from "react-reveal"
import styles from "../styles/Home.module.css"
export default function Accessories() {
    return (
        <>
            <section className={styles.section}>

                <div className={styles.TextsArea} >

                <Fade bottom>
                <h3>Accessories</h3>

                </Fade>

                </div>
                <div classsName={styles.buttons}>
                    <div className={styles.btnMain} >

                      <Fade bottom>
                      <a href="#" className={styles.btn}  >
                            Shop Now

                        </a>
                      </Fade>
                      

                    </div>
                 
                </div>
            
            </section>

        </>
    )
}
