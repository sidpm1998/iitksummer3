
export class FileService {
    getFiles() {
        return [
        { 
            fileUrl: "https://www.google.co.in/?gfe_rd=cr&ei=nX5PWdOaFaTy8Afct4qYCw",
            imageUrl: "http://lorempixel.com/100/100/people?1",
            author:"Siddhanta",
            email:"sidpm@iitk.ac.in",
            subject:"PHY 103", 
            type:"Assignment", 
            year:"2016-2017",
            sem:"Semester II",
            totalLikes: 0,
            iLike: false
        },
        { 
            fileUrl: "http://getbootstrap.com/",
            imageUrl: "http://lorempixel.com/100/100/people?2",
            author: "Pratyush",
            email: "dpraty@iitk.ac.in",
            subject:"MTH 101",
            type:"Lecture Notes",
            year:"2016-2017",
            sem:"Semester I",
            totalLikes: 5,
            iLike: true
        },
        {   
            fileUrl: "jsonplaceholder.typicode.com",
            imageUrl: "http://lorempixel.com/100/100/people?3",
            author: "Jha2",
            email: "karan@iitk.ac.in",
            subject: "MTH 102",
            type:"Lecture Video",
            year:"2016-2017",
            sem:"Semester II",
            totalLikes: 1,
            iLike: true
        }];
    }
}