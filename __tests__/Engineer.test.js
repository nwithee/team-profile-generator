const Engineer = require('../lib/Engineer');

test ('create engineer object with github username', () => {
    const engineer = new Engineer ('Jane', 12345, 'jane.smith@company.com', 'Engineer', 'jsmith');

    expect(engineer.github).toEqual(expect.any(String));
});

test ('return engineers github', () => {
    const engineer = new Engineer ('Jane', 12345, 'jane.smith@company.com', 'Engineer', 'jsmith');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test ('return engineers role', () => {
    const engineer = new Engineer ('Jane', 12345, 'jane.smith@company.com', 'Engineer', 'jsmith');

    expect(engineer.getRole()).toBe("Engineer");
});