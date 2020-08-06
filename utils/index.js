export const getDailyContentArray = (dailyImgsObj) => {
  const colors = ['#37308c', '#fd337f','#8b00e9','#00b19a','#046afa','#eea802','#18b636', '#8e702f'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  let dailyImgArray = [];
  for (let i = 0; i < days.length; i++) {
    for (let imgDayKey in dailyImgsObj) {
      if (imgDayKey === days[i]) {
        dailyImgArray.push(dailyImgsObj[imgDayKey]);
      }
    }
  }

  for (let i = 0; i < dailyImgArray.length; i++) {
    for (let row in dailyImgArray[i]) {
      for (let j = 0; j < dailyImgArray[i][row].length; j++) {
        let randomIndex = Math.floor(Math.random() * colors.length);
        dailyImgArray[i][row][j].color = colors[randomIndex];
      }
    }
  }

  return dailyImgArray;
}