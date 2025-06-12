import {useState} from 'react';

import Image from 'next/image';

import BlockTitle from '@modules/common/components/BlockTitle';
import InnerLink from '@modules/common/components/InnerLink';

import {useMediaQuery} from '@hooks/index';
import {TABLET_BREAKPOINT} from '@utils/const';

import CLOCK_IMG from './assets/clock.svg';

import s from './HomeAdvantages.module.scss';

const HomeAdvantages = () => {
	const [isFullList, setIsFullList] = useState(false);
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);

	const ADVANTAGES_LIST = [
		'A_TEAM_OF_SPECIALISTS',
		'ORGANIZATION_AND_CONDUCT',
		'WE_ARE_READY_TO_PROVIDE',
		'SPECIALISTS_IN_THE_FIELD',
		'INDIVIDUAL_APPROACH',
	];

	const getImagePath = (value: string) => {
		return require(`./assets/${value.toLowerCase()}.jpg`).default;
	};

	const handleAllRealEstateButtonClick = () => {
		setIsFullList(true);
	};

	const sliceAdvantagesList = isFullList
		? ADVANTAGES_LIST
		: ADVANTAGES_LIST.slice(0, 3);

	const getAdvantagesList = isTablet ? sliceAdvantagesList : ADVANTAGES_LIST;

	return (
		<section className={s.container}>
			<BlockTitle title={('ADVANTAGES_OF_THE_COMPANY')}/>
			<ul className={s.list}>
				<li className={s.techSupport}>
					<p>{('TECHNICAL_CUSTOMER_SUPPORT')}</p>
					<span>24/7</span>
					<Image className={s.clock} src={CLOCK_IMG} alt="Clock Image"/>
				</li>
				{getAdvantagesList.map((item) => (
					<li key={item} className={s.item}>
						<Image src={getImagePath(item)} alt="Item Image"/>
						<p>{item}</p>
					</li>
				))}
			</ul>

			{isTablet && !isFullList && (
				<InnerLink
					className={s.allRealEstateButton}
					onClick={handleAllRealEstateButtonClick}
					text={('ALL_ADVANTAGES')}
				/>
			)}
		</section>
	);
};

export default HomeAdvantages;
