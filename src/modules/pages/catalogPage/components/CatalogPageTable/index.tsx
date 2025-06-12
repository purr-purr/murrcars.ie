import {FC} from 'react';

import type {ICatalogTable} from '@t-types/data';

import s from './CatalogPageTable.module.scss';

const CatalogPageTable: FC<{
	tableInfo: ICatalogTable;
	contractType: string;
	realEstateType: string;
	price: string;
}> = ({tableInfo, realEstateType, contractType, price}) => {

	tableInfo.totalCost = price;
	const table = Object.entries(tableInfo)
		.map(
			([key, value]) =>
				value && {
					key: key,
					value: value,
				},
		)
		.filter(Boolean);

	return (
		<table className={s.container}>
			<tbody>
			<tr>
				<td>{('TYPE_OF_AGREEMENT' as string)}</td>
				<td>{contractType}</td>
			</tr>

			<tr>
				<td>{('TYPE_OF_REAL_ESTATE.TYPE_OF_REAL_ESTATE')}</td>
				<td>{realEstateType}</td>
			</tr>

			{table.map((item) => {
				if (item) {
					return (
						<tr key={item.key}>
							<td>{(`TABLE`)}</td>
							<td>
								text
							</td>
						</tr>
					);
				}
			})}
			</tbody>
		</table>
	);
};

export default CatalogPageTable;
