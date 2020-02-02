import database from '../src/models'

class ProdutosService {
    static async getAllProdutos() {
        try {
            return await database.produtos.findAll()
        } catch (error) {
            throw error
        }
    }

    static async addProdutos(newProdutos) {
        try {
            return await database.produtos.create(newProdutos)
        } catch (error) {
            throw error
        }
    }

    static async updateProdutos(id, updateProdutos) {
        try {
            const produtosToUpdate = await database.produtos.findOne({
                where: { id: Number(id) }
            })

            if (produtosToUpdate) {
                await database.Produtos.update(updateProdutos, { where: { id: Number(id) } })

                return updateProdutos
            }
            return null
        } catch (error) {
            throw error
        }
    }

    static async getProdutos(id) {
        try {
            const theProdutos = await database.produtos.findOne({
                where: { id: Number(id) }
            })

            return theProdutos
        } catch (error) {
            throw error
        }
    }

    static async deleteProdutos(id) {
        try {
            const produtosToDelete = await database.produtos.findOne({ where: { id: Number(id) } })

            if (produtosToDelete) {
                const deletedProdutos = await database.produtos.destroy({
                    where: { id: Number(id) }
                })
                return deletedProdutos
            }
            return null
        } catch (error) {
            throw error
        }
    }
}

export default ProdutosService