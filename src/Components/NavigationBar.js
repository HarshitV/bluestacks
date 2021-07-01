import React from 'react'
import './NavigationBar.css'

const NavigationBar = props => {

    const renderNavigationList = () => {
        const {activeTab, handleActiveTab, language} = props;
        const navList = [language.statustab1, language.statustab2, language.statustab3];
        const renderList = [];
        for(let i=1;i<=navList.length;i++) {
            renderList.push(<div key = {i} className = {activeTab === i? "active-tab" : "inactive-tab"} onClick = {() => handleActiveTab(i)}>{navList[i-1]}</div>)
        }
        return renderList;
    }

    return (
        <div className = "nav-bar">
            {renderNavigationList()}
        </div>
    )
}

export default NavigationBar
