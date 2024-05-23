# Github-Solana Auto Dispenser 🚀

Github-Solana Auto Dispenser is an automated system designed to distribute rewards to contributors. It leverages the power of Solana and Web3 to ensure transparent and efficient reward distribution. 


The project is structured using [Turborepo](https://turborepo.org) and contains the following components:


```text
apps
  └─ contributor-web
  |   ├─ next-app
  |   ├─ styling with tailwindcss
  |   ├─ does solona transfer and web3 stuff
  |   └─ depends on packages/db
  ├─ gh-bot
  |   ├─ github bot built on top of probot
  |   ├─ api calls to admin-web for db stuff
  |   └─ messages the events to discord (optional)
  └─ admin-web
      ├─ next-app
      ├─ styling with tailwindcss & shadcn
      └─ depends on packages/db

packages
  ├─ zod
  |   └─ zod schema to share throughout the repo
  └─ database
      ├─ prisma ORM
      ├─ exposes prisma singleton for all applications
      └─ scripts to interact with db
```


# Features ✨

- **Automatic Reward Distribution**: The app listens to GitHub pull request events and automatically calculates and distributes USDC rewards to contributors based on predefined rules.
- **Transparent Transactions**: All USDC token transfers are recorded on the Ethereum blockchain, providing transparency and auditability.
- **Rewards Dashboard**: Contributors can view their earned rewards, transaction history, and input their Ethereum wallet addresses through a user-friendly dashboard.
- **Invoicing and Reporting**: The app generates invoices and reports for contributors, detailing their contributions and rewards received.

# Technologies Used 🛠️

- **Next.js + turborepo**: A React framework for building server-rendered and static websites.
- **Express.js**: A Node.js web application framework for building the backend server.
- **Ethers.js**: A complete Ethereum wallet implementation and utilities in JavaScript.
- **Ethereum Blockchain**: The decentralized blockchain network for recording and verifying USDC token transfers.
- **USDC Token Contract**: The USD Coin (USDC) token contract on the Ethereum blockchain.

# Getting Started 🚀

  Follow these steps to set up the project on your local machine:

1 . Clone the repository:

```bash
git clone https://github.com/your-username/github-sol-auto-dispenser.git
```

2 . change directory to the project folder

```bash
cd github-sol-auto-dispenser
```

3 . Install dependencies:

  Command to install all the dependencies for each application (contributor-web, gh-bot, admin-web, packages/zod, packages/database) and run:

```bash
npm install
```

4 . Set up the environment variables:

  Create a `.env` file in the gh-bot as similar to the example `.env.example` file.
  
```bash
cp .env.example .env
```
5 . Add up all the values for the environment variables in the `.env` file.

6 . Run the applications:

Use Turborepo to run all applications concurrently, by running it in the root dir:
 
```bash
npm run dev
```
Alternatively, you can run each application separately, by naviagting to the respective application directory and running the following command:

```bash
npm run dev
```
