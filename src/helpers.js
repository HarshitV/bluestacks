import { getDayDifferenceForOne } from "./utils/handleDates";

export const handleReschedule = (campaigns, date, campaign, id) => {
  let rescheduleList = [...campaigns];
  rescheduleList[id - 1] = rescheduleList[id - 1].map((el) => {
    if (el.name === campaign.name) el.createdOn = date;
    return el;
  });
  let diff = getDayDifferenceForOne(campaign);
  let upcoming = diff < 0 && id !== 1,
    live = diff === 0 && id !== 2,
    past = diff > 0 && id !== 3;
  if (upcoming || live || past)
    rescheduleList[id - 1] = rescheduleList[id - 1].filter(
      (el) => el.name !== campaign.name
    );
  if (upcoming) rescheduleList[0].unshift(campaign);
  else if (live) rescheduleList[1].unshift(campaign);
  else if (past) rescheduleList[2].unshift(campaign);
  return rescheduleList;
};
