// Compute difference in campaign date from current date
// UPCOMING: diff < 0 | LIVE: diff = 0 | PAST: diff > 0
export const getDayDifference = (campaign) => {
  const campaignDate = new Date(campaign.createdOn);
  const today = new Date();
  const diff = parseInt((today - campaignDate) / (1000 * 60 * 60 * 24), 10);
  return diff;
};

// Sort all campaigns into 3 tabs 
// filteredList[0] - UPCOMING | filteredList[1] - LIVE | filteredList[2] - PAST
export const filterCampaigns = (campaignList) => {
  const filteredList = [[], [], []];
  campaignList.forEach((campaign) => {
    if (getDayDifference(campaign) < 0) filteredList[0].push(campaign);
    else if (getDayDifference(campaign) === 0) filteredList[1].push(campaign);
    else filteredList[2].push(campaign);
  });
  return filteredList;
};

// Handle days, months, years message logic
export const getDayMessage = (id, diff, language) => {
  let number = Math.abs(diff);
  let period = language.period[0];
  if (number >= 365) {
    number = parseInt(number / 365);
    period = language.period[2];
  } else if (number >= 30) {
    number = parseInt(number / 31);
    period = language.period[1];
  }
  if (number > 1) period += language.period[3];
  if (id === 1) number = number + " " + period + " " + language.period[4];
  else if (id === 2) number = language.period[5];
  else if (id === 3) number = number + " " + period + " " + language.period[6];
  return number;
};
