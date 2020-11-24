import { Router, Request, Response } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import Class from '../models/Class'
import ClassRepository from '../repositories/ClassRepository'

const classRouter = Router()

classRouter.post(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    try {
      const repo = getRepository(Class)
      const res = await repo.save(request.body)
      return response.status(201).json(res)
    } catch (error) {
      console.log('error.message: ', error.message)
      return response.status(400).send({
        message: error.message,
      })
    }
  },
)

classRouter.get(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    return response.json(await getRepository(Class).find())
  },
)

classRouter.get(
  '/:name',
  async (request: Request, response: Response): Promise<Response> => {
    try {
      const repository = getCustomRepository(ClassRepository)
      return response.json(await repository.findByName(request.params.name))
    } catch (error) {
      console.log('error.message: ', error.message)
      return response.status(400).send({
        message: error.message,
      })
    }
  },
)
export default classRouter
