function formatDateTest(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}/${month}/${year}`;
}

// Refactor Extract Function

function formatDate(date) {
  const year = getYear();
  const month =  getMonth();
  const day = getDay();
  return `${day}/${month}/${year}`;
}

function getYear(date) {
  return date.getFullYear();
}

function getMonth(date) {
  return date.getMonth() + 1;
}

function getDay(date) {
  return date.getDate();
}