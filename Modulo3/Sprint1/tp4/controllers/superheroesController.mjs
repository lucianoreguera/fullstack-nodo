import {
  obtenerSuperheroePorId,
  buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresDe30,
} from "../services/superheroesService.mjs";
import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from "../views/responseView.mjs";

export function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroe = obtenerSuperheroePorId(parseInt(id));

  if (!superheroe) {
    res.status(404).send({ mensaje: "Superheroe no encontrado" });
  }
  res.send(renderizarSuperheroe(superheroe));
}

export function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

  if (superheroes.length === 0) {
    res
      .status(404)
      .send({ mensaje: "No se encontraron superheroes con ese atributo" });
  }
  res.send(renderizarListaSuperheroes(superheroes));
}

export function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = obtenerSuperheroesMayoresDe30();
  res.send(renderizarListaSuperheroes(superheroes));
}
