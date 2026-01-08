---
# PharmaCare Backend

Backend service for the **PharmaCare Pharmacy Management System**.
Built with **TypeScript**, **Express**, and **MongoDB**, featuring **invite-only authentication**, role-based access control, and secure JWT auth.
---

## 🧱 Tech Stack

- **Node.js**
- **TypeScript**
- **Express 5**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **bcrypt**
- **Zod (validation)**
- **pnpm**
- **Nodemailer (email invites)**

---

## 🔐 Authentication Model

This system uses an **invite-only authentication flow**.

- ❌ No public signup
- ✅ Admins invite users via email
- ✅ Users activate accounts via secure, expiring invite links
- ✅ Role-based access:

  - `admin`
  - `pharmacist`
  - `sales-attendant`

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/pharma-care-backend.git
cd pharma-care-backend
```

### 2️⃣ Install dependencies

```bash
pnpm install
```

### 3️⃣ Environment variables

Create a `.env` file:

```env
PORT=4000
NODE_ENV=development

MONGO_URI=mongodb://localhost:27017/pharmacare

JWT_SECRET=super-secret-key
JWT_EXPIRES_IN=1d

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

APP_URL=http://localhost:4200
```

---

## ▶️ Running the Server

### Development

```bash
pnpm dev
```

### Production

```bash
pnpm build
pnpm start
```

---

## 📜 Available Scripts

```json
{
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "lint": "eslint .",
  "typecheck": "tsc --noEmit"
}
```

---

## ✉️ Invite Flow

1. **Admin creates invitation**

   ```
   POST /admin/invitations
   ```

2. User receives email with invite link
3. User sets password via:

   ```
   POST /auth/accept-invite
   ```

4. User can now log in:

   ```
   POST /auth/login
   ```

Invite tokens are:

- Secure
- One-time use
- Expire automatically

---

## 🔑 Authorization

JWT-based authentication with role guards.

Example protected route:

```ts
authMiddleware, roleGuard("admin");
```

---

## 🧪 Validation

All request payloads are validated using **Zod** before hitting controllers.

---

## 🚀 Future Improvements

- Password reset flow
- Audit logs
- Rate limiting
- Refresh tokens
- Email templates (HTML branding)
- Docker support

---

## 🛡️ Security Notes

- Passwords are hashed using **bcrypt**
- Invite tokens are **hashed before storage**
- Environment variables are never committed
- Admin-only access enforced at route level

---

## 📄 License

ISC

---
