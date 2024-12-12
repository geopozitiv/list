import { updateItemInStorage, deleteItemInStorage } from "./utils";

export const aliClientUpdateItem = ({
	id,
	data,
}: {
	id: string;
	data: string;
}) => {
	updateItemInStorage({ id, data });
};

export const aliClientDeleteItem = ({ id }: { id: string }) => {
	deleteItemInStorage({ id });
};
