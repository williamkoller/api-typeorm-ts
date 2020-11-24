import { Router, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Class from '../models/Class'
import Lesson from '../models/Lesson'

const lessonRouter = Router()

lessonRouter.post(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    try {
      const repo = getRepository(Lesson)
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

lessonRouter.get(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    return response.json(await getRepository(Lesson).find())
  },
)

export default lessonRouter
