import * as React from 'react';
import styles from './styles.module.css';

type MenuItemProps = { icon?: string; name: string; price: number };
function MenuItem({ icon, name, price }: MenuItemProps) {
	return (
		<>
			<div>
				{icon ? (
					<div>
						<img src={icon} alt='Icon' className={styles.icon} />
					</div>
				) : null}
				<div>
					<p>{name}</p>
					<h3>{price}</h3>
				</div>
			</div>
		</>
	);
}

export default MenuItem;
