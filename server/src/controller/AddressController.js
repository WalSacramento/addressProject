import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default {
  async createAddress(req, res) {
    try {
      const { street, number, neighborhood, city, state, cep, complement } = req.body

      const cepExists = await prisma.address.findFirst({ where: { cep } })

      if (cepExists) {
        return res.status(400).json({ error: 'CEP already exists' })
      }

      const address = await prisma.address.create({
        data: {
          street,
          number,
          neighborhood,
          city,
          state,
          cep,
          complement
        }
      })

      return res.status(201).json(address)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  },

  async listAddresses(req, res) {
    try {
      const addresses = await prisma.address.findMany()

      return res.json(addresses)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  },

  async showAddress(req, res) {
    try {
      const { id } = req.params

      const address = await prisma.address.findFirst({ where: { id: Number(id) } })

      if (!address) {
        return res.status(404).json({ error: 'Address not found' })
      }

      return res.json(address)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  },

  async updateAddress(req, res) {
    try {
      const { id } = req.params
      const { street, number, neighborhood, city, state, cep, complement } = req.body

      const address = await prisma.address.update({
        where: { id: Number(id) },
        data: {
          street,
          number,
          neighborhood,
          city,
          state,
          cep,
          complement
        }
      })

      return res.json(address)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  },

  async deleteAddress(req, res) {
    try {
      const { id } = req.params

      await prisma.address.delete({ where: { id: Number(id) } })

      return res.status(204).send("Address deleted")
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}