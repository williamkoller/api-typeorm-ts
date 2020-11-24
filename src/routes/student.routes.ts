import { Router, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Student from '../models/Student'

const studentRouter = Router()

studentRouter.post(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    try {
      const repo = getRepository(Student)
      const res = repo.save(request.body)
      return response.status(201).json(res)
    } catch (error) {
      console.log('error.message: ', error.message)
      return response.status(400).send({
        message: error.message,
      })
    }
  },
)

studentRouter.get(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    return response.json(await getRepository(Student).find())
  },
)

export default studentRouter
