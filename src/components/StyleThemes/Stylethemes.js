import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const themes = {
    darkThemes: {
        backgroundColor: '#000',
        color: '#fff',
    },
    lighThemes: {
        backgroundColor: '#fff',
        color: '#000',
    },
}

export default class Stylethemes extends Component {
    state = {
        currentTheme: themes.darkThemes,
    }

    render() {


        const DivStyle = styled.div`
            background-color: ${(props) => props.theme.backgroundColor};
            color: ${(props) => props.theme.color};
            font-size:1rem;
        `


        return (
            <>
                <ThemeProvider theme={this.state.currentTheme}>
                    <DivStyle>
                        Helo
                    </DivStyle>
                </ThemeProvider>
                <select
                    onChange={(e) => {
                        const { value } = e.target;
                        this.setState({
                            currentTheme: themes[value]
                        })
                    }}>
                    <option value={"lighThemes"}>light theme</option>
                    <option value={"darkThemes"}>dark theme</option>
                </select>
            </>

        )
    }
}
