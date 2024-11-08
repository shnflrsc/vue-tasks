import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import type { List } from "@/types/global";

export const useListStore = defineStore('listStore', {
    state: () => {
        return {
            lists: [
                {
                    id: "DPDVo6QmiMG_dBMNg5sem",
                    name: "To-do",
                    items: [],
                },
                {
                    id: "YFhGIw4kSuyLvWtdS1oQP",
                    name: "Ongoing",
                    items: [],
                },
                {
                    id: "r_zu1qEd8pD9jOKL32YDv",
                    name: "Completed",
                    items: [],
                },
            ] as List[]
        }
    },
    getters: {
        getLists(state) {
            return state.lists
        }
    },
    actions: {
        findListbyId(listId: string) {
            return this.lists.find((list) => list.id === listId)
        },
        createItem(selectedList: List) {
            selectedList.items.push({
                id: nanoid(),
                content: "New Item"
            })
        },
        startDrag(evt: DragEvent, listId: string, itemId: string) {
            if (!evt.dataTransfer) {
                console.error("startDrag: dataTransfer is null")
                return
            }
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.setData('listId', listId)
            evt.dataTransfer.setData('itemId', itemId)
        },
        dropOnList(evt: DragEvent, newListId: string) {
            if (!evt.dataTransfer) {
                console.error("dropOnList: dataTransfer is null")
                return
            }

            const oldListId = evt.dataTransfer.getData('listId')
            const itemId = evt.dataTransfer.getData('itemId')

            let fromList = this.findListbyId(oldListId)
            let toList = this.findListbyId(newListId)
            
            if (!fromList) {
                console.error("dropOnList: fromList is undefined")
                return
            }
            if (!toList) {
                console.error("dropOnList: toList is undefined")
                return
            }

            const item = fromList.items.find((item) => item.id === itemId)
            fromList.items = fromList.items.filter((item) => item.id !== itemId)

            if (!item) {
                console.error("dropOnList: item is undefined")
                return
            }

            toList.items.push(item)
        },
    },
})