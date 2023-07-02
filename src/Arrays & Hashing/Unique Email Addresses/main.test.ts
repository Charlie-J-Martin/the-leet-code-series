import { numUniqueEmails, sanitiseLocalNames } from './main';

describe('sanitiseLocalNames', () => {
  test('Removes dot from localName', () => {
    const result = sanitiseLocalNames('john.doe');
    expect(result).toBe('johndoe');
  });

  test('Handles localName without dot', () => {
    const result = sanitiseLocalNames('janedoe');
    expect(result).toBe('janedoe');
  });

  test('Removes dot and everything after + from localName', () => {
    const result = sanitiseLocalNames('john.doe+extra');
    expect(result).toBe('johndoe');
  });

  test('Handles localName without dot and with +', () => {
    const result = sanitiseLocalNames('janedoe+extra');
    expect(result).toBe('janedoe');
  });

  test('Handles empty localName', () => {
    const result = sanitiseLocalNames('');
    expect(result).toBe('');
  });
});

describe('numUniqueEmails', () => {
  test('Returns the correct number of unique emails', () => {
    const emails = ['john.doe@example.com', 'jane.doe@example.com', 'john.doe@example.com'];
    const result = numUniqueEmails(emails);
    expect(result).toBe(2);
  });

  test('Handles an empty emails array', () => {
    const emails: string[] = [];
    const result = numUniqueEmails(emails);
    expect(result).toBe(0);
  });

  test('Handles emails with the same localName but different domainName', () => {
    const emails = ['john.doe@example.com', 'john.doe@example.org', 'john.doe@example.net'];
    const result = numUniqueEmails(emails);
    expect(result).toBe(3);
  });

  test('Handles emails with the same localName but different domainName after sanitization', () => {
    const emails = ['john.doe+extra@example.com', 'john.doe+extra@example.org', 'john.doe+extra@example.net'];
    const result = numUniqueEmails(emails);
    expect(result).toBe(3);
  });

  test('Handles emails with different localName and domainName', () => {
    const emails = ['john.doe@example.com', 'jane.doe@example.org', 'james.smith@example.net'];
    const result = numUniqueEmails(emails);
    expect(result).toBe(3);
  });
});
