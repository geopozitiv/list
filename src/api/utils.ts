import { useListStore } from "@/stores";

export const updateItemInStorage = ({
	id,
	data,
}: {
	id: string;
	data: string;
}) => {
	// const dataLocal = localStorage.getItem(dataKey);
	const useList = useListStore();
	useList.updateItem({ id, data });
};

export const deleteItemInStorage = ({ id }: { id: string }) => {
	// const dataLocal = localStorage.getItem(dataKey);
	const useList = useListStore();
	useList.deleteItem({ id });
};

export const addItemInStorage = ({
	id,
	data,
}: {
	id: string;
	data: { id: string; name: string };
}) => {
	// const dataLocal = localStorage.getItem(dataKey);
	const useList = useListStore();
	useList.addItem({ id, data });
};
