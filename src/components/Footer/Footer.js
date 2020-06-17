import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <ul className={s.navItems}>
                    <li className={s.list}>
                        <a className={s.linkItems} href="/">
                            ABOUT
                        </a>
                    </li>
                    <li className={s.list}>
                        <a className={s.linkItems} href="/">
                            HELP
                        </a>
                    </li>
                    <li className={s.list}>
                        <a className={s.linkItems} href="/">
                            PRESS
                        </a>
                    </li>
                    <li className={s.list}>
                        <a className={s.linkItems} href="/">
                            API
                        </a>
                    </li>
                    <li className={s.list}>
                        <a className={s.linkItems} href="/">
                            JOBS
                        </a>
                    </li>
                    <li className={s.list}>
                        <a className={s.linkItems} href="/">
                            PRIVACY
                        </a>
                    </li>
                    <li className={s.list}>
                        <a className={s.linkItems} href="/">
                            TERMS
                        </a>
                    </li>
                    <li className={s.list}>
                        <a className={s.linkItems} href="/">
                            LOCATIONS
                        </a>
                    </li>
                    <li className={s.list}>
                        <a className={s.linkItems} href="/">
                            TOP ACCOUNTS
                        </a>
                    </li>
                    <li className={s.list}>
                        <a className={s.linkItems} href="/">
                            HASHTAGS
                        </a>
                    </li>
                    <li className={s.list}>
                        <a className={s.linkItems} href="/">
                            LANGUAGE
                        </a>
                    </li>
                </ul>
                <span className={s.copyright}>© 2020 Instagram from Facebook</span>
            </div>
        </footer>
    );
};

export default Footer;
