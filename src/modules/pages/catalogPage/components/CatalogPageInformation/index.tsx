import {FC} from 'react';
import cn from 'classnames';

import CatalogPageMap
	from '@modules/pages/catalogPage/components/CatalogPageMap';

import CatalogPageTable
	from '@modules/pages/catalogPage/components/CatalogPageTable';
import CatalogPageVideo
	from "@modules/pages/catalogPage/components/CatalogPageVideo";

import {usePropertyPhoto} from '@hooks/index';

import type {ICatalogTable} from '@t-types/data';

import s from './CatalogPageInformation.module.scss';

const CatalogPageInformation: FC<{
	description: string;
	id: number;
	tableInfo: ICatalogTable;
	address: string;
	originalAddress: string;
	station: string;
	contractType: string;
	realEstateType: string;
	price: string;
}> = ({
	      description,
	      tableInfo,
	      id,
	      address,
	      originalAddress,
	      station,
	      realEstateType,
	      contractType,
	      price,
      }) => {

	const postersList = usePropertyPhoto(id);
	const isVideoBlock = postersList.some(item => item.video);

	return (
		<>
			{isVideoBlock && (
				<article className={s.container}>
					<h4 className={s.title}>{('VIDEO')}</h4>
					<hr className={s.line}/>
					{postersList.map((item) => item.video && (
						<CatalogPageVideo key={item.video} source={item.video}/>
					))}
				</article>
			)}

			<article className={cn(s.container, s.info)}>
				<div className={s.infoHeading}>
					<h4 className={s.title}>{('INFORMATION')}</h4>
					<p>
						{('OBJECT_ID')} <span className={s.id}>{id}</span>
					</p>
				</div>

				<CatalogPageTable
					price={price}
					contractType={contractType}
					realEstateType={realEstateType}
					tableInfo={tableInfo}
				/>

			</article>

			{description && (
				<article className={cn(s.container)}>
					<h4 className={s.title}>{('DESCRIPTION')}</h4>
					<hr className={s.line}/>
					<p
						dangerouslySetInnerHTML={{
							__html: description,
						}}
					/>
				</article>
			)}

			<article className={cn(s.container, s.address)}>
				<h4 className={s.title}>{('ADDRESS')}</h4>
				<hr className={s.line}/>
				{address && <p>{address}</p>}
				{station && <p>{station}</p>}
				<CatalogPageMap fullAddress={originalAddress}/>
			</article>

		</>
	);
};

export default CatalogPageInformation;
