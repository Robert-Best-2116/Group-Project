const express = require('express');
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser');  //BL: cookie-parser dependency added to use cookies in express

require('dotenv').config(); //BL: Need to require the dotenv library in order to invoke its config function.

app.use(cookieParser()); //BL: Needed for cookie-parser dependency to send and read cookies with each request/response.
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));  //BL: Needed to update the cors app to use cookie-parser to send and read cookies with each request/response.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/application.routes')(app)
require('./routes/user.routes')(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
