import * as React from 'react';
import StallCard from '../../components/StallCard';
import styles from './styles.module.css';
import { useRouteMatch, Link } from 'react-router-dom';

type StallContainerProps = { cards: React.ReactElement<typeof StallCard>[] };
function StallContainer({ cards }: StallContainerProps) {
	//let url = useRouteMatch();
	return (
		<div>
			<ul className={styles.gallery}>
				{cards.map((value) => {
					return (
						<li className={styles.displayListItem}>
							<Link
								to={`/menu/${value.props.name}`}
								style={{ textDecoration: 'none', color: 'black' }}
							>
								{value}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default StallContainer;
