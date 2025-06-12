import {FC} from 'react';

import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import DefaultPoster from '@modules/common/components/DefaultPoster';

import {usePropertyPhoto,} from '@hooks/index';
import {CATALOG_NAME} from '@utils/const';

import type {ICatalogData} from '@t-types/data';

import s from './CatalogCard.module.scss';

const CatalogCard: FC<{
	props: ICatalogData;
}> = ({props}) => {
	const {
		id,
	} = props;


	const postersList = usePropertyPhoto(id);

	return (
		<li className={cn('yellow-shadow', s.container)}>
			<Link className={s.inner} href={`/${CATALOG_NAME}/${id}`}>
				{postersList.length > 0 ? (
					<Image
						className={s.image}
						width={400}
						height={300}
						src={postersList[0].original}
						alt="Photo"
					/>
				) : (
					<DefaultPoster className={s.image}/>
				)}
				<div className={s.info}>
					info
				</div>
			</Link>
		</li>
	);
};

export default CatalogCard;
