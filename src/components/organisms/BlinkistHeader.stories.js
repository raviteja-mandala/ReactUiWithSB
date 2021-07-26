import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes/theme";
import BlinkistHeader from "./BlinkistHeader";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "BlinkistHeader",
  component: BlinkistHeader,
  argTypes : {
          width : { control: 'number' },
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
    <BlinkistHeader {...args} />
 </ThemeProvider>
);



export const WideHeader = Template.bind({});
WideHeader.args = {
    width : 1440,
};


// export const MobileHeader = Template.bind({});
// MobileHeader.args = {
//     width : 550,
// };

