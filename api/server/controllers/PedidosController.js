import PedidosService from '../services/PedidosService'
import Util from '../utils/Utils'

const util = new Util()

class PedidosController {
    static async getAllPedidos(req, res) {
        try {
            const allPedidos = await PedidosService.getAllPedidos()
            if (allPedidos.length > 0) {
                util.setSuccess(200, 'Pedidos retrieved', allPedidos)
            } else {
                util.setSuccess(200, 'No Pedidos found')
            }
            return util.send(res)
        } catch (error) {
            util.setError(400, error)
            return util.send(res)
        }
    }

    static async addPedidos(req, res) {
        if (!req.body.name || !req.body.preco || !req.body.menu ) {
            util.setError(400, 'Please provide complete details')
            return util.send(res)
        }
        const newPedidos = req.body
        try {
            const createdPedidos = await PedidosService.addPedidos(newPedidos)
            util.setSuccess(201, 'Pedidos Added!', createdPedidos)
            return util.send(res)
        } catch (error) {
            util.setError(400, error.message)
            return util.send(res)
        }
    }

    static async updatedPedidos(req, res) {
        const alteredPedidos = req.body
        const { id } = req.params
        if (!Number(id)) {
            util.setError(400, 'Please input a valid numeric value')
            return util.send(res)
        }
        try {
            const updatePedidos = await PedidosService.updatePedidos(id, alteredPedidos)
            if (!updatePedidos) {
                util.setError(404, `Cannot find Pedidos with the id: ${id}`)
            } else {
                util.setSuccess(200, 'Pedidosupdated', updatePedidos)
            }
            return util.send(res)
        } catch (error) {
            util.setError(404, error)
            return util.send(res)
        }
    }

    static async getPedidos(req, res) {
        const { id } = req.params

        if (!Number(id)) {
            util.setError(400, 'Please input a valid numeric value')
            return util.send(res)
        }

        try {
            const thePedidos = await PedidosService.getPedidos(id)

            if (!thePedidos) {
                util.setError(404, `Cannot find Pedidos with the id ${id}`)
            } else {
                util.setSuccess(200, 'Found Pedidos', thePedidos)
            }
            return util.send(res)
        } catch (error) {
            util.setError(404, error)
            return util.send(res)
        }
    }

    static async deletePedidos(req, res) {
        const { id } = req.params

        if (!Number(id)) {
            util.setError(400, 'Please provide a numeric value')
            return util.send(res)
        }

        try {
            const pedidosToDelete = await PedidosService.deletePedidos(id)

            if (pedidosToDelete) {
                util.setSuccess(200, 'Pedidos deleted')
            } else {
                util.setError(404, `Pedidos with the id ${id} cannot be found`)
            }
            return util.send(res)
        } catch (error) {
            util.setError(400, error)
            return util.send(res)
        }
    }
}

export default PedidosController;