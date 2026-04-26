npm init -y
npm install express mongoose cors
node server.js

POST → http://localhost:3000/api/employees → Body → raw → JSON:
{
  "name": "Hari",
  "email": "hari@gmail.com",
  "department": "CSE",
  "salary": 50000
}


GET → http://localhost:3000/api/employees/(id)


PUT → http://localhost:3000/api/employees/(id) → Body → raw → JSON:
{
  "department": "AI-ML",
  "salary": 70000
}


DELETE → http://localhost:3000/api/employees/(id)
