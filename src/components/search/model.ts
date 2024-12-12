import { useListStore } from "@/stores";

export const addSearch = ({ words }: { words: string }) => {
	const list = useListStore();
	list.addSearch({ data: words });
};
