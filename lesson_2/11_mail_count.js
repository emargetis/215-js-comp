let { emailData } = require('./11_email_data.js');

function mailCount(emailData) {
  let emailArr = emailData.split('##||##');
  let dateRange = calculateDateRange(emailArr);
  
  console.log(`Count of Email: ${emailArr.length}`);
  console.log(`Date Range: ${dateRange}`);
}

function calculateDateRange(emailArr) {
  let sortedDates = emailArr.map(email => {
    let emailParts = email.split('#/#');
    return emailParts[2].match(/\d\d-\d\d-\d\d\d\d/)[0];
  }).sort();
  
  let formattedDates = sortedDates.map(date => {
    let dateComponents = date.split('-');
    return new Date(dateComponents[2] + '-' + dateComponents[0] + '-' + dateComponents[1])
                   .toDateString();
  });
  
  return `${formattedDates[0]} - ${formattedDates[formattedDates.length - 1]}`;
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016