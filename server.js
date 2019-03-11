const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const db = require('./models')
const exphbs = require('express-handlebars');
let port = process.env.PORT || 8080;
let app = express();

// Serve static content for the app from the 'public' directory
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('./public'));
// Import routes and give the server access to them
require('./controllers/task_controller')(app);

db.sequelize.sync().then(function() {
    app.listen(port, function() {
        console.log("Listening on port ", port);
    });
});
