# Viva Tech R&D – Frontend

Frontend interface for the **Viva Tech R&D Authentication System**.
This project provides a simple UI for **OTP-based login and user registration**, connected to the backend REST APIs.

---

# 🚀 Features

* Mobile number based **Login / Signup**
* **OTP Authentication**
* **User Registration**
* **Role Selection**
* **Resend OTP functionality**
* Popup-based authentication UI
* Responsive design
* API integration using **Fetch API**

---

# 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Fetch API
* SweetAlert2 (alerts & notifications)

---

# 📂 Project Structure

VIVATECH_ASSIGNMENT_FRONTEND/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
    └── index.js

---
# ⚙️ Configuration

Update the backend API URL in index.js:
```
const BASE_URL = "https://your-backend-url";
```
Example:
```
const BASE_URL = "https://vivatechrndbackend--xxxxx.replit.app";
```
# 🔐 Authentication Flow

### 1️⃣ Login / Signup

User enters mobile number.

API Request:

```
GET /check_user_exist
```

If user exists → OTP will be sent.

```
GET /send_otp
```

If user does not exist → Registration form appears.

---

### 2️⃣ Registration

User provides:

* Name
* Role

API Request:

```
POST /add_user
```

OTP will be sent to the registered mobile number.

---

### 3️⃣ OTP Verification

User enters OTP.

API Request:

```
POST /otp_submit
```

If OTP is valid → backend returns **JWT token**.

---

# 📡 API Endpoints Used

| Method | Endpoint            | Description           |
| ------ | ------------------- | --------------------- |
| GET    | `/check_user_exist` | Check if user exists  |
| GET    | `/send_otp`         | Send OTP              |
| POST   | `/add_user`         | Register new user     |
| POST   | `/otp_submit`       | Verify OTP            |
| GET    | `/get_all_role`     | Fetch available roles |

---

# 🧪 Running Locally

Open the project using **Live Server**.

Example:

```
Right Click → Open with Live Server
```

or open in browser:

```
http://127.0.0.1:5500
```

---

# 🌐 Deployment

Frontend is deployed using **Netlify**.

Example:

```
https://vivatechrnd.netlify.app
```

---

# 📸 UI Overview

### Home Page

* Navbar with **Viva Tech R&D**
* Login / Signup button
* Welcome message section

### Login Popup

* Mobile number input
* Login / Signup button

### Registration Form

* Name input
* Role selection dropdown

### OTP Verification

* OTP input field
* Resend OTP option

---

# 👨‍💻 Author

**Sunny Lalwani**

GitHub
https://github.com/sunnylalwani41

---