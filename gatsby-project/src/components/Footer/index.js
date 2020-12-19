import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
    <footer className={styles.footer}>
        <ul className={styles.info}>
            <li className={styles.contact}>
                Kontakt:
            </li>
            <li className={styles.phone}>
            <FontAwesomeIcon icon={faPhoneAlt} className={styles.phoneIcon}/>
                021 556 728
            </li>
            <li className={styles.email}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.envelopeIcon}/>
                eflower@gmail.com
            </li>
            <li className={styles.address}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.pinIcon}/>
                Vukovarska 8
            </li>
            <li className={styles.workinghours}>
                Radno vrijeme: 8:00-17:00
            </li>
        </ul>

        <ul className={styles.copyright}>
            eFlower d.o.o. 2020
        </ul>

        <ul className={styles.payment}>
            <li className={styles.waysofpaying}>
                Načini plaćanja:
            </li>
            <li className={styles.cash}>
                Pouzećem
            </li>
            <li className={styles.creditcards}>
                Karticom
            </li>

        </ul>
    </footer>
)

export default Footer