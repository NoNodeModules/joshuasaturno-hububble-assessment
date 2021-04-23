const search = document.getElementById("search");
const submit_button = document.getElementById("submit");


const getPokeData = async query =>{
  const res = await fetch(`https://pokeapi.co/api/v2/${query}`);

  res.status === 404 || res.statusText === 'notFound' && document.getElement
}