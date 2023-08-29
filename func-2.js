const hello = () => {
    console.log('Hello Nodejs');
    return 'Hello Nodejs';
  };

const hi = () => {
    console.log('hi Nodejs');
    return 'hi Nodejs';
};
  
  module.exports = {
    hello,
    hi,
};