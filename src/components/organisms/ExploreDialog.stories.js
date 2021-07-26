import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes/theme";
import ExploreDialog from "./ExploreDialog";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "ExploreDialog",
  component: ExploreDialog,
  argTypes : {
          open : { control : 'boolean'}
      
  },
  decorators: [
    (Story) => (
        <BrowserRouter>
        <Story/>
     </BrowserRouter>
    ),
  ],
};

const Template = (args) => (
 <ThemeProvider theme={theme}>
    <ExploreDialog {...args} />
  </ThemeProvider>
);



export const ExploreDialogVisible = Template.bind({});
ExploreDialogVisible.args = {
    open : 'true'
};

