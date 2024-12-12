import { apiClientUpdateItem, apiClientDeleteItem } from "@/api/apiClient";

export const saveItemToApi = ({ id, data }: { id: string; data: string }) => {
	apiClientUpdateItem({ id, data });
};

export const deleteItemToApi = ({ id }: { id: string }) => {
	apiClientDeleteItem({ id });
};
