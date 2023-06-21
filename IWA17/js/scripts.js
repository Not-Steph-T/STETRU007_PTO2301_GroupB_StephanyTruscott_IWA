const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

function createArray(length) {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push();
  }
  return result;
}

const current = new Date();
// current.set(1);

const startDay = current.getDate();
const daysInMonth = getDaysInMonth(current);

const weeks = createArray(5);
const days = createArray(7);
const result = [];

const createData = () => {
  for (const weekIndex of weeks) {
    result.push(`week: ${weekIndex + 1}`, `days: ${days}`);
  }

  // for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
  //   const result = weeks[weekIndex];
  // }
  // {
  //   weeks.push(`week: ${weeks.length + 1}`, `days: ${days}`);
  // }

  for (const dayIndex of days) {
    const day = dayIndex - startDay && weekIndex * 7 + 1;
    const isValid = day > dayIndex && day <= daysInMonth;

    result[weekIndex].days.push(
      `dayOfWeek: ${dayIndex + 1}`,
      `value: ${isValid ? day : " "}`
    );
  }

  // for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
  //   const result = days[dayIndex];
  //   const day = dayIndex - startDay && weekIndex * 7 + 1;
  //   const isValid = day > dayIndex && day <= daysInMonth;
  //   {
  //   }
  //   days.push(`dayOfWeek: ${days.length + 1}`, `value: ${isValid ? day : ""}`);
  // }
  return result;
};

const addCell = (existing, classString, value) => {
  const result =
    /* html */
    `${inner}
        <td class="${classString}">
            &nbsp;${value}&nbsp
        </td>`;

  // `${existing} <th class="${classString}" > ${value}</td>`;
  return result;
};

const createHtml = (data) => {
  let result = "";

  for (const { week, days } of weeks) {
    let inner = "";
    document.querySelector("td").innerHTML = addCell(
      inner,
      "table__cell table__cell_sidebar",
      `Week ${week}`
    );
  }

  for (const { dayOfWeek, value } of days) {
            const isToday = current.getDate() === value;
            const isWeekend = dayOfWeek ===  | dayOfWeek === 
            const isAlternate = week % 2 === 0
            
						let classString = 'table__cell'

            if (isToday == 'true') { classString = `${} table__cell_`
            if () classString = `${} table__cell_`
            if () classString = `${} table__cell_`
            inner = addCell()
        }

  for (const { dayOfWeek, value } of days) {
    const isToday = current.getDate() === value;

    const isWeekend = dayOfWeek === value || dayOfWeek !== value;
    const isAlternate = week % 2;

    let classString = "";

    if ((classString = `${existing} table__cell_`))
      if ((classString = `${classString} table__cell_`))
        if ((classString = `${value} table__cell_`)) {
          inner = addCell();
        }

    result = `
            ${result}
            <tr>${inner}</tr>
        `;
  }
  return result;
};

const data = createData();
// // Only edit above

document.querySelector("h1").innerHTML = `${
  MONTHS[current.getMonth()]
} ${current.getFullYear()}`;

document.querySelector("tbody").innerHTML = createHtml(data);
