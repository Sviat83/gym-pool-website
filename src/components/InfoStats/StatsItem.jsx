import CounterOnScroll from "./CounterOnScroll";
import styles from './stats.module.css';

const StatsItem = ({ title, value, unit, description }) => (
    <div className={styles.statsItem}>
        <h3 className={styles.statsTitle}>{title}</h3>
        <h4 className={styles.statsNumber}>
            <CounterOnScroll value={Number(value)}/>{unit}
        </h4>    
        <p className={styles.statsText}>{description}</p>
    </div>
)
export default StatsItem;