import React, { useState } from 'react';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import AnimalList from './AnimalList/AnimalList.jsx';
import AnimalDetail from './AnimalDetail/AnimalDetail.jsx';
import Search from './Search/Search';
import { useMemo } from 'react';

const App = () => {

  const [animal, setAnimal] = useState(null)
  const [animals, setAnimals] = useState(null)
  const [zoos, setZoos] = useState(null)
  const [search, setSearch] = useState("")



  // useEffect(() => {
  //   const zvirataPromise = fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
  //     .then((response) => response.json()).then(data => data.zvirata)
  //   const zooPromise = fetch("https://lrolecek.github.io/zviratka-api/zoo.json")
  //     .then((response) => response.json()).then(data => data.zoo)
  //   Promise.all([zvirataPromise, zooPromise]).then(([zvirata, zoo]) => {

  //     const zoosById = Object.fromEntries(zoo.map(zoo => [zoo.id, zoo]))
  //     const animalsAndZoo = zvirata.map((zvire) => {
  //       return { ...zvire, zoo: zvire.zoo.map(id => zoosById?.[id]?.jmeno) }
  //     })
  //     setAnimals(animalsAndZoo)
  //     const animal = animalsAndZoo[0]
  //     setAnimal(animal)
  //   })
  // }, [])

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => {
        const animal = data.zvirata[0]
        setAnimals(data.zvirata)
        setAnimal(animal)
      })
  }, [])

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zoo.json")
      .then((response) => response.json())
      .then((data) => {
        const entries = data.zoo.map(zoo => [zoo.id, zoo])
        const zoosById = Object.fromEntries(entries)
        setZoos(zoosById)
      })
  }, [])

  const zooNames = animal?.zoo.map(id => zoos?.[id]?.jmeno).join(", ")

  const handleSearch = (e) => {
    setSearch(e)
  }

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <Search search={handleSearch} />

      <div className="container">

        <AnimalList viewDetail={setAnimal} animals={animals} search={search} />
        <AnimalDetail
          animal={animal} zooNames={zooNames} />
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
