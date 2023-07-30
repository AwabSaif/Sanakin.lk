import { useState } from 'react'
import styles from './Navbar.module.css';
import Button from '../Button/Button';
import logoImg from '../../assets/image/sanakilogo 1.png'



function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    const removeActive = () => {
        setIsActive(false)
    }


    return (
      
      


                <nav className={`${styles.navbar}`}>

                    {/* logo */}
                    <div className={`${styles.logorow}`}>

                        <a href='#home'>
                            <img src={logoImg} alt="logo"  className={`${styles.logo}`} />
                        </a>
                    </div>

                    <form className={`${styles.navsearch}`}>
                        <input className={`${styles.navinput}`} type="search" placeholder="Search Here Shop or Product" />
                        <Button size='nav_search' variant='primary' className={`${styles.navbtnse}`}>
                            Search
                        </Button>
                    </form>


                    <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>Home</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>Shop Online</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>What's New</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>Contact</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>About us</a>
                        </li>
                        <li onClick={removeActive}>
                            <div className={`${styles.navbtn}`}>
                                <Button size='sm' variant='primary' >Log in</Button>
                            </div>
                        </li>
                        <li onClick={removeActive}>
                            <div >
                                <Button size='sm' variant='secondary' >Sign in</Button>
                            </div>
                        </li>
                    </ul>


                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                    </div>
                </nav>

    
      
    );
}


export default Navbar;

;