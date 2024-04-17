const {getTodoslivros, getLivroPorId} = require ("../servico/livro")

function getLivros (req, res)  {
  try {
    const livros = getTodoslivros()
      res.send(livros)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}
function getLivro (req, res)  {
  try {
    const id = req.params.id
    const livro = getLivroPorId(id)
      res.send(livros)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

module.exports = {
  getLivros,
  getLivro
}