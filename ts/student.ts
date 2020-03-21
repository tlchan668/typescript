class student {
    name:string;
    sat:number;
    active:boolean;
    major:string;

    constructor (name:string,sat:number, 
        active:boolean, 
        major:string = 'General Studies'){
        this.name=name;
        this.sat=sat;
        this.active=active;
        this.major=major;
    }
    
}
function studList(){

    let ctrl = document.getElementById("out");
    ctrl.innerText= "50"; 
    //create an array of 5 students
    
    let students: student[] = [
        new student("Traci", 1000, true, "math"),
        new student("Hon", 1500, false, "accounting"),
        new student("lin", 1400, true, "engineering"),
        new student("yi", 1000, true, "english"),
        new student("wen", 800, false, "animals")
    ];
       //display(students);
    let tbody =  $("#studtbody");
    //make sure nothing else in the body of this routine
    tbody.html("");   
    console.log("indisplay!");
    //iterate through our saved users to add rows to body of table
    for(let stud of students){
        //construct our entire row in our table
        let tr = $("<tr></tr>");
        let tdName = `<td>${stud.name}</td>`;
        //add to tr tag to inner html of tdId
        let tdSAT = `<td>${stud.sat}</td>`;
        let tdActive = `<td>${stud.active}</td>`;
        let tdMajor = `<td>${stud.major}</td>`;
        tr.html(tdName + tdSAT + tdActive + tdMajor);
        tbody.append(tr);
        //call our dispaly routine in done after save
    }
   
}


