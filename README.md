# NestJS Project

## 📌 Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [NestJS CLI](https://docs.nestjs.com/) (Optional but recommended)

```sh
npm install -g @nestjs/cli  # Install NestJS CLI (optional)
```

---

## 🚀 Installation
### Clone the Repository
```sh
git clone <repository-url>
cd <project-folder>
```

### Install Dependencies
```sh
npm install
```

---

## 🔥 Running the Project
### Start the Development Server
```sh
npm run start
```

### Start in Watch Mode (Hot Reload)
```sh
npm run start:dev
```

### Start in Production Mode
```sh
npm run build
npm run start:prod
```

---

## 📂 Project Structure
```
📦 src/
 ┣ 📂 modules/            # Feature modules
 ┣ 📂 common/             # Shared utilities, guards, pipes
 ┣ 📂 database/           # Database connection, entities
 ┣ 📂 config/             # Configuration files
 ┣ 📜 main.ts            # Entry point
 ┣ 📜 app.module.ts      # Root module
 ┗ 📜 app.controller.ts  # Main controller
```

---

## 🛠 Environment Configuration
### Create a `.env` file in the root directory:
```
cp .env.example .env

```

---

## 🗄️ Database Setup (TypeORM Example)
### Run Migrations
```sh
npm run migration:run                                                      
npm run migration:revert
npm run migration:fresh
npm run migration:refresh
npm run migration:create --name=your_migration_name
npm run migration:generate --name=your_migration_name
```

### Seed Database
```sh
npm run seed
```

---

## ✅ Testing
### Run Unit Tests
```sh
npm run test
```

### Run End-to-End (E2E) Tests
```sh
npm run test:e2e
```

---

## 📖 API Documentation
If Swagger is enabled, visit:
```
http://localhost:3000/api
```

---

## 🏗️ Common Commands
| Command | Description |
|---------|-------------|
| `npm run start` | Run the app |
| `npm run start:dev` | Start with hot reload |
| `npm run build` | Build for production |
| `npm run start:prod` | Run production build |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run e2e tests |
| `npm run lint` | Check for lint errors |
| `npm run seed` | Run database seeder |

---

## 📌 Contributing
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

