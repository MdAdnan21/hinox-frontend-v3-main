import React from 'react'
import { walletVesting } from '../../../../images/images'
import styles from './InvalidWallet.module.css'

const InvalidWallet = () => {
    return (
        <>
            <div className={styles.wallet}>
                <img src={walletVesting} alt='walletVesting' />
                <h1>Wallet Not Connected</h1>
                <h4>You need to Connect your wallet in order to see  your Vested Allocations</h4>
                <button className={styles.btn}>Connect Wallet</button>
            </div>
        </>
    )
}

export default InvalidWallet
