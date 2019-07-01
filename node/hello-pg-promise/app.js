const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:5432/firstdb";
const db = pgp(connectionString);

db.none('DELETE FROM dishes WHERE dishid = $1',[10])
.then(() => {
    console.log('DELETED')
}).catch(error => console.log(error))

// db.none('UPDATE dishes SET price = $1, course = $2 WHERE dishid = $3',[10,'Entrees',10])
// .then(() => {
//     console.log("UPDATED")
// }).catch(error => console.log(error))

// db.any('SELECT name,course,price,imageurl FROM dishes')
// .then((dishes) =>{
//     console.log(dishes);
// }).catch(error => console.log(error));

// db.none('INSERT INTO dishes(name, course, price, imageURL) VALUES($1,$2,$3,$4)', ['Chicken Sandwich','Entrees', 6.50,'chickensandwich.png']
// ).then(()=>{
//     console.log("SUCCESS");
// }).catch(error => console.log(error));

// db.one('INSERT INTO dishes(name, course, price, imageURL) VALUES($1,$2,$3,$4) RETURNING dishid', ['Chicken Sandwich','Entrees', 6.50,'chickensandwich.png'])
// .then((data)=>{
//     console.log(data);
// }).catch(error => console.log(error));

