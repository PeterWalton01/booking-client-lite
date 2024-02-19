import moment from "moment";
/* Function Header
 *
 * function to format dates
 * @author Peter Walton
 * @param  {UTCDateString}
 * @return {string}
 */
export function formatDate(UTCDateString) {
  return moment.utc(UTCDateString).format("DD MMM yyyy - HH:mm");
}

export function pickerDate(UTCDateString) {
  console.log(UTCDateString);
  console.log(moment.utc(UTCDateString).format("DD/MM/yyyy HH:mm"));
  return moment.utc(UTCDateString).format("DD/MM/yyyy HH:mm");
}

export function timePart(UTCDateString) {
  return moment.utc(UTCDateString).format("HH:mm");
}

// var now  = "04/09/2013 15:00:00";
// var then = "02/09/2013 14:20:30";

// var ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
// var d = moment.duration(ms);
// var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

// // outputs: "48:39:30"
