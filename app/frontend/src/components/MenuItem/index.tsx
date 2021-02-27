import * as React from 'react';
import styles from './styles.module.css';

type MenuItemProps = { icon?: string; name: string; price: number };
function MenuItem({ icon, name, price }: MenuItemProps) {
	return (
		<>
			<div className={styles.menuItem}>
				{icon ? (
					<div className={styles.icon}>
						<img src={icon} alt='Icon' className={styles.iconImage} />
					</div>
				) : null}
				<div className={styles.description}>
					<p>{name}</p>
					<h4>{price}</h4>
				</div>
			</div>
		</>
	);
}

export default MenuItem;
