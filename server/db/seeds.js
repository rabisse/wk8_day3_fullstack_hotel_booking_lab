use bookings_hub;
db.dropDatabase();

db.createCollection('bookings', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [ "name", "email", "checkedIn" ],
            properties: {
                name: {
                    bsonType: "string",
                    minLength: 1,
                    description: "must be a string duh"
                }
            }
        }
    }
});


db.bookings.insertMany([
    {
        name: "Malcolm",
        email: "BikeBro@roadrash.com",
        checkedIn: true
    },
    {
        name: "Harrison",
        email: "MasterOfMoths@flybynight.net",
        checkedIn: false
    }

    // the below will give an error in the terminal when 'npm run seeds'
    // ,
    // {
    //     email: "MasterOfMoths@flybynight.net",
    //     checkedIn: false
    // }
]);
