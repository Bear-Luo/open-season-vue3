export const thousandthComma = (v: number): string => {
	const rule = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
	return `${ v }`.replace(rule, ',');
};