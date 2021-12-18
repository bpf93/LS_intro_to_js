/*
Suppose you want to determine the day of the week that December 25 occurred on in 2012.
JavaScript's Date constructor creates objects that represent a time and date. The objects provide methods that let you work with those values. In particular, it's not hard to determine the day of the week that corresponds to a date:

> let date = new Date('December 25, 2012')
> date.getDay()
= 2

getDay returns a number for the day of the week: 0 represents Sunday, 1 represents Monday, and so on. In this case, we see that December 25, 2012, occurred on a Tuesday.

Getting a day name takes a bit more work, but it's not difficult:

function getDayOfWeek(date) {
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return daysOfWeek[date.getDay()];
}

let date = new Date('December 25, 2012');
console.log(getDayOfWeek(date)); // => Tuesday

After seeing that we had to implement getDayOfWeek(), you might think that JavaScript's developers somehow forgot to include such a useful method. They did, at least in the earliest versions of JavaScript. These days, you can use the toLocaleDateString method of the Date type. It's a bit awkward to use, but it has multi-language support and a host of other features. However, full support may be lacking in some browsers.
*/