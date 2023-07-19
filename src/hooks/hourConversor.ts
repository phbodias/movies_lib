export const HourConversor = (mins: number) => {
  const hrs = Math.floor(mins / 60);
  const min = mins % 60;
  const textohrs = `${hrs}`.slice(-2);
  const textomins = `00${min}`.slice(-2);

  return `${textohrs}h ${textomins}m`;
};

export default HourConversor;
