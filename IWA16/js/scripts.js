const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const { NM372 } = data.response.data;
const { SV782 } = data.response.data;

function timeConvert(sum) {
  const hours = Math.floor(sum / 60);
  const minutes = sum % 60;
  return `${hours}${hours}:${minutes}`;
}

// Nwabisa Data
let date1 = data.response.data.NM372.races[1].date;
let dateA = new Date(date1);

const nwabisaDate = `${dateA.getDate()} ${
  MONTHS[dateA.getMonth()]
} ${dateA.getFullYear()}`;

const nwabisaRace = data.response.data.NM372.races;

const nwabisaTimeArray = data.response.data.NM372.races[1].time;
let nwabisaTime = 0;

nwabisaTimeArray.forEach((num) => {
  nwabisaTime += num;
  return timeConvert(nwabisaTime);
});

// Schalk Data
let date2 = data.response.data.SV782.races[3].date;
let dateB = new Date(date2);

const schalkDate = `${dateB.getDate()} ${
  MONTHS[dateB.getMonth()]
} ${dateB.getFullYear()}`;

const schalkRace = data.response.data.SV782.races;

const schalkTimeArray = data.response.data.SV782.races[3].time;
let schalkTime = 0;

schalkTimeArray.forEach((num) => {
  schalkTime += num;
  return timeConvert(schalkTime);
});

// Nwabisa HTML
const nwabisaTitle = document.createElement("h2");
nwabisaTitle.innerHTML = data.response.data.NM372.id;
document.querySelector("section").appendChild(nwabisaTitle);

const nwabisaList = document.createElement("dl");
nwabisaList.innerHTML = `
    <dt>Athlete</dt>
    <dd>${NM372.firstName} ${NM372.surname}</dd>

    <dt>Total Races</dt>
    <dd>${nwabisaRace.length}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${nwabisaDate}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${timeConvert(nwabisaTime)}</dd>
  `;
document.querySelector("section").appendChild(nwabisaList);

// Schalk HTML
const schalkTitle = document.createElement("h2");
schalkTitle.innerHTML = data.response.data.SV782.id;
document.querySelector("section").appendChild(schalkTitle);

const schalkLits = document.createElement("dl");
schalkLits.innerHTML = `
    <dt>Athlete</dt>
    <dd>${SV782.firstName} ${SV782.surname}</dd>

    <dt>Total Races</dt>
    <dd>${schalkRace.length}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${schalkDate}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${timeConvert(schalkTime)}</dd>
  `;
document.querySelector("section").appendChild(schalkLits);
