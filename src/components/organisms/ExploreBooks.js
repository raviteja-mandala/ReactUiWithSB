import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";
import useBooksAxios from "./useBooksAxios";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
    flex: 1
  },
  blinkistbody: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
}));

function ExploreBooks(props) {
  const url = "http://localhost:3000";
  const [bookContext, setBookContext, error1, loading1] = useBooksAxios(
    url + "/userBooks",
    "get"
  );
  console.log("l-->" + JSON.stringify(bookContext));

  const [bookArray, setBookArray, error, loading] = useBooksAxios(
    url + "/books",
    "get"
  );
  const { category } = useParams();
  const classes = useStyles();
  const addBookToLibrary = (bk) => {
    fetch("http://localhost:3000/userBooks", {
      method: "POST",
      body: JSON.stringify({ ...bk, status: "currentlyReading" }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const localBookArray = [...bookContext];
        localBookArray.push(bk);
        console.log(localBookArray);
        setBookContext(localBookArray);
      })
      .catch((err) => console.log(err));
  };
  const userBooks = bookContext.map((book) => book.id);
  return loading ? (
    <p>loading...</p>
  ) : bookArray !== null ? (
    <Box className={classes.blinkistbody}>
      <Grid container className={classes.container}>
        {bookArray.map((book) => {
          console.log("z--" + book.id + "cat " + category);
          if (book.category === category && !userBooks.includes(book.id)) {
            console.log("inside loop" + book.id);
            return (
              <Grid item xs={4}>
                <BookCard
                  book={book}
                  onaddtolibrary={(bk) => {
                    addBookToLibrary(bk);
                  }}
                  myLibrary={false}
                ></BookCard>
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  ) : (
    error
  );
}

export default ExploreBooks;
