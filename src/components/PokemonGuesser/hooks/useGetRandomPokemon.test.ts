import {act, renderHook} from "@testing-library/react";
import {useGetRandomPokemon} from "./useGetRandomPokemon";
import {useAllPokemons} from "../../../hooks/useAllPokemons";

test('useGetRandomPokemon', () => {
  const { result } = renderHook(() => useGetRandomPokemon());
  expect(result.current.randomPokemon).toBe(null);
});