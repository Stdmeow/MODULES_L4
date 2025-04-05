function sortString(str) {
    return str.replace(/\s+/g, '').split('').sort().join('');
  }
  
  module.exports = sortString;
  