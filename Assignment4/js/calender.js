var calendar = {
    header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>TH</th><th>F</th><th>SA</th></tr><tr>",
    displayCalendar: function() {
        var ele = document.getElementById("calendar");
        var calendarText = "<table class='table table-condensed'>";
        
        for(var i = 1; i <= 31; i++){
            this.header += "<th>"+ i +"</th>"
            if (i%7==0) {
                this.header +="<tr></tr>"
            }
        }
        calendarText += this.header;
        calendarText += "</table>"
        ele.innerHTML = calendarText;
    }

}
calendar.displayCalendar();