import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeBodyProvider extends  Component{

    state = {
        isLightTheme: true,
        light:{ syntax: '#444452', bgColor:'#fff'},
        dark:{ syntax: '#e7e7e7', bgColor:'#171c28'}
    };

    changeTheme = () =>{
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }

    render(){

        return (
            <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )   

    }

}

export default ThemeBodyProvider;