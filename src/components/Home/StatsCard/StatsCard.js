import React from 'react'
import styles from './StatsCard.module.css'

const StatsCard = ({icon, title, desc}) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={icon} alt="" />
                </div>
                <div className={styles.content}>
                    <h5>{title}</h5>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default StatsCard