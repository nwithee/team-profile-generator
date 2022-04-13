const Intern = require('../lib/Intern');

test('create intern object with school', () => {
    const intern = new Intern('Jane', 12345, 'jane.smith@company.com', 'Intern','U of MN');

    expect(intern.school).toBe('U of MN');
})

test('get interns school', () => {
    const intern = new Intern('Jane', 12345, 'jane.smith@company.com','Intern', 'U of MN');

    expect(intern.getSchool()).toBe('U of MN');
})

test('get interns role', () => {
    const intern = new Intern('Jane', 12345, 'jane.smith@company.com','Intern', 'U of MN');

    expect(intern.getRole()).toBe("Intern");
})