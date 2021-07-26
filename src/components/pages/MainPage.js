import React from 'react'
import Body from '../molecules/Body'
import BlinkistHeader from '../organisms/BlinkistHeader'
import MainTemplate from '../templates/MainTemplate'
import { Box } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import theme from '../themes/theme'
import { ThemeProvider } from '@material-ui/styles' 
import useWindowSize from '../organisms/useWindowSize'
import WindowContext from '../organisms/WindowContext'

function MainPage() {
    const dimensions = useWindowSize({});
    console.log('width -->'+dimensions.width+'height-->'+dimensions.height);
    return (
        <React.Fragment>
            <WindowContext.Provider value={dimensions}>
            <ThemeProvider theme={theme}>
        <BrowserRouter>
        <MainTemplate
            header = {<BlinkistHeader />} body = { <Body />} dimensions={dimensions} >
        </MainTemplate></BrowserRouter>
        </ThemeProvider>
        </WindowContext.Provider></React.Fragment>
    )
}

export default MainPage
