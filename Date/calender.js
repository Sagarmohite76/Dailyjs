function printCalendar() {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDay();

    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month, 0).getDate();
    let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    console.log("   ", Months[month], year);
    console.log("Su Mo Tu We Th Fr Sa");
    let calendar = "";
    for (let i = 1; i < firstDay; i++) {
        calendar += "    "
    }
    for (let date = 1; date <= lastDate; date++) {
        calendar += date.toString().padStart(2, " ") + " ";
        if ((firstDay + date) % 7 == 0) {
            calendar += "\n"
        }

    }
    console.log(calendar);


}
printCalendar();