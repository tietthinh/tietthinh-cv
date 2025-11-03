export const formatDate = (dateString: string | null) => {
  const date = new Date(dateString || new Date());
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${month}-${year}`;
};

export const getDuration = (fromDate: string, toDate: string | null) => {
  const start = new Date(fromDate);
  const end = new Date(toDate || new Date());

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
};

export const buildDurationText = ({
  days,
  months,
  years,
}: {
  years: number;
  months: number;
  days: number;
}) => {
  let result = "";
  if (years > 0) result += ` ${years} ${years > 1 ? "years" : "year"}`;
  if (months > 0) result += ` ${months} ${months > 1 ? "months" : "month"}`;
  if (days > 0) result += ` ${days} ${days > 1 ? "days" : "day"}`;

  return result.trim();
};
