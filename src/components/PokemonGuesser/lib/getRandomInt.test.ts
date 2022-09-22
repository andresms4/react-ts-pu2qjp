import {getRandomInt} from "./getRandomInt";
import {MAX_POKEMON_QUANTITY} from "../../../constants";

test('Pokemon Guessing Image', async () => {
 const randomNumber = getRandomInt(MAX_POKEMON_QUANTITY)
 expect(randomNumber).toBeGreaterThan(0);
 expect(randomNumber).toBeLessThanOrEqual(MAX_POKEMON_QUANTITY);})