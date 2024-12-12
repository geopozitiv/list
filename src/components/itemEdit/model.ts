import { saveItemToApi, deleteItemToApi } from "./api";

export const saveItemApi = ({ id, data }: { id: string; data: string }) => {
	saveItemToApi({ id, data });
};

export const deleteItemApi = ({ id }: { id: string }) => {
	deleteItemToApi({ id });
};
