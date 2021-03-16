function formatDate(date_object) {
  let date = date_object.getDate();
  let year = date_object.getFullYear();
  let month = date_object.getMonth() + 1;

  return `${month}-${date}-${year}`;
}

export default formatDate;
