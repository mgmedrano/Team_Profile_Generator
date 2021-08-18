const Intern = require('../lib/Intern');

test('create an Intern object', () => {
    const intern = new Intern('Mike', 1, 'mike@email.com', 'UCSD');  
    expect(intern.school) .toEqual(expect.any(String));
});

test('get employee school', () => {
    const intern = new Intern('Mike', 1, 'mike@email.com', 'UCSD');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get role of employee', () => {
    const intern = new Intern('Mike', 1, 'mike@email.com', 'UCSD');
    expect(intern.getRole()).toEqual("Intern");
}); 