import { defineStore } from "pinia";
import list from "@/data/list.data.json";
import { useLocalStorage } from "@vueuse/core";

export const useListStore = defineStore("list", {
	state: () => ({
		list: useLocalStorage("pinia/list", list.posts),
		search: "",
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
		addItem({ id, data }: { id: string; data: { id: string; name: string } }) {
			const idx = this.list.findIndex((item) => item.id === id);
			console.log("idx", idx, id, data);
			if (idx > -1) {
				// only splice array when item is found
				this.list.splice(idx, 0, data); // 2nd parameter means remove one item only
			}
		},
		addSearch({ data }: { data: string }) {
			this.search = data;
		},
	},
	getters: {
		getList(state) {
			if (state.search) {
				// const re = new RegExp(`\\b${state.search}\\b`, "gi");
				return state.list.filter((item) => {
					const ff = item.name
						.toLowerCase()
						.includes(state.search.toLowerCase());
					if (ff) return item;
				});
			}
			return state.list;
		},
	},
});
