import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import getPokemon from "./api/pokemon.js";

export default function Home({ pokemon, image }) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const arrayAlphabet = alphabet.toLowerCase().split("");
  const pokemonHide = pokemon.split("");
  console.log(pokemonHide);

  const [correctGuesses, setCorrectGuesses] = useState([]);

  const maskedWord = pokemonHide
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");

  const isValid = (alpha) => {
    if (pokemonHide.includes(alpha)) {
      console.log(alpha);
      setCorrectGuesses([...correctGuesses, alpha]);
    } else {
      console.log("You guessed incorrectly");
      return false;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Hangman</title>
      </Head>

      <main className={styles.main}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className={styles.title}>Who's that pokemon?</h1>
        <Image
          alt="pokemon-image"
          src={image}
          className={styles.pokemonImage}
          width="200px"
          height="200px"
        />
        <div className={styles.word}>
          <p className={styles.description}>{maskedWord}</p>
        </div>
        <div className={styles.buttonLetter}>
          {arrayAlphabet.map((alpha) => {
            return (
              <button
                onClick={() => isValid(alpha)}
                className={styles.btn}
                key={alpha}
              >
                {alpha}
              </button>
            );
          })}
        </div>
        {!maskedWord.includes("_") && <p>You won!</p>}
      </main>

      <footer className={styles.footer}>
        <a>Build by Patrick Cruz</a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getPokemon(Math.floor(Math.random() * 100) + 1);
  const pokemon = data.name;
  const image = data.sprites.other.dream_world.front_default;
  console.log(image);
  return {
    props: {
      pokemon,
      image,
    },
  };
}
