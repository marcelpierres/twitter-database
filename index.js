process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

require("dotenv").config();
const server = require('./api/server');

const PORT = process.env.PORT || 5000;
// server listening on port 5000
server.listen(PORT,() =>{
    console.log(`\n*** Server running on http://localhost:${PORT} ***`);

});