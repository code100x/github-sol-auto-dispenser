# Gh Sol Dispenser

## About

It uses [Turborepo](https://turborepo.org) and contains:

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


## Features

- **Automatic Reward Distribution**: The app listens to GitHub pull request events and automatically calculates and distributes USDC rewards to contributors based on predefined rules.
- **Transparent Transactions**: All USDC token transfers are recorded on the Ethereum blockchain, providing transparency and auditability.
- **Rewards Dashboard**: Contributors can view their earned rewards, transaction history, and input their Ethereum wallet addresses through a user-friendly dashboard.
- **Invoicing and Reporting**: The app generates invoices and reports for contributors, detailing their contributions and rewards received.

## Technologies Used

- **Next.js+turborepo **: A React framework for building server-rendered and static websites.
- **Express.js**: A Node.js web application framework for building the backend server.
- **Ethers.js**: A complete Ethereum wallet implementation and utilities in JavaScript.
- **Ethereum Blockchain**: The decentralized blockchain network for recording and verifying USDC token transfers.
- **USDC Token Contract**: The USD Coin (USDC) token contract on the Ethereum blockchain.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/github-sol-auto-dispenser.git
```
