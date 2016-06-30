module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'rocknroll',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
