import React from 'react'

import styles from './Footer.module.css' 

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                <span>Cadastro de Clientes</span>@Barbudos
            </p>
        </footer>
    );
}

export default Footer;