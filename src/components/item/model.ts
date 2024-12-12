import { addItemToApi } from "./api";

const newId = () => {
	return String(Math.floor(Date.now()));
};

export const addItemApi = ({ id }: { id: string }) => {
	const newData = {
		id: newId(),
		name: `new one ${newId()}`,
	};
	addItemToApi({ id, data: newData });
};
