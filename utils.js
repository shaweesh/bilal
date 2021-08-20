const moment = require("moment")

const salawat = require("./data/salawat.json");

let PrayerTime = {
  fajer: "",
  sunrise: "",
  dhuhur: "",
  asr: "",
  maghreb: "",
  Ishaa: "",
}

const getData=()=>{
  const day = ("0" + (new Date().getDate())).slice(-2);
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2)
  const year = new Date().getFullYear();
  let a = salawat.filter((b) => {
      return (b.month == month && b.day == day)
  });
  return a[0];
  
}




module.exports.getSalah = (daySaveTime) => {
  let _ = getData();
  if(daySaveTime == 1) {
    PrayerTime = {
        fajer: moment(`${_.fajer}`, 'hh:mm').add(1,'h').format("hh:mm"),
        sunrise: moment(`${_.sunrise}`, 'hh:mm').add(1,'h').format("hh:mm"),
        dhuhur: moment(`${_.dhuhur}`, 'hh:mm').add(1,'h').format("hh:mm"),
        asr: moment(`${_.asr} pm`, 'hh:mm a').add(1,'h').format("HH:mm"),
        maghreb: moment(`${_.maghreb} pm`, 'hh:mm a').add(1,'h').format("HH:mm"),
        Ishaa: moment(`${_.Ishaa} pm`, 'hh:mm a').add(1,'h').format("HH:mm"),
      }
    } else {
      PrayerTime = {
        fajer: moment(`${_.fajer}`, 'hh:mm').add(0,'h').format("hh:mm"),
        sunrise: moment(`${_.sunrise}`, 'hh:mm').add(0,'h').format("hh:mm"),
        dhuhur: moment(`${_.dhuhur}`, 'hh:mm').add(0,'h').format("hh:mm"),
        asr: moment(`${_.asr} pm`, 'hh:mm a').add(0,'h').format("HH:mm"),
        maghreb: moment(`${_.maghreb} pm`, 'hh:mm a').add(0,'h').format("HH:mm"),
        Ishaa: moment(`${_.Ishaa} pm`, 'hh:mm a').add(0,'h').format("HH:mm"),
      };
    }
  
  return PrayerTime;
};


module.exports.displayResult = (prayers) => {
  if (prayers) {
    console.log(
      `Prayer's time in Jerusalem, Palestine\nOn the day : ${new Date().toDateString()}`
    );
    console.table(prayers);
  }
};