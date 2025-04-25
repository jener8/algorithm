const mysql = require('mysql2/promise');
require('dotenv').config();

async function testConnection() {
  // Get connection details from DATABASE_URL
  const url = new URL(process.env.DATABASE_URL);
  
  const config = {
    host: url.hostname,
    user: url.username,
    password: url.password,
    database: url.pathname.substring(1),
    ssl: {}
  };
  
  console.log('Connecting to:', url.hostname);
  console.log('Username:', url.username);
  console.log('Database:', url.pathname.substring(1));
  
  try {
    const connection = await mysql.createConnection(config);
    console.log('✅ Connected successfully!');
    
    const [rows] = await connection.execute('SELECT 1 as result');
    console.log('Query result:', rows);
    
    await connection.end();
  } catch (error) {
    console.error('❌ Connection failed:', error);
  }
}

testConnection();
