import { defineStore } from "pinia";
import list from "@/data/list.data.json";
import { useLocalStorage } from "@vueuse/core";

export const useListStore = defineStore("list", {
	state: () => ({
		list: useLocalStorage("pinia/list", list.posts),
	}),
	actions: {
		updateItem({ id, data }: { id: string; data: string }) {
			const idx = this.list.findIndex((item) => item.id === id);
			this.list[idx].name = data;
		},
		deleteItem({ id }: { id: string }) {
			const idx = this.list.findIndex((item) => item.id === id);
			if (idx > -1) {
				// only splice array when item is found
				this.list.splice(idx, 1); // 2nd parameter means remove one item only
			}
		},
	},
});