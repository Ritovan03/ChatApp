# Chatty - Real-time Chat Application

A modern, full-stack real-time chat application built with the MERN stack, featuring instant messaging, file sharing, and beautiful UI themes.

## 🚀 Features

- **Real-time messaging** with Socket.IO
- **User authentication** (signup, login, logout)
- **Profile management** with image upload
- **Online/offline status** indicators
- **Image sharing** in messages
- **Multiple themes** (32 DaisyUI themes)
- **Responsive design** for all devices
- **Message history** persistence
- **Typing indicators** and message timestamps

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Zustand** - State management
- **Socket.IO Client** - Real-time communication
- **React Router DOM** - Navigation
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Socket.IO** - Real-time communication
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
chat-app/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Zustand state management
│   │   ├── lib/            # Utility functions
│   │   └── constants/      # App constants
│   └── public/             # Static assets
└── backend/
    ├── controllers/        # Route handlers
    ├── models/             # Database schemas
    ├── routes/             # API routes
    ├── middleware/         # Custom middleware
    └── lib/                # Utility functions
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Variables**
   
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   NODE_ENV=development
   PORT=5000
   ```

5. **Start the Application**
   
   Backend (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 🎨 Themes

The app includes 32 beautiful themes powered by DaisyUI:
- Light, Dark, Cupcake, Bumblebee, Emerald
- Corporate, Synthwave, Retro, Cyberpunk
- Valentine, Halloween, Garden, Forest
- And many more!

## 📱 Screenshots

### Authentication
- Clean and modern login/signup forms
- Form validation and error handling

### Chat Interface
- Real-time messaging with instant delivery
- Image sharing capabilities
- User online/offline status
- Message timestamps

### Profile Management
- Profile picture upload and update
- User information display
- Account status and creation date

### Settings
- Theme selection with live preview
- Responsive theme switcher

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - bcryptjs for secure passwords
- **CORS Protection** - Configured for specific origins
- **XSS Prevention** - HttpOnly cookies
- **CSRF Protection** - SameSite cookie attribute

## 🚀 Deployment

### Production Build
```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm start
```

The app is configured for production deployment with:
- Static file serving from backend
- Environment-based configurations
- Optimized build processes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Socket.IO for real-time communication
- DaisyUI for beautiful UI components
- Cloudinary for image storage
- All the amazing open-source libraries used

---

⭐ If you found this project helpful, please give it a star!
