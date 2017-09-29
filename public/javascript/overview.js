$(document).ready(function () {
    $.get("/api/users", function (data) {
        //console.log(data);
        var userTable = $("#user-table");
        // userTable.empty()
        var line = "";
        for (var i = 0; i < data.length; i++) {
            line = "<tr class='user-login-link'><td>";
            line += "<a href='/user/" + data[i].id + "'>";
            line += data[i].username + "'s habits";
            userTable.append(line);
            /*var tableRow = $("<tr><td>");
            var rowSpan = $("<a>");
            rowSpan.append(data[i].username + "'s habits");
            rowSpan.attr("href", "/user/" + data[i].id);
            rowSpan.attr("class", "user-login-link");
            tableRow.append(rowSpan);
            userTable.append(tableRow);*/
        }
    })
});