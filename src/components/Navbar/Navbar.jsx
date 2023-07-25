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
        <div className="App">
            <header className="App-header">


                <nav className={`${styles.navbar}`}>

                    {/* logo */}
                    <div className={`${styles.logorow}`}>

                    <a href='#home' className={`${styles.logo}`}>
                        <img src={logoImg} alt="logo" className="logo" />
                    </a>
                    </div>


        

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


            </header>
        </div>
    );
}


export default Navbar;

;