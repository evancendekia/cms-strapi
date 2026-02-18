# CMS (Strapi Headless CMS)

This project is the headless CMS used to manage articles, topics, and media metadata.

---

## Tech Stack

- Strapi
- PostgreSQL
- Node.js
- Cloudflare R2 (media storage)
- Railway (deployment)

---

## Setup Instructions

### Prerequisites

Install:

- Node.js (v22 or later)
- PostgreSQL

---

### 1. Clone Repository

```bash
git clone https://github.com/evancendekia/cms-strapi.git
cd cms-strapi
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Create `.env` file:

```env


# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS={SECRET}
ADMIN_JWT_SECRET={SECRET}
TRANSFER_TOKEN_SALT={SECRET}
ENCRYPTION_KEY=L{SECRET}


DATABASE_URL=postgresql: {SECRET}
JWT_SECRET={SECRET}
R2_ACCESS_KEY_ID={SECRET}
R2_SECRET_ACCESS_KEY={SECRET}
R2_ACCOUNT_ID={SECRET}
R2_BUCKET_NAME=cms-media
R2_PUBLIC_URL=https://cdn.evancendekia.com


```

---

### 4. Run CMS

```bash
npm run develop
```

CMS Admin Panel:

```
http://localhost:1337/admin
```

---

## Production Deployment

CMS URL:

https://assignment-cms.evancendekia.com
