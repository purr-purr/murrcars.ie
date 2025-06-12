import s from './CatalogPageMap.module.scss';

const CatalogPageMap = () => {
	const embeddedMapURL = `https://www.google.com/maps/embed/v1/place?q`;
	return <iframe className={s.container} src={embeddedMapURL} allowFullScreen/>;
};

export default CatalogPageMap;
