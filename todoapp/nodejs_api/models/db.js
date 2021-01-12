
module.exports.params = {
    dbname: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    params: {
        host: process.env.HOST,
        port: process.env.PORT,
        dialect: 'mysql',
        
    }
};

