import React from "react";

//import { ThemeProvider } from "@material-ui/core/styles";
//import theme from "../themes/theme";
import BookCard from "./BookCard";

export default {
  title: "BookCard",
  component: BookCard,
  argTypes : {
      book : {
          id : { control: 'number' },
          bookTitle : { control: 'string' },
          bookAuthor : { control: 'string' },
          reads : { control: 'string' },
          category : { control: 'string' },
          min : { control: 'number' },
          status : { control : 'string'},
          image : { control : 'string'}
      }
  },
};

const Template = (args) => (
 // <ThemeProvider theme={theme}>
    <BookCard {...args} />
 // </ThemeProvider>
);



export const LibraryBookCard = Template.bind({});
LibraryBookCard.args = {
    book : {
        id : 1,
        bookTitle : 'Cricket',
        bookAuthor : 'Kapil',
        reads : '20k',
        status : 'currentlyReading',
        category : 'Sports',
        min : 10,
        image : 'book_image1.png'
    }
};

// export const ExploreBookCard = Template.bind({});
// ExploreBookCard.args = {
//     ...ExploreBookCard.args,
//     myLibrary: false,
// };

 //BookCardComponent;
