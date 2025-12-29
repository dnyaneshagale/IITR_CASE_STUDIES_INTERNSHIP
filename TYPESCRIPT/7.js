var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
var staffMembers = [{
        id: 1, name: "Dnyanesh", role: Role.Admin
    }
];
function printSummary(staff) {
    console.log("ID:", staff.id, "Name:", staff.name, "Role:", staff.role);
}
printSummary(staffMembers[0]);
