import database from '../src/models'

class PedidosService {
    static async getAllPedidos() {
        try {
            return await database.pedidos.findAll()
        } catch (error) {
            throw error
        }
    }

    static async addPedidos(newPedidos) {
        try {
            return await database.pedidos.create(newPedidos)
        } catch (error) {
            throw error
        }
    }

    static async updatePedidos(id, updatePedidos) {
        try {
            const pedidosToUpdate = await database.pedidos.findOne({
                where: { id: Number(id) }
            })

            if (pedidosToUpdate) {
                await database.Pedidos.update(updatePedidos, { where: { id: Number(id) } })

                return updatePedidos
            }
            return null
        } catch (error) {
            throw error
        }
    }

    static async getPedidos(id) {
        try {
            const thePedidos = await database.pedidos.findOne({
                where: { id: Number(id) }
            })

            return thePedidos
        } catch (error) {
            throw error
        }
    }

    static async deletePedidos(id) {
        try {
            const pedidosToDelete = await database.pedidos.findOne({ where: { id: Number(id) } })

            if (pedidosToDelete) {
                const deletedPedidos = await database.pedidos.destroy({
                    where: { id: Number(id) }
                })
                return deletedPedidos
            }
            return null
        } catch (error) {
            throw error
        }
    }
}

export default PedidosService