import * as React from 'react';
import StallCard from '../../components/StallCard';
import styles from './styles.module.css';

type StallContainerProps = { cards: React.ReactElement<typeof StallCard>[] };
function StallContainer({ cards }: StallContainerProps) {
	return (
		<div>
			<ul className={styles.gallery}>
				{cards.map((value) => {
					return <li className={styles.displayListItem}>{value}</li>;
				})}
			</ul>
		</div>
	);
}

export default StallContainer;
