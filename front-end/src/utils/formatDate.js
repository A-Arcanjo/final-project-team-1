export const formatDate = (date) => {
  const eventDate = new Date(date);
  const day = eventDate.getDate();
  const month = eventDate.getMonth() + 1;
  const year = eventDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};
