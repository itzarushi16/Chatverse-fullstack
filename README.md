# Chatverse

**A full-stack, real-time anonymous chat application where users can make new friends without revealing their identity!**  
Built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and powered by **Socket.io** for instant messaging

---


## ✨ Features

- **🕵️ Anonymous Chatting**  
  Users join anonymously — no name, email, or user ID is revealed.

- **💬 Real-time Messaging**  
  Low-latency, real-time communication powered by **Socket.io**.

- **🔒 Authentication**  
  - Secure login with **JWT (JSON Web Tokens)**.  
  - Passwords are **salted and hashed** using **bcrypt** for enhanced security.

- **🟢 Online Users**  
  - View online users with a **green dot** indicator.  
  - See the **total number of online users** at any given moment.

- **📱 Responsive UI**  
  Built with **React.js** for a seamless experience across all devices.

- **🌐 Multilingual Support**  
  Integrated **Google Translator API** to translate individual sentences or the entire chat page.

- **🎨 Customizable Themes**  
  Easily switch between multiple beautiful themes using **DAISY UI**.

- **☁️ Cloud Image Storage**  
  User-uploaded images are securely stored in **Cloudinary**.

- **😄 Emoji Support**  
  Built-in **emoji picker** for expressive conversations.

---

## 🛠 Tech Stack

| Frontend       | Backend         | Database  | Real-Time Engine | Authentication | Other Integrations     |
| -------------- | ---------------- | --------- | ---------------- | --------------- | ----------------------- |
| React.js       | Node.js           | MongoDB   | Socket.io         | JWT, bcrypt      | Google Translator API, Cloudinary, Emoji Picker |
| Tailwind CSS   | Express.js        |           |                  |                 | DaisyUI                 |

---

## 📦 Installation

Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/chatverse.git

# Navigate into the project directory
cd chatverse

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server` directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---
## Live Link- https://chatverse-fullstack.onrender.com
