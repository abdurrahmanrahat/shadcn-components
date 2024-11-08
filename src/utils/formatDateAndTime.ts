export const formatDateAndTime = (date: string) => {
  const formatDate = new Date(date);

  // Format date
  const formattedDate = formatDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Format time
  const formattedTime = formatDate.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return {
    formattedDate,
    formattedTime,
  };
};
