# Unique Email Addresses

### Brief

Every valid email consists of a local name and a domain name, separated by the `'@'` sign. Besides lowercase letters, the email may contain one or more `'.'` or `'+'`.

For example, in `"alice@leetcode.com"`, `"alice"` is the local name, and `"leetcode.com"` is the domain name.
If you add periods `'.'` between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

For example, `"alice.z@leetcode.com"` and `"alicez@leetcode.com"` forward to the same email address.
If you add a plus `'+'` in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, `"m.y+name@email.com"` will be forwarded to `"my@email.com"`.
It is possible to use both of these rules at the same time.

Given an array of strings `emails` where we send one email to each `emails[i]`, return the number of different addresses that actually receive mails.

Example 1:

```
Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
```

Example 2:

```
Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3
```

### Solution

```
const sanitiseLocalNames = (localName: string) => {
    let sanitisedLocalName = localName;
    if(localName.includes('+')){
        const splitPoint = localName.indexOf('+');
        sanitisedLocalName = localName.slice(0, splitPoint);
    };
    sanitisedLocalName = sanitisedLocalName.replace(/\./g, '');
    return sanitisedLocalName;
}

const numUniqueEmails = (emails: string[]): number => {
    const sanitisedEmails = [];

    for(let i = 0; i < emails.length; i++){
        const splitPoint = emails[i].indexOf('@');
        const localName = emails[i].slice(0, splitPoint);
        const domainName = emails[i].slice(splitPoint, emails[i].length);
        const sanitisedEmail = sanitiseLocalNames(localName) + domainName;
        sanitisedEmails.push(sanitisedEmail)
    };

    const uniqueEmails = sanitisedEmails.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

    return uniqueEmails.length;
};
```

#### Description

- Firstly, we create a variable called `sanitisedEmails` which will be initialised to an empty array. This will be used to hold all emails after they have been sanitised.
- Loop through all emails:
- Firstly, finding the `splitPoint` of each email. The split point is the point in which the `@` symbol occurs as this is what separates local name and the domain name.
- We then split the emails up by the local name and domain name and assign them to the respective variables.
- As rules apply only to the local name we need to sanitise only the local name. To do this we run the local name through the `sanitiseLocalNames` which will remove the `.` from emails and remove all characters after `+`.
- The sanitised emails are then pushed to the `sanitisedEmails` array.
- They are then filtered so that only the unique emails are left.
- The length of this new filtered list of unique emails are returned.

#### Time Complexity

The time complexity of the given code can be analyzed as follows:

The `sanitiseLocalNames` function:

1. The `includes` method has a time complexity of `O(n)`, where `n` is the length of the string localName.
2. The `indexOf` method has a time complexity of `O(n)`, where `n` is the length of the string localName.
3. The `slice` method has a time complexity of `O(k)`, where `k` is the length of the extracted substring.
4. The `replace` method has a time complexity of `O(m)`, where `m` is the length of the string `sanitisedLocalName`.
   Overall, the time complexity of the `sanitiseLocalNames` function is `O(n + k + m)`.

The `numUniqueEmails` function:

1. The `indexOf` method has a time complexity of `O(n)`, where `n` is the length of each email string in the `emails` array.
2. The `slice` method has a time complexity of `O(k)`, where `k` is the length of the extracted substring.
3. The `sanitiseLocalNames` function has a time complexity of `O(n + k + m)`, as analyzed above.
4. The push method inside the loop has an amortized time complexity of `O(1)`.
5. The `filter` method has a time complexity of `O(p^2)`, where `p` is the length of the `sanitisedEmails` array.

Overall, the time complexity of the `numUniqueEmails` function is `O(n^2 + k^2 + m^2 + p^2)`, considering the worst-case scenario.

Therefore, the overall time complexity of the given code is dominated by the worst-case time complexity of the `numUniqueEmails` function, which can be simplified to `O(n^2)`.

#### Other Potential Solutions

```
var numUniqueEmails = function(emails) {
  const valid=emails.map(email=>{
       const [local, domain] = email.split('@');
       return local.split('+').shift().split('.').join('')+'@'+domain;
  });

  const set=new Set(valid)
  return set.size
};

```

#### Link

https://leetcode.com/problems/unique-email-addresses/
