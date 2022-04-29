import Knex from 'knex'
import KnexTinyLogger from 'knex-tiny-logger'
import * as dotenv from 'dotenv'
dotenv.config()

const config = require('../../knexfile')[process.env.NODE_ENV || 'development']

export default KnexTinyLogger(Knex(config))