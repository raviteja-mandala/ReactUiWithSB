import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    width: "100%",
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    height: 100,
    display: "block"

    //  zIndex : 2
  },
  blinkistbody: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },

  categoryName: {
    "&:hover": {
      color: "blue",
      backgroundColor: "#f2f2f2"
    },
    color: "black",
    paddingTop: 10,
    paddingBottom: 10
  },

  categoryLink: {
    textDecoration: "none"
  },

  dialogContainer: {
    width: "100%",
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    height: 400,
    backgroundColor: "#f2f2f2"
  },

  exploreTable: {
    position: "fixed",
    left: 0,
    right: 0,
    backgroundColor: "#f2f2f2",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    top: 60,
    zIndex: 2
  },

  hideTable: {
    display: "none"
  },

  tableContainer: {
    marginLeft: 300,
    marginTop: 30,
    marginRight: 300
  },

  exploreHeaderTitles: {
    paddingTop: 5,
    paddingBottom: 5,
    border: "none",
    "&:hover": {
      color: "blue",
      backgroundColor: "#f2f2f2"
    },

    headerTitlesContainer: {
      borderBottom: 2,
      marginBottom: 5
    },

    categoriesContainer: {
      marginTop: 5,
      marginBottom: 10
    }
  }
}));

// const innerTheme = createMuiTheme({
//   overrides : {
//   MuiDialog : {
//     container : {
//     marginTop : 60,
//     height : 400,
//     width : '100%'
//   },
//   root : {
//     marginTop : 60,
//     height : 400,
//     width : '100%'
//   }
// }
// }});

function ExploreDialog(props) {
  const classes = useStyles();
  const [categories, setCategories] = useState(() => {
    return [];
  });
  const [allBooks, setAllBooks] = useState(() => {
    return [];
  });
  const refresh = props.open;
  const categoriesArray = [];
  const allBooksArray = [];
  const handleDialogClose = () => {
    props.onclose(false);
  };

  //  const overlayStyle =

  const fetchCategories = () => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => {
        data.map((book) => {
          categoriesArray.push(book.category);
          allBooksArray.push(book);
        });
        setCategories([...new Set(categoriesArray)]);
        setAllBooks([...allBooksArray]);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, [refresh]);

  return (
    // <ThemeProvider theme={innerTheme}>
    // <Dialog  open={props.open} onClose={handleDialogClose} hideBackdrop={true}  classes={{container : classes.dialogContainer}}>
    //     <DialogContent classes={{root : classes.dialogContent}}>

    <Box
      className={props.open === true ? classes.exploreTable : classes.hideTable}
    >
      <Box className={classes.tableContainer}>
        <Grid container direction="column">
          <Box borderBottom={0.05}>
            {" "}
            <Grid
              item
              container
              direction="row"
              className={classes.headerTitlesContainer}
            >
              <Grid item xs={3}>
                <Button className={classes.exploreHeaderTitles}>
                  Explore by category
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button className={classes.exploreHeaderTitles}>
                  See recently added titles
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button className={classes.exploreHeaderTitles}>
                  See popular titles
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Grid item container className={classes.categoriesContainer}>
            {categories.map((category) => {
              return (
                <Grid item xs={4}>
                  <Link
                    to={{ pathname: `/explore/${category}` }}
                    className={classes.categoryLink}
                    onClick={handleDialogClose}
                  >
                    <Box className={classes.categoryName}>{category}</Box>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  {
    /* </DialogContent>
            
        </Dialog>
        </ThemeProvider> */
  }
}

export default ExploreDialog;
