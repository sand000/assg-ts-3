// object
var data = {
    type: 'admin',
    name: "sand",
    age: 20,
    role: "manager"
};
function adding(type, name, age, role) {
    return type, name, age, role;
    ;
}
var obj = adding;
var result = obj("admin", "sand", 22, "manager");
console.log(result);
