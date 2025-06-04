# Prime Number API – Node.js

A simple API to check if a number is prime using Express.js.

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/PiyushGhavghave/Full-Stack-Engineer-Intern-Task.git
cd Full-Stack-Engineer-Intern-Task
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
npm run dev
```

Server runs at: `http://localhost:3000`

## 🚀 Usage

**Endpoint:**
```
GET /api/v1/isprime?number=<value>
```

**Test with curl**
```
curl "http://localhost:3000/api/v1/isprime?number=7"
```

**Example:**
```
GET /api/v1/isprime?number=7
Response: { "number": 7, "isPrime": true }
```
