const palindrome = (str) => {
  let regex = /[~`!@#$%^&*(){}\[\] ;:"\'<,.>?\/\\|_+=-]/ig;
  let str2 = str.replace(regex, '').toLowerCase();
  let str3 = str.replace(regex, '').split('').reverse().join('').toLowerCase();
  return str2 === str3;
};