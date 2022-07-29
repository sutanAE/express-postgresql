const message = 'hello from pg-method.js!'
const Pool = require('pg').Pool


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'database',
  password: 'admin',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('select * from public.user', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const addUsers = (request, response) =>{
    const {name, age} = request.body
    console.log('processing post data')


    pool.query(`INSERT INTO public."user" VALUES
    ('${name}', ${Number(age)});`, (error, results) => {
        if (error) {
            console.log('error bro')
            response.status(200).json({'message': 'post failed'})
          throw error
        }
        console.log('post data sucess!')
        response.status(200).json({'message': 'post success!'})
      })

}

module.exports = {
    getUsers,
    addUsers,
    message
  }