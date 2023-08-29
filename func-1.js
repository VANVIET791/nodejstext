function hello() {
    console.log('Hello Nodejs');
    return 'Hello Nodejs';
  };

  function hi() {
    console.log('hi Nodejs');
    return 'hi Nodejs';
};
  
module.exports = {
    hello,
    hi,
  };