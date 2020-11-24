import { Router } from 'express'
import classRouter from './class.routes'
import contentRouter from './content.routes'
import lessonRouter from './lesson.routes'
import studentRouter from './student.routes'

const routes = Router()

routes.use('/class', classRouter)
routes.use('/student', studentRouter)
routes.use('/content', contentRouter)
routes.use('/lesson', lessonRouter)

export default routes
