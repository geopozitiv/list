export const rules = [
	(value: string | undefined) => !!value || "Required.",
	(value: string | undefined) =>
		(value && value.length >= 3) || "Min 3 characters",
];
