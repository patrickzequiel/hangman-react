export default function getPokemon(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) =>
    res.json()
  );
  // .then((res) => res.map((result) => console.log("RES IS " + result.title)));
}
