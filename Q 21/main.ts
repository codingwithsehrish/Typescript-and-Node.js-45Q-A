// QUESTIION 21:
// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

// CRETING AN OBJ:
interface ITCOURSE {
    CourseName:string;
    Location: string;
    OnSiteStudents:number;
}
let ITCOURSE = {
    CourseName:"typscript and javascript",
    Location: "Gover House Sindh",
    OnSiteStudents: 50000 
}
console.log(ITCOURSE);