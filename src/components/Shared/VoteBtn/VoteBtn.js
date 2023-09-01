import styles from './VoteBtn.module.css'

const VoteBtn = ({ text, bgColor, textColor }) => {
    return (
        <>
            <button className={styles.button} style={{ backgroundColor: bgColor, color: textColor }}>
                {text}
            </button>
        </>
    )
}

export default VoteBtn