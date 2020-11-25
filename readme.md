# Requisits to run this project

- Docker
- Docker Compose

### This project is used Express, TypeORM, PostgreSQL and Redis

### To run this project, follow the below steps

##### Build Project

- `npm i`
- `docker-compose up --build`

#### Useful commands

- running typeorm migration run
  `npm run typeorm migration run`

- running typeorm migrate create
  `npm run typeorm migration:create -- -n <SchemaTable>`

- running typeorm create a migration from a model
  `npm run typeorm migration:generate -- -n <RelationClassStudent>`
