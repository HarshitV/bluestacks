export const getDayDifferenceForOne = (campaign, id) => {
    const campaignDate = new Date(campaign.createdOn);
    const today = new Date();
    const diff = parseInt((today - campaignDate) / (1000 * 60 * 60 * 24), 10);
    if((id === 1 && diff < 0) || (id === 2 && diff === 0) || (id === 3 && diff > 0)) 
        return campaign;
    return null;
}

export const getDayDifference = (campaignList, id) => {
    let filteredList = campaignList.filter(campaign => {
        return getDayDifferenceForOne(campaign, id);
    });
    return filteredList;
}

export const getDayMessage = (id, diff, language) => {
    let number = Math.abs(diff);
    let period = language.period[0];
    if(number>=365) {
        number=parseInt(number/365);
        period = language.period[2]
    }
    else if(number>=30) {
        number=parseInt(number/31);
        period = language.period[1]
    }
    if(number>1)
        period+=language.period[3];
    if(id === 1)
        number = number + " " + period + " " + language.period[4];
    else if(id === 2)
        number = language.period[5];
    else if(id === 3)
        number = number + " " + period + " " + language.period[6];
    return number;
}