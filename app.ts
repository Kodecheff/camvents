import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


const app: express.Application = express()

app.use(cors())

dotenv.config({path: './.env'})

const hostname = process.env.HOST_NAME as string
const port = process.env.PORT as any

// App logger
const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const url = req.url
  const method = req.method
  const date = new Date().toLocaleDateString()
  const time = new Date().toLocaleTimeString()

  const result: string = `${method} request for ${url} at ${time} - ${date}`

  console.log(result)

  next()
}

app.use(logger)

app.listen(port, hostname, () => {
  console.log(`Server is running on port ${port}`)
})