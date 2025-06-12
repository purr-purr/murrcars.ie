import {FC} from 'react';
import IconMap from '@icons/components/IconMap';
import s from './CatalogPageHeader.module.scss';

const CatalogPageHeader: FC<{
	city: string;
	address: string;
	price: string;
	tags: string[];
}> = ({city, address, price, tags}) => {

	return (
		<>
			<article className={s.heading}>
				<h1 className={s.address}>{address}</h1>
			</article>

			<article className={s.description}>
				<p className={s.city}>
					<IconMap/>
					{city} {price} {tags[0]}
				</p>
			</article>
		</>
	);
};

export default CatalogPageHeader;
