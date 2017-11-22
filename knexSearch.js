const pg = require("pg");
const settings = require("./settings");

const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

function search_person(name){
  console.log('Searching...');

  knex('famous_people').select()
    .where({
        first_name: name })
    .orWhere({
      last_name : name })
    .asCallback(function(err, result){
      if (err){
        return console.log(err);
      }
      console.log(`Found persons by the name '${name}'`);
     console.log(result)
    });
}

search_person(process.argv[2])

// use
//console.log(knex('table').toString();  => gets query
