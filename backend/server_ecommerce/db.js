const mongoose =require('mongoose');

//var mongoURL = "mongodb+srv://1234:1234@ecommercecluster.ann95.mongodb.net/cse446?retryWrites=true&w=majority";
//var mongoURL = "mongodb+srv://sabiha:sabiha@cluster0.culiwtm.mongodb.net/cse446?retryWrites=true&w=majority";
var mongoURL = "mongodb+srv://sabiha:sabiha@cluster0.culiwtm.mongodb.net/cse446"


//mongoose.connect( mongoURL,{useUnifiedTopology:true, useNewUrlParser:true});
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => console.log('DB Connected'));

mongoose.connection.on('error', (err) => {
  console.log(`DB connection error: ${err.message}`);
});


module.exports = mongoose