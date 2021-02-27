import * as React from 'react';
import MenuItem from '../../components/MenuItem';
import styles from './styles.module.css';

type MenuContainerProps = { items: React.ReactElement<typeof MenuItem>[] };
function MenuContainer({ items }: MenuContainerProps) {
	return (
		<>
			<div>
				<ul className={styles.gallery}>
					{items.map((value) => {
						return <li className={styles.displayMenuItem}>{value}</li>;
					})}
				</ul>
			</div>
		</>
	);
}

export default MenuContainer;
