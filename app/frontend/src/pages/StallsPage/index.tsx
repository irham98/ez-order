import * as React from 'react';
import StallContainer from '../../containers/StallContainer';
import StallCard from '../../components/StallCard';
import styles from './styles.module.css';

function StallsPage() {
	let cards: React.ReactElement<typeof StallCard>[] = [
		<StallCard
			img='https://assets.grab.com/wp-content/uploads/sites/4/2019/01/22145755/cropped-mcdonalds-delivery-online.jpg'
			name="McDonald's"
			type='Burger, Western, Halal'
		/>,
		<StallCard
			img='https://www.misstamchiak.com/wp-content/uploads/2019/08/DSCF6532-1300x867.jpg'
			name='Mala Xiang Guo'
			type='Chinese'
		/>,
		<StallCard
			img='https://ayampenyetria.com/wp-content/uploads/2019/01/chickenn.png'
			name='Ayam Penyet'
			type='Malay, Halal'
		/>,
		<StallCard
			img='https://www.packagingdigest.com/sites/packagingdigest.com/files/styles/article_featured_retina/public/AdobeStock_279692163_Editorial_Use_Only-Beverage-FTR-new.jpg?itok=moSeFM8n'
			name='Cooler Master'
			type='Beverage'
		/>,
		<StallCard
			img='https://cdn.vox-cdn.com/thumbor/fWdJKI_dirNSL2bBWVVWVW_I4-Q=/0x0:7360x4912/1200x800/filters:focal(3092x1868:4268x3044)/cdn.vox-cdn.com/uploads/chorus_image/image/67000785/shutterstock_1435374326.0.jpg'
			name='Anjana Kitchen'
			type='Indian, Halal'
		/>,
		<StallCard
			img='https://cdn.foodadvisor.com.sg/3/800/ycqwu/vt-iw/BX/n5db-xuhe.zfw/wang-caifan-serangoon.jpg'
			name='Teck Ee Caifan'
			type='Chinese'
		/>,
	];

	return (
		<>
			<div className={styles.heading}>
				<h1>
					{' '}
					Available Restaurants in <span>Hawker Center</span>
				</h1>
			</div>
			<div>
				<StallContainer cards={cards} />
			</div>
		</>
	);
}

export default StallsPage;
