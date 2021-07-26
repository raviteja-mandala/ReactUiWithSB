import React from "react";
import { BooksWithStatus } from "./BooksWithStatus";

//import { ThemeProvider } from "@material-ui/core/styles";
//import { theme } from "../themes/theme";
import  WindowContext  from "./WindowContext";

export default  {
  title: "BooksWithStatus",
  component: BooksWithStatus,
//   decorators: [
//     (Story, WindowContext) => (
//         <WindowContext.Provider value={{width : 1350, height : 949}}>
//         <Story/>
//      </WindowContext.Provider>
//     ),
//   ],
};

//BooksWithStatusComponent.displayName= "BooksWithStatus";

const Template = (args) => (
  <WindowContext.Provider value={{width : 1350, height : 949}}>
    <BooksWithStatus {...args} />
  </WindowContext.Provider>
);

export const SimpleBooksWithStatus = Template.bind({});
SimpleBooksWithStatus.args = {};

//export default BooksWithStatusComponent;
