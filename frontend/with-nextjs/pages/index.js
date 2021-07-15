import React from "react";
import Head from "next/head";
import "rsuite/styles/less/index.less";
import Header from "../components/Header";
import FlashCards from "../components/FlashCards";
import { Button } from "rsuite";
import Link from 'next/link'

const Home = () => (
  <div>
    <Head>
      <title>Flashcards English</title>
    </Head>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "15px 25px 15px 25px",
        }}
      >
        <h1>Projekt zaliczeniowy Programowanie Aplikacji Webowych</h1>
        <p style={{ fontSize: 18 }}>
          <b>Strona do ćwiczenia słówek z angielskiego. </b> <br />
          Po przejściu na podstronę fiszki, trzeba podać polski odpowiednik{" "}
          <br />
          angielskiego słowa. Po poprawnej odpowiedzi wyświetla sie kolejne{" "}
          <br />
          słowo. Projekt stworzony przed Dominika Rettiga z użyciem technologii:
          <br />
          PHP, React, Next.js, JS, CSS, HTML, axios, MySQL
        </p>
        <div style={{ marginTop: 25 }}>
          <Link href='/flashcards'>
          <Button
            appearance="primary"
            color="blue"
          >
            Fiszki
          </Button></Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
