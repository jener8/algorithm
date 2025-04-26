const mysql = require('mysql2/promise');

async function testConnection() {
  try {
    // Replace with your actual connection details
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    console.log('Connection successful!');
    await connection.end();
  } catch (error) {
    console.error('Connection failed:', error.message);
  }
}

testConnection();
