# Gh Sol Dispenser

## About

It uses [Turborepo](https://turborepo.org) and contains:

```text
apps
  ├─ contributor-web
  |   ├─ next-app
  |   ├─ styling with Tailwind CSS & Shadcn (depends on packages/ui)
  |   ├─ handles Solona transfer and Web3 functionality
  |   └─ depends on packages/db
  ├─ gh-bot
  |   ├─ GitHub bot built on top of Probot
  |   ├─ API calls to admin-web for database operations
  |   └─ optionally sends messages to Discord for events
  └─ admin-web
      ├─ next-app
      ├─ styling with Tailwind CSS & Shadcn (depends on packages/ui)
      └─ depends on packages/db

packages
  ├─ zod
  |   └─ Zod schema shared throughout the repository
  └─ database
  |   ├─ Prisma ORM
  |   |   ├─ exposes Prisma singleton for all applications
  |   |   └─ scripts to interact with the database
  └─ ui
      ├─ exposes a global CSS theme
      ├─ primitives (Shadcn components)
      └─ shared utils (CN helper)
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
