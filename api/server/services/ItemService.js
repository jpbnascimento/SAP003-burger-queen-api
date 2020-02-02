import database from '../src/models'

class ItemService {
    static async getAllItem() {
        try {
            return await database.item.findAll()
        } catch (error) {
            throw error
        }
    }

    static async addItem(newItem) {
        try {
            return await database.item.create(newItem)
        } catch (error) {
            throw error
        }
    }

    static async updateItem(id, updateItem) {
        try {
            const itemToUpdate = await database.item.findOne({
                where: { id: Number(id) }
            })

            if (itemToUpdate) {
                await database.item.update(updateItem, { where: { id: Number(id) } })

                return updateItem
            }
            return null
        } catch (error) {
            throw error
        }
    }

    static async getItem(id) {
        try {
            const theItem = await database.item.findOne({
                where: { id: Number(id) }
            })

            return theItem
        } catch (error) {
            throw error
        }
    }

    static async deleteItem(id) {
        try {
            const itemToDelete = await database.item.findOne({ where: { id: Number(id) } })

            if (itemToDelete) {
                const deletedItem = await database.item.destroy({
                    where: { id: Number(id) }
                })
                return deletedItem
            }
            return null
        } catch (error) {
            throw error
        }
    }
}

export default ItemService