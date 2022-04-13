const Employee = require('../lib/Employee');

test ('create employee object', () => {
    const employee = new Employee('Jane', 12345, 'jane.smith@company.com');
    
    expect(employee.name).toBe('Jane');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test ('gets an employee name', () =>{
    const employee = new Employee('Jane', 12345,'jane.smith@company.com');

    expect(employee.getName()).toBe('Jane');
});

test ('gets an employee id', () =>{
    const employee = new Employee('Jane', 12345,'jane.smith@company.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test ('gets an employee email', () =>{
    const employee = new Employee('Jane', 12345,'jane.smith@company.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test ('gets an employee role', () =>{
    const employee = new Employee('Jane', 12345,'jane.smith@company.com');

    expect(employee.getRole()).toBe("Employee");
});
