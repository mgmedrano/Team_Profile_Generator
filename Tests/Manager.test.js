const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Mike', 1, 'mike@email.com', 3);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Mike', 1, 'mike@email.com');

    expect(manager.getRole()).toEqual("Manager");
}); 