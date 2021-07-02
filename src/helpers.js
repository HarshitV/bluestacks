import { getDayDifference } from "./utils/handleDates";

export const handleReschedule = (campaigns, date, campaign, id) => {
  let rescheduleList = [...campaigns];
  // Change campaign date for selected campaign
  rescheduleList[id - 1] = rescheduleList[id - 1].map((el) => {
    if (el.name === campaign.name) el.createdOn = date;
    return el;
  });
  // Compute difference in campaign date from current date
  // UPCOMING: diff < 0 | LIVE: diff = 0 | PAST: diff > 0
  let diff = getDayDifference(campaign);
  let upcoming = diff < 0 && id !== 1,
    live = diff === 0 && id !== 2,
    past = diff > 0 && id !== 3;
  // Remove rescheduled campaign from current tab IF belongs to different tab now
  if (upcoming || live || past)
    rescheduleList[id - 1] = rescheduleList[id - 1].filter(
      (el) => el.name !== campaign.name
    );
  // Prepend to the tab where it belongs
  if (upcoming) rescheduleList[0].unshift(campaign);
  else if (live) rescheduleList[1].unshift(campaign);
  else if (past) rescheduleList[2].unshift(campaign);
  return rescheduleList;
};
