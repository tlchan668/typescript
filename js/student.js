"use strict";
var student = /** @class */ (function () {
    function student(name, sat, active, major) {
        if (major === void 0) { major = 'General Studies'; }
        this.name = name;
        this.sat = sat;
        this.active = active;
        this.major = major;
    }
    return student;
}());
function studList() {
    var ctrl = document.getElementById("out");
    ctrl.innerText = "50";
    //create an array of 5 students
    var students = [
        new student("Traci", 1000, true, "math"),
        new student("Hon", 1500, false, "accounting"),
        new student("lin", 1400, true, "engineering"),
        new student("yi", 1000, true, "english"),
        new student("wen", 800, false, "animals")
    ];
    //display(students);
    var tbody = $("#studtbody");
    //make sure nothing else in the body of this routine
    tbody.html("");
    console.log("indisplay!");
    //iterate through our saved users to add rows to body of table
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var stud = students_1[_i];
        //construct our entire row in our table
        var tr = $("<tr></tr>");
        var tdName = "<td>" + stud.name + "</td>";
        //add to tr tag to inner html of tdId
        var tdSAT = "<td>" + stud.sat + "</td>";
        var tdActive = "<td>" + stud.active + "</td>";
        var tdMajor = "<td>" + stud.major + "</td>";
        tr.html(tdName + tdSAT + tdActive + tdMajor);
        tbody.append(tr);
        //call our dispaly routine in done after save
    }
}
