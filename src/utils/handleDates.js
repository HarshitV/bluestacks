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

export const getDayMessage = (id, diff) => {
    let number = Math.abs(diff);
    let period = "day";
    if(number>=365) {
        number=parseInt(number/365);
        period = "year"
    }
    else if(number>=30) {
        number=parseInt(number/31);
        period = "month"
    }
    if(number>1)
        period+="s";
    if(id === 1)
        number = number + " " + period + " ahead";
    else if(id === 2)
        number = "Ongoing";
    else if(id === 3)
        number = number + " " + period + " ago";
    return number;
}