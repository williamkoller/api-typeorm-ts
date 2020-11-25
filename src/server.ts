import app from './app'
import 'reflect-metadata'
import './database'

app.listen(process.env.PORT, () => {
  console.log('🏃 Running Server')
})
