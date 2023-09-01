import React from 'react'
import styles from './Stats.module.css'
import StatsCard from '../StatsCard/StatsCard'
import funded_projects from '../../../images/funded_projects.svg'
import funds from '../../../images/funds.svg'
import ROI from '../../../images/ROI.svg'

const stats = [
    {
        id: 1,
        title: 248,
        desc: "Funded Projects",
        icon: funded_projects
    },
    {
        id: 2,
        title: "$2,000,000",
        desc: "Raised on Hinox",
        icon: funds
    },
    {
        id: 3,
        title: "200x",
        desc: "Average ATH ROI ",
        icon: ROI
    }
]

const Stats = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={`${styles.container} container`}>
                    {
                        stats.map((stats, i) => (
                            <StatsCard key={i} icon={stats.icon} title={stats.title} desc={stats.desc} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Stats