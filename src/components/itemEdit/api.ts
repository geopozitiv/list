import { aliClientUpdateItem, aliClientDeleteItem } from "@/api/apiClient";

export const saveItemToApi = ({ id, data }: { id: string; data: string }) => {
	aliClientUpdateItem({ id, data });
};

export const deleteItemToApi = ({ id }: { id: string }) => {
	aliClientDeleteItem({ id });
};
