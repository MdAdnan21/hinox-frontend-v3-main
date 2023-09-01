import React from 'react'
import styles from './Hero.module.css'
import VoteBtn from '../../Shared/VoteBtn/VoteBtn'
import uniswap from '../../../images/Logos/uniswap.svg'
import kucoin from '../../../images/Logos/kucoin.svg'
import bybit from '../../../images/Logos/bybit.svg'
import Lock from '../../../images/lock.svg'
import Rocket from '../../../images/rocket.svg'
import Cloud from '../../../images/cloud.svg'
import StatsCard from '../StatsCard/StatsCard'

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <img src={Cloud} className={styles.cloud} alt="" />
            <div className={`${styles.container} container`}>
                <img src={Rocket} className={styles.rocket_img} alt="" />
                <div className={styles.container_left}>
                    <h3>WELCOME TO </h3>
                    <h1>HiNOX ECOSYSTEM</h1>
                    <h5>{`Hinox is an innovative blockchain ecosystem delivering streamlined solutions and agile services aimed at seamless onboarding of both new and existing projects; helping them to defy gravity.`}</h5>
                    <div className={styles.btn_list}>
                        <VoteBtn text="Launchpad" textColor="#18332E" bgColor="#1DFE8E" />
                        <VoteBtn text="Buy $BST" textColor="#18332E" bgColor="#DDFFEF" />
                    </div>
                    <div className={styles.trading}>
                        <h5>Trading on:</h5>
                        <div>
                            <img src={uniswap} alt="uniswap" />
                            <img src={kucoin} alt="kucoin" />
                            <img src={bybit} alt="bybit" />
                        </div>
                    </div>
                </div>
                <div className={styles.container_right}>
                    <StatsCard icon={Lock} title={2000} desc="Unique Wallets locked $BST" />
                </div>
            </div>
        </div>
    )
}

export default Hero