import React, { useContext } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../contexts/ThemeContext';

const SwitchToggle = () => {
    const { changeTheme } = useContext(ThemeContext);
    return (
        <div className="switchToggle" onClick={changeTheme}>

            <input type="checkbox"/>
            <label className="sun"><Icon icon={faSun}/></label>
            <label className="moon"><Icon icon={faMoon}/></label>

        </div>
    )
}

export default SwitchToggle;