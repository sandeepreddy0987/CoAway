var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('User'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Complaints');
mobileApp.tables.add('FoodAccess');
mobileApp.tables.add('Covid19Symptoms');
mobileApp.tables.add('Covid19SymptomPeopleDetails');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
