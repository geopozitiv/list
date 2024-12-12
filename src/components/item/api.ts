import { apiClientAddItem } from "@/api/apiClient";

export const addItemToApi = ({
	id,
	data,
}: {
	id: string;
	data: { id: string; name: string };
}) => {
	apiClientAddItem({ id, data });
};
