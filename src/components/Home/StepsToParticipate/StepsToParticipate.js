import React from 'react'
import styles from './StepsToParticipate.module.css'
import buy from '../../../images/Icons/buy.svg';
import lock_time from '../../../images/Icons/lock_time.svg';
import wallet_profile from '../../../images/Icons/wallet_profile.svg';
import wallet_token from '../../../images/Icons/wallet_token.svg';

const steps = [
    {
        id: 1,
        icon: buy,
        desc: "Buy  and hold Bullshark token",
        btn_content: "Buy $BST"
    },
    {
        id: 2,
        icon: lock_time,
        desc: " Lock your $BST token to qualify to register",
        btn_content: "Go to Staking"
    },
    {
        id: 3,
        icon: wallet_profile,
        desc: "Complete the registration process",
        btn_content: "upcoming Sales"
    },
    {
        id: 4,
        icon: wallet_token,
        desc: "Purchase  and claim your token.",
        btn_content: "Go to Vesting"
    },
]

const StepsToParticipate = () => {
    return (
        <>
            <section className={styles.wrapper}>
                <div className={`${styles.container} container`}>
                    <h4>Steps to participate in Sales</h4>
                    <div className={styles.steps}>
                        {
                            steps.map((step) => (
                                <div className={styles.steps_wrapper} key={step.id}>
                                    <div className={styles.background}></div>
                                    <div className={styles.header}>
                                        <h3>{step.id}</h3>
                                        <div className={styles.icons}>
                                            <img src={step.icon} alt="buy" />
                                        </div>
                                    </div>
                                    <p>{step.desc}</p>
                                    <button className="btn_primary">{step.btn_content}</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default StepsToParticipate