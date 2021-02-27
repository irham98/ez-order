import * as React from 'react';
import MenuContainer from '../../containers/MenuContainer';
import MenuItem from '../../components/MenuItem';
import menuJSON from './menu';
import styles from './styles.module.css';

type GeneratingMenuProps = { itemList: { icon?: string; name: string; price: number }[] };
function generatingMenu({ itemList }: GeneratingMenuProps) {
	let menuList: React.ReactElement<typeof MenuItem>[] = [];
	console.log(`Item list is ${itemList}`);
	itemList.forEach((item) => {
		menuList.push(
			<MenuItem
				icon={item.icon ? item.icon : undefined}
				name={item.name}
				price={item.price}
			/>,
		);
	});
	return <MenuContainer items={menuList} />;
}

type MenuProps = { menu: { items: any } };
function MenuPage({ menu }: MenuProps) {
	menu = menuJSON;

	return (
		<>
			<div className={styles.menu}>
				{Object.keys(menu['items']).map((key) => {
					console.log(menu['items'][`${key}`]);
					return (
						<>
							<div>
								<h3 className={styles.category}>{`${key
									.charAt(0)
									.toUpperCase()}${key.slice(1)}`}</h3>
							</div>
							<div>{generatingMenu({ itemList: menu['items'][`${key}`] })}</div>
						</>
					);
				})}
			</div>
		</>
	);
}

export default MenuPage;
