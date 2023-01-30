import styles from "../styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Sidebar } from "./Sidebar"
import Closeicon from "@mui/icons-material/Close"
import { Fade } from "react-reveal"

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)


  const ToggleSidebar = () => setSidebar(!sidebar)

  const [scrollY, setScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    // 
  }, [])
  return (
    <>
      <div >
        <nav className={styles.navbar}>
          <div className={scrollY >= 100 ? `${styles.Navs} ${styles.white} ` : styles.Navs}   >

            <Link href={"/"}>

              <Image width={100} height={100} src="/images/logo.svg" alt="error img" loading="lazy" className={styles.teslaLogo} />

            </Link>

            <ul className={styles.NavbarNav} >

              <li className={styles.items} >
                <a className={styles.itemsLink} href="#"  >
                  Model S
                </a>
              </li>


              <li className={styles.items} >
                <a className={styles.itemsLink} href="#"  >
                  Model 3
                </a>
              </li>


              <li className={styles.items} >
                <a className={styles.itemsLink} href="#"  >
                  Model X
                </a>
              </li>


              <li className={styles.items} >
                <a className={styles.itemsLink} href="#"  >
                  Model Y
                </a>
              </li>


              <li className={styles.items} >
                <a className={styles.itemsLink} href="#"  >
                  Solor Roof
                </a>
              </li>

              <li className={styles.items} >
                <a className={styles.itemsLink} href="#"  >
                  Solor Panels
                </a>
              </li>


            </ul>

            <div className={styles.menu}>
              <li className={styles.items} >
                <a className={styles.itemsLink} href="#"  >
                  Shop
                </a>
              </li>
              <li className={styles.items} >

                <Link className={styles.itemsLink} href={"/account"} >
                  Account

                </Link>


              </li>
              <li className={styles.items} onClick={ToggleSidebar} >
                <a className={styles.itemsLink}  >
                  Menu
                </a>
              </li>

            </div>

          </div>
          <div className={sidebar ? "side_menu active" : "side_menu"}  >
            <Closeicon className={styles.closeIcon} onClick={ToggleSidebar} />
            <div className={styles.sidepasition}
            >
              <ul>
                {Sidebar.map(Link => (
                  <>

                    <li className={styles.sidebar_li} key={Link.id} >
                      <Fade left cascade>
                        <a href="#" >{Link.title}</a>
                      </Fade>
                    </li>

                  </>

                ))}

              </ul>

            </div>

          </div>
        </nav>

      </div>

    </>
  )
}
