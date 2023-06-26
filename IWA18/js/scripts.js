/**
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

const handleDragStart = (event) => {};

const handleDragEnd = (event) => {};

const handleHelpToggle = (event) => {
  const { target } = event;
  if (target == html.other.help) {
    html.help.overlay.showModal();
  }
  if (target == html.help.cancel) {
    html.help.overlay.close();
  }
};

const handleAddToggle = (event) => {
  const { target } = event;
  if (target == html.other.add) {
    html.add.overlay.showModal();
  }
  if (target == html.add.cancel) {
    html.add.overlay.close();
  }
};

const handleAddSubmit = (event) => {
  event.preventDefault();
  const data = {
    title: html.add.title.value,
    table: html.add.table.value,
    column: html.edit.column.value || html,
  };
  const props = createOrderData(data);
  const content = createOrderHtml(props);
  const orderedColumn = document.querySelector('[data-area="ordered"]');
  const orderedDiv = orderedColumn.querySelector('[data-column="ordered"]');
  orderedDiv.appendChild(content);
  handleAddToggle();
};

const handleEditToggle = (event) => {
  const { target } = event;
  const opened = document.querySelector(".order");
  if (target == opened) {
    html.edit.overlay.showModal();
  }
  if (target == html.edit.cancel) {
    html.edit.overlay.close();
  }
};

const handleEditSubmit = (event) => {};
const handleDelete = (event) => {};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
