import Button from '@modules/common/components/Button';
import Loader from '@modules/common/components/Loader';

import {CATALOG_NAME} from '@utils/const';

import s from './Page404.module.scss';

const Page404 = () => {
	return (
		<article className={s.container}>
			<div className={s.code}>
				<span>4</span>
				<Loader/>
				<span>4</span>
			</div>
			<p>PAGE_NOT_FOUND</p>
			<div className={s.nav}>
				<Button text={('NAVIGATION.MAIN_PAGE')} type="link" linkPath="/"/>
				<Button
					text={('FIND_REAL_ESTATE')}
					color="transparent"
					type="link"
					linkPath={`/${CATALOG_NAME}`}
				/>
			</div>
		</article>
	);
};
export default Page404;
