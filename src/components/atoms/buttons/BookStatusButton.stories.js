import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BookStatusButton from './BookStatusButton';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../themes/theme';

export default {
  title: 'BookStatusButton',
  component: BookStatusButton,
   argTypes: {
     state : { options : ['currentlyReading', 'finished'], control: 'radio' },
     buttonStyles : { options : ['bookStatusButtonStyle','bookStatusButtonActive'] , control : 'select' },
     buttonContainerStyles : { options : ['gridItemContainerForInactiveButton','gridItemContainerForActiveButton'] , control : 'select'},
     children : { control : 'text'}
   },
};

const Template = (args) => (
<ThemeProvider theme={theme}>
<BookStatusButton {...args} />
</ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  state: 'currentlyReading',
  children : 'currentlyReading'
};