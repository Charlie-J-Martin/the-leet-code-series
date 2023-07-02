export const sanitiseLocalNames = (localName: string) => {
  let sanitisedLocalName = localName;
  if(localName.includes('+')){
      const splitPoint = localName.indexOf('+');
      sanitisedLocalName = localName.slice(0, splitPoint);
  };
  sanitisedLocalName = sanitisedLocalName.replace(/\./g, '');
  return sanitisedLocalName;
}

export const numUniqueEmails = (emails: string[]): number => {
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
