import {FC} from 'react';
import Image from 'next/image';
import cn from 'classnames';

import LOADER from '@public/assets/loader.svg';

import s from './Loader.module.scss';

const Loader: FC<{
	type?: 'short' | 'described' | 'fullscreen';
	className?: string;
}> = ({type = 'short', className}) => {

	const loadingText = 'LOADING';

	return (
		<div
			className={cn(s.container, className, type === 'fullscreen' && s.full)}>
			<Image src={LOADER} alt={loadingText}/>
			{type !== 'short' && <p>{loadingText}</p>}
		</div>
	);
};

export default Loader;
