// code your solution here
const superbowlWin = (arry) => {
  const result = arry.find((arry) => arry.result === "W");
  return !!result ? result.year : undefined;
};