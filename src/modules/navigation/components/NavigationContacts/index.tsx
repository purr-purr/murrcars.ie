import {useState} from 'react';

import Link from 'next/link';
import IconMap from '@icons/components/IconMap';
import IconPhone from '@icons/components/IconPhone';

import Button from '@modules/common/components/Button';
import FeedbackModal from '@modules/feedback/components/FeedbackModal';

import {useMediaQuery} from '@hooks/index';
import {
	CATALOG_NAME,
	LAPTOP_BREAKPOINT,
	TABLET_BREAKPOINT,
} from '@utils/const';
import {COMPANY_INFO} from '@utils/data';

import s from './NavigationContacts.module.scss';

const NavigationContacts = () => {

	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);

	const [isFeedbackModal, setIsFeedbackModal] = useState(false);

	const handleLeaveRequest = () => {
		setIsFeedbackModal(true);
	};

	return (
		<article className={s.container} onClick={(e) => e.stopPropagation()}>
			<Link className={s.icon} href={`tel:${COMPANY_INFO.MAIN_CONTACT_NUMBER}`}>
				<IconPhone/>
			</Link>

			{(!isLaptop || isTablet) && (
				<Link className={s.icon} href={`${COMPANY_INFO.ADDRESS_MAP}`}>
					<IconMap/>
				</Link>
			)}

			{!isLaptop && !isTablet && (
				<Button
					type="link"
					linkPath={`/${CATALOG_NAME}`}
					color="transparent"
					text="Find a car"
				/>
			)}

			<Button
				onClick={handleLeaveRequest}
				text="Call me Back"
			/>

			{isFeedbackModal && (
				<FeedbackModal onClick={() => setIsFeedbackModal(false)}/>
			)}
		</article>
	);
};

export default NavigationContacts;
