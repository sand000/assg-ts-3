interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

// object
let data: Admin = {
    type: 'admin',
    name:"sand",
    age: 20,
    role:"manager"
}

function adding(type:string,name: string,age: number,role: string){
    return type,name,age,role;;
}

let obj: Admin = adding;
let result = obj("admin", "sand", 22, "manager");
console.log(result);


