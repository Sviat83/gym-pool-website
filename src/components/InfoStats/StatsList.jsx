import StatsItem from "./StatsItem"
import styles from './stats.module.css';

export default function StatsList({ items }) {
    return (
        <div className={styles.statsList}>
            {items.map((item, index) => (
                <StatsItem
                    key={index} 
                    title={item.title}
                    value={item.value} 
                    unit={item.unit}
                    description={item.description}
                />
            ))}
        </div>    
    );
};