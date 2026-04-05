# AI Battle Arena Documentation

## Project Overview

AI Battle Arena is a full-stack application where users submit a prompt and receive responses from two AI models—Cohere and Mistral. These responses are then evaluated by Google Gemini, which scores them out of 10, selects the better answer, and provides a brief explanation.

The frontend is built with React for a smooth user experience, while the backend uses Node.js, TypeScript, Express, LangChain, and LangGraph to manage AI interactions, workflow, and scoring logic. The project showcases how multiple AI models can be compared and evaluated in an automated and structured way.

## Project Structure

## Root

```
AI-Battle-Arena/
        │
        ├── backend/
        │
        ├── frontend/
        │
        ├── docs/
        |     └── BluePrint_AI-Battle-Arena.png
        |
        └── README.md
```

## Frontend

```
AI-Battle-Arena/
       |
       └── frontend/

```

## Backend

```
AI Battle Arena/
        └── backend/                  # Backend server (Node.js + TypeScript)
             ├── src/                  # Source code
             │   ├── app.ts            # Express application setup
             │   ├── server.ts         # Main server entry point
             │   ├── config/           # Configuration files
             │   │   └── config.ts     # Environment configuration
             │   │
             │   └── ai/                # Business logic ai
             │       ├── models.ai.ts    # AI model service
             │       └── graph.ai.ts   # LangGraph workflow service
             │
             ├── package.json          # Dependencies and scripts
             ├── package-lock.json     # Locked dependencies
             ├── tsconfig.json         # TypeScript configuration
             ├── server.ts             # Server entry point (root)
             ├── .env                  # Environment variables (API keys)
             └── .gitignore            # Git ignore rules


```

### API Testing

[POSTMAN] To Test -> http://localhost:3000/

### Installation and Setup

Follow these steps to set up the project:

1. Initialize project:

```
  npm init -y
```

Modify `package.json`:

```json
{
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tsx server.ts"
  }
}
```

2. Install TypeScript tools:

```
  npm i -D typescript tsx
  npx tsc --init
```

Modify `tsconfig.json`:

```json
{
  "compilerOptions": {
    "rootDir": "./",
    "outDir": "./dist"
  }
}
```

3. Install Express and types:

```
  npm i express
  npm i -D @types/express
```

4. Install other dependencies:

```
  npm install dotenv
  npm install @langchain/core
  npm install @langchain/google
  npm install @langchain/mistralai
  npm install @langchain/cohere
  npm install @langchain/langgraph
  npm install langchain @langchain/core
  npm install zod
```

### Configuration

- Set API keys in `.env`:
- GOOGLE_API_KEY (from https://aistudio.google.com/api-keys)
- MISTRAL_API_KEY (from https://admin.mistral.ai/organization/api-keys)
- COHERE_API_KEY (from https://dashboard.cohere.com/api-keys)

### Usage Flow

```
Start Project
-> Run `npm run dev`
-> Server starts (tsx compiles and runs server.ts)
-> Express app listens for requests
-> Routes handle AI model calls via LangChain
-> LangGraph manages battle arena workflows
-> Responses sent back
```

### References

- LangChain Models: https://docs.langchain.com/oss/javascript/langchain/models
- LangGraph Install: https://docs.langchain.com/oss/javascript/langgraph/install
- LangChain Install : https://docs.langchain.com/oss/javascript/langchain/install
- zod install : https://zod.dev/#installation
