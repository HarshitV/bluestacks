import React from 'react'
import CampaignCard from './CampaignCard';
import './CampaignList.css'

const CampaignList = props => {
    const { language } = props;
    const renderData = () => {
        const { reschedule, showHidePopup, id, campaignList } = props;
        let myList = [];
        myList = <CampaignCard reschedule={reschedule} showHidePopup={showHidePopup} campaignList={campaignList} language={language} id={id} />
        return myList;
    }

    return (
        <div className="campaign-card">
            <div className="card-content card-header">
                <div>{language.date}</div>
                <div>{language.campaign}</div>
                <div>{language.view}</div>
                <div>{language.actions}</div>
            </div>
            <div className="card-data">
                {renderData()}
            </div>
        </div>
    )
}

export default CampaignList
