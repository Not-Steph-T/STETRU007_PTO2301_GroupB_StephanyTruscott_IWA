export const TABLES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
];

export const COLUMNS = ["ordered", "preparing", "served"];

export const state = {
  orders: {},
  dragging: {
    source: null,
    over: null,
  },
};

const createUniqueId = () => {
  const random1 = Math.floor(Math.random() * 10000000000000000);
  const random2 = Math.floor(Math.random() * 10000000000000000);
  const timestamp = new Date().getTime();
  return `${random1}-${timestamp}-${random2}`;
};

/**
 *
 * @param {object} props
 * @returns {object}
 */
export const createOrderData = (props) => {
  const { title, table, column } = props;

  return {
    title,
    table,
    column,
    id: createUniqueId(),
    created: new Date(),
  };
};

/**
 * @param {object} newDragging
 */
export const updateDragging = (newDragging) => {
  const { source = state.dragging.source, over = state.dragging.over } =
    newDragging;
  if (over === state.dragging.over) return;

  state.dragging = {
    source,
    over,
  };
};
