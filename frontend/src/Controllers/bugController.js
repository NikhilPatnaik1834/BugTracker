import bugModel from '../Models/bugModel';

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:23456789,
        name:"Crash on load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Nikhil Patnaik",
        creator:"John Doe",
        priority:1,
        time:"17:55"
    }))
    data.push(new bugModel({
        _id:23456789,
        name:"Wont load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Nik",
        creator:"John Doe",
        priority:3,
        time:"17:55"
    }))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority});
    return sorted;

}