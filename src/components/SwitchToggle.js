import React, { useContext } from 'react';
import { BulbOutlined } from '@ant-design/icons';
import { ThemeContext } from '../contexts/ThemeContext';

const SwitchToggle = () => {
    const { changeTheme } = useContext(ThemeContext);
    return (
        <div className="switchToggle" onClick={changeTheme} style={{ cursor: 'pointer' }}>
            <BulbOutlined />
        </div>
    )
}

export default SwitchToggle;