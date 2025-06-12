import cn from 'classnames';

import s from './HomeWhoWeAre.module.scss';

const HomeWhoWeAre = () => {

	return (
		<section className={cn(s.container, 'nude-bg')}>
			<article className={s.inner}>
				<p className={s.desc}>
					WHO_WE_ARE.ABOUT_US
				</p>
			</article>
		</section>
	);
};

export default HomeWhoWeAre;
