import {FC, memo, useEffect, useState} from 'react';

import {useRouter} from 'next/router';

import Loader from '@modules/common/components/Loader';
import FeedbackForm from '@modules/feedback/components/FeedbackForm';
import CatalogPageCarousel
	from '@modules/pages/catalogPage/components/CatalogPageCarousel';
import CatalogPageCrumbs
	from '@modules/pages/catalogPage/components/CatalogPageCrumbs';
import CatalogPageHeader
	from '@modules/pages/catalogPage/components/CatalogPageHeader';
import CatalogPageInformation
	from '@modules/pages/catalogPage/components/CatalogPageInformation';

import {useDataFetching, useMediaQuery,} from '@hooks/index';
import {CATALOG_NAME, LAPTOP_BREAKPOINT} from '@utils/const';

import type {ICatalogData} from '@t-types/data';

import s from './CatalogPage.module.scss';
import Page404 from "@modules/pages/page404/components/Page404";

const CatalogPage: FC = memo(() => {
	const router = useRouter();
	const {catalog} = router.query;
	const {data, loading, initialData} = useDataFetching();
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const currentPageId = Number(catalog);

	const [pageData, setPageData] = useState<ICatalogData>(initialData);
	const {
		city,
		id,
		price,
		propertyType,
		realEstateType,
		table,
		contractType,
	} = pageData;

	useEffect(() => {
		if (!router.isReady) return;
		data.map((value: ICatalogData) => {
			if (value.id === currentPageId) {
				setPageData(value);
			}
		});

		// eslint-disable-next-line
	}, [data, router.query.catalog, router.isReady]);


	const itemTags = [propertyType, realEstateType];

	const itemCity = city;
	const itemOriginalFullAddress = `${city}`;
	const itemCityWithLocationAndAddress = `${itemCity}`;
	const itemRealEstateTypeAndAddress = realEstateType;


	if (loading) {
		return <Loader type="fullscreen"/>;
	}

	if (pageData.id === 0) {
		return <Page404/>
	}

	return (
		<>
			<CatalogPageCrumbs address={itemRealEstateTypeAndAddress}/>
			<CatalogPageHeader
				city={itemCity}
				address={"itemLocationAndAddress"}
				price={price}
				tags={itemTags}
			/>
			<section className={s.container}>
				<div>
					<CatalogPageCarousel id={id}/>
					<CatalogPageInformation
						contractType={contractType}
						realEstateType={realEstateType}
						id={id}
						description={"itemDescription"}
						tableInfo={table || {}}
						address={itemCityWithLocationAndAddress}
						originalAddress={itemOriginalFullAddress}
						station={"itemStation"}
						price={price}
					/>
				</div>
				<aside>
					<div className={s.feedback}>
						<h5 className={s.feedbackTitle}>
							{('FEEDBACK.DO_YOU_LIKE_THIS_PROPERTY')}
						</h5>
						<p className={s.feedbackDescription}>
							{('FEEDBACK.IF_YOU_LIKE_THIS_PROPERTY')}
						</p>
						<FeedbackForm isColumnType message={'message'}/>
					</div>
				</aside>
			</section>

		</>
	);
});
CatalogPage.displayName = CATALOG_NAME;
export default CatalogPage;
