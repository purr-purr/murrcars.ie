import Image from 'next/image';

import Loader from '@modules/common/components/Loader';

import {useMediaQuery} from '@hooks/index';
import {MOBILE_BREAKPOINT} from '@utils/const';

import FIRST_BUILDING from './assets/first.png';
import MOBILE_BUILDING from './assets/mobile-background.png';
import SECOND_BUILDING from './assets/second.png';
import THIRD_BUILDING from './assets/third.png';

import s from './HomeIntro.module.scss';

const HomeIntro = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const buildingText = ('BUILDING');

	const advantages = [
		{text: 'Cars in Stock', value: 10},
		{
			text: 'We sold',
			value: 40,
		},
		{text: 'Years in Business', value: 2},
	];

	return (
		<section className={s.container}>
			<article className={s.intro}>
				<h1 className={s.title}>WE WILL FIND</h1>
				<p
					className={s.description}>YOUR RELIABLE ASSISTANT</p>
				<ul className={s.list}>
					{advantages.map((item) => (
						<li key={item.value}>
							<p className={s.listValue}>
								{item.value}
								<span>+</span>
							</p>
							<p className={s.listText}>{item.text}</p>
						</li>
					))}
				</ul>
			</article>
			<article className={s.posters}>
				<Loader className={s.loader}/>
				{!isMobile && (
					<>
						<Image className={s.first} src={FIRST_BUILDING} alt={buildingText}/>
						<Image className={s.second} src={SECOND_BUILDING}
						       alt={buildingText}/>
						<Image className={s.third} src={THIRD_BUILDING} alt={buildingText}/>
					</>
				)}

				{isMobile && (
					<Image
						className={s.mobileBackground}
						src={MOBILE_BUILDING}
						alt={buildingText}
					/>
				)}
			</article>
		</section>
	);
};

export default HomeIntro;
