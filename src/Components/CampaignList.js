import React, {useState} from 'react'
import CampaignCard from './CampaignCard';
import './CampaignList.css'

const CampaignList = props => {

    const renderData = () => {
        const {reschedule, showHidePopup, id, campaignList} = props;
        let myList = [];
        myList = <CampaignCard reschedule = {reschedule} showHidePopup = {showHidePopup} campaignList = {campaignList} id = {id}/>        
        return myList;
    }

    return (
        <div className = "campaign-card">
            <div className = "card-content card-header">
                <div>DATE</div>
                <div>CAMPAIGN</div>
                <div>VIEW</div>
                <div>ACTIONS</div>
            </div>
            <div className = "card-data">
                {renderData()}
            </div>
        </div>
    )
}

export default CampaignList
