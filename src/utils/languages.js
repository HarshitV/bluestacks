const languageData = {
    "EN": {
        name: "English",
        heading: "Manage Campaigns",
        statustab1: "Upcoming Campaigns",
        statustab2: "Live Campaigns",
        statustab3: "Past Campaigns",
        date: "DATE",
        campaign: "CAMPAIGN",
        view: "VIEW",
        actions: "ACTIONS",
        pricing: "View Pricing",
        report: "Report",
        schedule: "Schedule Again",
        period: ["day", "month", "year", "s", "ahead", "Ongoing", "ago"],
        popup: ["Pricing", "Week", "Close"]
    },
    "DE": {
        name: "German",
        heading: "Kampagnen verwalten",
        statustab1: "Kommende Kampagnen",
        statustab2: "Live-Kampagnen",
        statustab3: "Vergangene Kampagnen",
        date: "DATUM",
        campaign: "KAMPAGNE",
        view: "AUSSICHT",
        actions: "AKTIONEN",
        pricing: "Preise anzeigen",
        report: "Bericht",
        schedule: "Erneut planen",
        period: ["Tag", "Monat", "Jahr", "e", "voraus", "Laufend", "vor"],
        popup: ["Preisgestaltung", "Woche", "Schließen"]
    }
};

const languages = (language) => {
    return languageData[language];
}

export default languages;