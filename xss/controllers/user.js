const conn = require('../config/database')

const controller = {}

controller.login = async (req, res) => {
  try {
    // const sql = `select * from users where username = '${req.body.username}' and password = '${req.body.password}'`
    // const result = await conn.query(sql)

    const sql = `select * from users where username = $1 and password = $2`
    const result = await conn.query(sql, [req.body.username, req.body.password])

    if (result.rows.length > 0) {
      res.render('loggedin', {
        title: 'Seja bem vindo',
        message: 'Autenticaçãõ concluída com sucesso'
      })
    } else {
      res.render('loggedin', {
        title: 'Acesso negado',
        message: 'Usuário ou senha incorretos'
      })
    }
  } catch (error) {
    console.error(error)
    res.render('error', {
      title: 'Erro',
      error
    })
  }
}

module.exports = controller