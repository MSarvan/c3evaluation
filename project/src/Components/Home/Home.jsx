import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import axios from 'axios';
import { useEffect, useState } from "react";
import styled from "styled-components";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then(({ data }) => {
    console.log(data);
  });
  }, []);
  
  const Main = styled.div`
    /* Apply some responsive styling to children */
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(4, 20%);

  `;


  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */
          list.map((e) => {
            return (
              <div>
                <img src={e.imageUrl} alt=""></img>
                <p> {e.title} </p>
                <p> {e.author} </p>
                <p> {e.price} </p>
                <p> {e.description} </p>
                <p> {e.isbnNumber} </p>
                <ul>
                  {e.reviews.map((a) => {
                    return <li>{a}</li>;
                  })}
                </ul>
              </div>
            );
          })
        }
      </Main>
    </div>
  );
};

//Get-ExecutionPolicy -List