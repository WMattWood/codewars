// Write a function that when given a URL as a string, parses out just the
// domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  // a regexp is used to match an occurrence of 'http://'
  // if a match is made, then the url is split with this string
  // the process is repeated with 'https://' and 'www.'
  url.match(/http:\/\//) ? url = url.split('http://')[1] : null
  url.match(/https:\/\//) ? url = url.split('https://')[1] : null
  url.match(/www./) ? url = url.split('www.')[1] : null
  
  // having stripped any prepending text off of the domain, we then
  // use a regexp to match all characters up to the first occurence
  // of a '.' character - this makes sure we cover any unpredictable
  // strings of terminating characters
  
  // we return this as our result
  return url.match(/[^.]+/)[0]
  
}

module.exports = domainName