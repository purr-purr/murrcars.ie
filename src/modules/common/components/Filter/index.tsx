import type {FormEvent} from 'react';
import {FC, useContext, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {CatalogContext} from '@context/CatalogContext';
import cn from 'classnames';

import Button from '@modules/common/components/Button';
import Dropdown from '@modules/common/components/Dropdown';
import InputField from '@modules/common/components/InputField';

import {useDataFetching} from '@hooks/index';
import {CATALOG_NAME} from '@utils/const';
import {initialFilters} from '@utils/filters';

import type {DropdownOptions} from '@modules/common/types/dropdown';
import type {ICatalogData} from '@t-types/data';
import type {IFilters} from '@t-types/filters';

import s from './Filter.module.scss';

const Filter: FC<{
	side?: 'left' | 'center';
}> = ({side = 'left'}) => {

	const [activeTabIndex, setActiveTabIndex] = useState<string>(
		initialFilters.contractType,
	);
	const [currentFilters, setCurrentFilters] = useState<IFilters>(initialFilters);
	const {filters, handleFilters} = useContext(CatalogContext);
	const {data} = useDataFetching();
	const router = useRouter();

	const tabs = ['RENT', 'SELLING'];

	const parseUniqueFilterItem = (
		data: ICatalogData[],
		key: keyof ICatalogData,
	) => {
		return Array.from(new Set(data.map((item: ICatalogData) => item[key]))).map(
			(item) => {
				return {
					value: item.toString(),
					title: key
				};
			},
		);
	};

	const filterList = (data: ICatalogData[]) => ({
		city: parseUniqueFilterItem(data, 'city'),
		propertyType: parseUniqueFilterItem(data, 'propertyType'),
		realEstateType: parseUniqueFilterItem(data, 'realEstateType'),
	});

	const filterListOptions = filterList(data);
	const createUIFilterItem = (
		category: string,
		label: keyof typeof filterListOptions,
	) => ({
		category: category,
		label: label,
		list: [{value: 'All', title: 'ALL'}, ...filterListOptions[label]],
	});

	const UI_FILTERS_LIST = [
		createUIFilterItem('PROPERTY TYPE', 'propertyType'),
		createUIFilterItem(
			'TYPE OF REAL ESTATE',
			'realEstateType',
		),
		createUIFilterItem('CITY', 'city'),
	];

	const handleOnChangeFilters = (item: DropdownOptions, label: string) => {
		const currentObject: IFilters = {...currentFilters};
		currentObject[label as keyof IFilters] = item.value;
		setCurrentFilters(currentObject);
	};

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
	};

	const handleApplyFilters = () => {
		handleFilters(currentFilters);

		const catalogPath = `/${CATALOG_NAME}`;
		if (router.asPath !== catalogPath) {
			router.push(catalogPath).then();
		}
	};

	useEffect(() => {
		setCurrentFilters(filters);
		setActiveTabIndex(filters.contractType);
	}, [filters]);


	const handleTabButtonClick = (index: number) => {
		const currentTab = index;
		setActiveTabIndex(currentTab as string);
		handleFilters({
			...filters,
			contractType: currentTab as string,
		});
	};

	return (
		<section className={cn(s.container, side && s[side])}>
			<div className={cn(s.tabs, side && s[side])}>
				{tabs.map((tab, index) => (
					<button
						key={index}
						onClick={() => handleTabButtonClick(index)}
						className={cn(
							s.tab,
							index as string === activeTabIndex && s.active,
						)}
					>
						{tab}
					</button>
				))}
			</div>
			<form className={s.form} onSubmit={handleFormSubmit}>
				{UI_FILTERS_LIST.map((item) => (
					<InputField
						className={s.inputField}
						key={item.category}
						label={item.category}
					>
						<Dropdown
							currentOption={{
								value: currentFilters[item.label],
								title: item.label,
							}}
							label={item.label}
							handleOnChange={handleOnChangeFilters}
							options={item.list}
						/>
					</InputField>
				))}
				<Button onClick={handleApplyFilters} text='FIND A CAR'/>
			</form>
		</section>
	);
};

export default Filter;
