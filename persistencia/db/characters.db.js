const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://JotaCoder:<password>@developer.8snxjsn.mongodb.net/?retryWrites=true&w=majority',

  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);