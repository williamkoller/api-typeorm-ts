import { Router, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { validate } from 'class-validator'
import Student from '../models/Student'

const studentRouter = Router()

studentRouter.post(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    try {
      const repo = getRepository(Student)
      const { name, key, email } = request.body
      const student = repo.create({
        name,
        key,
        email,
      })
      const erros = await validate(student)

      if (erros.length === 0) {
        const res = await repo.save(student)
        return response.status(201).json(res)
      }
      return response.status(400).json(erros)
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
