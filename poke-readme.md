## Exercise 1: PokeFetch
# PokeAPI with Express and EJS

The website utilizes EJS as view engine for the Express server. 
a POST request to "/search" fetches data from PokeAPI. It awaits for promise and if there is a result the data is rendered in res.render() method. Else if there is error it renders a "Pokemon Not Found" Error message.

