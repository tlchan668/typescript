let a = 1000;
function x(){
    return 1;
}
let y = function (){
    return 0;
}
const Z = ()=> {
    return -1;
}
function X(){
    let ctrl = document.getElementById("out");
    ctrl.innerText= "500";
}
let a1: number = 5;
a1 = "abc";//this would be a problem on running
let b1: string = "ABC";
b1=true;//similar error but will let you compile
let c1: boolean =4;
//it will let you run it but may not run correctly

function x1(t: number): number {
    return t +4;
}
function x2(tt:number): void{

}

class Customer {
    id: number=0;
    name:string;
    active:boolean = true;
    sales: number;

    //constructor has set name constructor
    constructor(name: string = 'NEW Cust'){
        this.id=0;
        this.name=name;
        this.active=true;
        this.sales=1;
    }
    //methods in js and ts classes are like c#
    print(): void{
        console.log('${this.name}');
    }
}
