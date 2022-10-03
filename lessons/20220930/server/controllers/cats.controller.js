// CRUD

let cats = ["Fluffy"]

exports.create = (req, res) => {
  const { name } = req.params

  cats.push(name)
  res.send(cats)
}

exports.read = (req, res) => {
  console.log(req.user)
  res.send(cats)
}

exports.update = (req, res) => {
  const { name } = req.params

  /*
   Kirjutage selle asemel loogika, et leiab esimese elemendi
   ja muudab ainult seda, kui see eksisteerib.
  */

  /*
   cats = cats.map(cat => {
     if (cat === name) {
       return cat + "_updated"
     }
     return cat
   })
  */

  let index = cats.indexOf(name)

  if (index !== -1) {
    cats[index] = name + "_updated"
  }
  res.send(cats)
}

exports.delete = (req, res) => {
  // Kirjutada kustutamise funktsionaalsus

  const { name } = req.params

  // cats = cats.filter(cat => cat !== name)

  let index = cats.indexOf(name)

  if (index !== -1) {
    cats.splice(index, 1)
  }
  res.send(cats)
}
