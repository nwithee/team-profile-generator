const Manager = require('../lib/Manager');

test('create manager object with office number', () => {
    const manager = new Manager ('Jane', 12345, 'jane.smith@company.com', '123T');

    expect(manager.officeNumber).toEqual(expect.any(String));
});

test('get office number from manager', () => {
    const manager = new Manager ('Jane', 12345, 'jane.smith@company.com', '123T');
    
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));  
});

test('get manager role', () => {
    const manager = new Manager ('Jane', 12345, 'jane.smith@company.com', '123T');
    
    expect(manager.getRole()).toBe('Manager');  
});