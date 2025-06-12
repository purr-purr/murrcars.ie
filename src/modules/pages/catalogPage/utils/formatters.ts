export const formatToNumbersOnly = (value: string) => {
	return Number(value.replace(/[^\d.]/g, ''));
};
