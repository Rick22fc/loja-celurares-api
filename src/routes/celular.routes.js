import {celularServices} from '../services/celular.services.js'
import { Router } from 'express'
const celularRouter = new Router()

export const getCelulares = async (req, res) => {
    try {
        const celulares = await celularServices.getCelulares()
        res.status(200).json(celulares)

    }catch (error) {
        res.status(500).json({message: error.message})
    }
}
    celularRouter.get("/",async (req,res) => {
        const celulares = await celularServices.getALL();
        return res.json(celulares)
    })
    celularRouter.post("/", async (req,res) => {
        const { nome, marca, preco, quantidade_estoque } = req.body
        const novoCelular = await celularServices.createCelular({ nome, marca, preco, quantidade_estoque })
        res.status(201).json(novoCelular)
    })
