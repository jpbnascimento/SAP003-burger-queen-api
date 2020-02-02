import ProdutosService from '../services/ProdutosService'
import Util from '../utils/Utils'

const util = new Util()

class ProdutosController {
    static async getAllProdutos(req, res) {
        try {
            const allProdutos = await ProdutosService.getAllProdutos()
            if (allProdutos.length > 0) {
                util.setSuccess(200, 'Produtos retrieved', allProdutos)
            } else {
                util.setSuccess(200, 'No Produtos found')
            }
            return util.send(res)
        } catch (error) {
            util.setError(400, error)
            return util.send(res)
        }
    }

    static async addProdutos(req, res) {
        if (!req.body.name || !req.body.preco || !req.body.menu ) {
            util.setError(400, 'Please provide complete details')
            return util.send(res)
        }
        const newProdutos = req.body
        try {
            const createdProdutos = await ProdutosService.addProdutos(newProdutos)
            util.setSuccess(201, 'Produtos Added!', createdProdutos)
            return util.send(res)
        } catch (error) {
            util.setError(400, error.message)
            return util.send(res)
        }
    }

    static async updatedProdutos(req, res) {
        const alteredProdutos = req.body
        const { id } = req.params
        if (!Number(id)) {
            util.setError(400, 'Please input a valid numeric value')
            return util.send(res)
        }
        try {
            const updateProdutos = await ProdutosService.updateProdutos(id, alteredProdutos)
            if (!updateProdutos) {
                util.setError(404, `Cannot find produtos with the id: ${id}`)
            } else {
                util.setSuccess(200, 'Produtos updated', updateProdutos)
            }
            return util.send(res)
        } catch (error) {
            util.setError(404, error)
            return util.send(res)
        }
    }

    static async getProdutos(req, res) {
        const { id } = req.params

        if (!Number(id)) {
            util.setError(400, 'Please input a valid numeric value')
            return util.send(res)
        }

        try {
            const theProdutos = await ProdutosService.getProdutos(id)

            if (!theProdutos) {
                util.setError(404, `Cannot find produtos with the id ${id}`)
            } else {
                util.setSuccess(200, 'Found produtos', theProdutos)
            }
            return util.send(res)
        } catch (error) {
            util.setError(404, error)
            return util.send(res)
        }
    }

    static async deleteProdutos(req, res) {
        const { id } = req.params

        if (!Number(id)) {
            util.setError(400, 'Please provide a numeric value')
            return util.send(res)
        }

        try {
            const produtosToDelete = await ProdutosService.deleteProdutos(id)

            if (produtosToDelete) {
                util.setSuccess(200, 'Produtos deleted')
            } else {
                util.setError(404, `Produtos with the id ${id} cannot be found`)
            }
            return util.send(res)
        } catch (error) {
            util.setError(400, error)
            return util.send(res)
        }
    }
}

export default ProdutosController;