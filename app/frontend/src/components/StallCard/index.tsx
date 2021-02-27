import * as React from 'react';
import styles from './styles.module.css';

type RestaurantCardProps = { img: string; name: string; type: string };
function StallCard({ img, name, type }: RestaurantCardProps) {
	return (
		<div>
			<div>
				<img src={img} alt='Logo' className={styles.image} />
			</div>
			<div>
				<h3>{name}</h3>
			</div>
			<div>
				<p>{type}</p>
			</div>
		</div>
	);
}

export default StallCard;
