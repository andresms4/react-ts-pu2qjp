import {render} from '@testing-library/react'
import {PokemonGuessingImage} from "./PokemonGuessingImage";
import {ResultState} from "../types";
import 'jest-styled-components'
import {prettyDOM} from '@testing-library/dom'

test('Should render', async () => {
  render(<PokemonGuessingImage isGuessing={false} pokemon={{id: 1}} state={ResultState.GUESSING}/>)
})

test('guessing', async () => {
  render(<PokemonGuessingImage isGuessing={false} pokemon={{id: 1}} state={ResultState.GUESSING}/>)
  const testImage = document.querySelector("img") as HTMLImageElement;
  expect(testImage).toHaveStyleRule('background', 'black');
})

test('not guessing', async () => {
  render(<PokemonGuessingImage isGuessing={false} pokemon={{id: 1}} state={ResultState.SUCCESS}/>)
  const testImage = document.querySelector("img") as HTMLImageElement;
  expect(testImage).toHaveStyleRule('background', 'white');}
)