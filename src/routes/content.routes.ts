import { Router, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Content from '../models/Content'

const contentRouter = Router()

contentRouter.post(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    try {
      const repo = getRepository(Content)
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

contentRouter.get(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    return response.json(await getRepository(Content).find())
  },
)

export default contentRouter
