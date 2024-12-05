dataText = document.querySelector('#data')

data = window.location.href.split("?")[1].split("&")
dataText.innerHTML = `Thank you for submitting a response ${data[0].split("=")[1]} ${data[1].split("=")[1]}.<br>We will be in contact with you shortly on this email: ${data[2].split("=")[1].replaceAll("%40","@")}.<br>We hope you enjoyed your visit on ${new Date(data[3].split("=")[1]).toDateString()}`