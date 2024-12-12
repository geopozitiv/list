import {
	updateItemInStorage,
	deleteItemInStorage,
	addItemInStorage,
} from "./utils";

export const apiClientUpdateItem = ({
	id,
	data,
}: {
	id: string;
	data: string;
}) => {
	updateItemInStorage({ id, data });
};

export const apiClientDeleteItem = ({ id }: { id: string }) => {
	deleteItemInStorage({ id });
};

export const apiClientAddItem = ({
	id,
	data,
}: {
	id: string;
	data: { id: string; name: string };
}) => {
	addItemInStorage({ id, data });
};
