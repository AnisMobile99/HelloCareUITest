export const generateWeekDays = (): { date: string; day: string }[] => {
  const today = new Date();
  const week = [];
  const options = { weekday: "long", day: "numeric", month: "short" } as const;

  for (let i = 0; i < 6; i++) {
    const currentDate = new Date();
    currentDate.setDate(today.getDate() + i);
    week.push({
      day: currentDate.toLocaleDateString("fr-FR", { weekday: "long" }),
      date: currentDate.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short",
      }),
    });
  }

  return week;
};
