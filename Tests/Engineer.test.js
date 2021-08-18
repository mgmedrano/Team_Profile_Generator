const Engineer = require('../lib/Engineer');

test('create an Engineer object', () => {
    const engineer = new Engineer('Mike', 1, 'mike@email.com', 'mgmedrano');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('get engineer github value', () => {
    const engineer = new Engineer('Mike', 1, 'mike@email.com', 'mgmedrano');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role of employee', () => {
    const engineer = new Engineer('Mike', 1, 'mike@email.com', 'mgmedrano');

    expect(engineer.getRole()).toEqual("Engineer");
});