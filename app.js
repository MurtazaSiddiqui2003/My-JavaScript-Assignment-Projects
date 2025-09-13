var employees = [];
        var employeeId = 0;

        document.getElementById("addBtn").addEventListener("click", function () {
            var employeeName = document.getElementById("employee").value;
            if (employeeName) {
                var newEmployee = {
                    id: ++employeeId,
                    name: employeeName
                };
                employees.push(newEmployee);
                document.getElementById("employee").value = '';
                alert("Employee added: " + newEmployee.name);
            } else {
                alert("Please enter an employee name.");
            }
        });

        document.getElementById("getBtn").addEventListener("click", function () {
            var id = parseInt(prompt("Enter Employee ID:"));
            var employee = employees.find(emp => emp.id === id);
            if (employee) {
                document.getElementById("showEmployee").textContent = "Employee Found: " + employee.name;
            } else {
                document.getElementById("showEmployee").textContent = "Employee not found.";
            }
        });

        document.getElementById("delBtn").addEventListener("click", function () {
            var id = parseInt(prompt("Enter Employee ID to delete:"));
            employees = employees.filter(emp => emp.id !== id);
            document.getElementById("showEmployee").textContent = "Employee with ID " + id + " deleted.";
        });

        document.getElementById("totalBtn").addEventListener("click", function () {
            if (employees.length > 0) {
                document.getElementById("showEmployee").textContent = "Employees: " + employees.map(emp => emp.name).join(", ");
            } else {
                document.getElementById("showEmployee").textContent = "No employees found.";
            }
        });