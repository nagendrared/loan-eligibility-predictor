# 🚀 Loan Eligibility Prediction

A web-based application that predicts loan eligibility based on applicant details using a machine learning model. The project features a **React + TypeScript** frontend and a **Flask** backend with a trained ML model. Built for speed, accuracy, and seamless user experience.

---

## 📌 Features

- 🔍 Predicts loan approval status based on financial and demographic data
- 🖥️ Interactive frontend with form-based input
- ⚙️ Flask backend serves a trained ML model
- 📈 Real-time prediction results
- 🎨 Responsive design with TailwindCSS

---

## 🛠 Tech Stack

### 🔹 Frontend
- React (with Vite)
- TypeScript
- TailwindCSS

### 🔹 Backend
- Python (Flask)
- scikit-learn (ML model)
- Pandas, NumPy
- Gunicorn (for production)

---
## 📁 Folder Structure

```
loan-eligibility-predictor/
│
├── backend/                # Flask backend
│   ├── app.py              # Flask application
│   ├── model.pkl           # Trained ML model
│   ├── requirements.txt    # Backend dependencies
│
├── frontend/               # React + TypeScript frontend
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       └── components/
│           ├── InputForm.tsx
│           └── Result.tsx
│
└── README.md
```



---

## 🧪 Installation & Setup

### ✅ Prerequisites
- Python 3.8+
- Node.js 18+
- pip / npm

---

### 🔧 Backend Setup

# Navigate to backend folder
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run Flask server
python app.py

Flask API will be available at http://127.0.0.1:5000.


### 🎨 Frontend Setup

# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

**🌐 How It Works**
1. User enters loan-related details through a form.

2. Frontend sends a POST request to the Flask API.

3. Backend loads the trained model (model.pkl) and makes a prediction.

4. Result is returned and shown to the user in the interface.


## Home Page Form	

![Screenshot 2025-06-25 123917](https://github.com/user-attachments/assets/39cf11ad-d419-43a3-b9b6-5911411d0deb)



## Prediction Result

![Screenshot 2025-06-25 124003](https://github.com/user-attachments/assets/433b5e50-4761-461f-a546-871ac2f94c0f)


## 📊 Model Details

- Model used: **Logistic Regression** (can be extended)
- Accuracy: ~75% on test data
- Trained using features like:
  - Gender
  - Married
  - Education
  - ApplicantIncome
  - CoapplicantIncome
  - Credit History
  - Loan Amount
  - Property Area

## 🚀 Deployment

This application is deployed with a **React + TypeScript frontend on Vercel** and a **Flask backend with ML model on Render**.

---

### 🔧 Backend Deployment (Render)

1. Push your `backend/` folder to a separate GitHub repo or subfolder.
2. Go to [https://render.com](https://render.com) and:
   - Click **"New Web Service"**
   - Connect your GitHub repo
   - Set the root directory to `backend/`
   - Choose **Python** environment
   - Set the **Start Command** as:
     ```bash
     gunicorn app:app
     ```
3. Add environment variables if needed.
4. Deploy! Render will provide you with a backend URL like: https://loan-eligibility-1-ibry.onrender.com/


---

### 🎨 Frontend Deployment (Vercel)

1. Push your `frontend/` folder to GitHub.
2. Go to [https://vercel.com](https://vercel.com) and:
- Click **"New Project"**
- Import your repo and choose `frontend/` as the root
- Vercel auto-detects **Vite + React + TypeScript**
3. After build, your app is live at: https://loan-eligibility-predictor-five.vercel.app/


---

### 🌐 Connecting Frontend to Backend

In your frontend code (likely inside `api.ts` or `InputForm.tsx`), **replace the local Flask URL** with your deployed Render backend URL:

```ts
// Before (local)
const response = await fetch("http://localhost:5000/predict", { ... })

// After (deployed)
const response = await fetch("https://loan-backend.onrender.com/predict", { ... })

```

🤝 Contributing
Contributions are welcome! Here's how:
1. Fork the repo  
2. Create a feature branch: `git checkout -b feature-name`  
3. Commit changes: `git commit -m "Add feature"`  
4. Push to GitHub: `git push origin feature-name`  
5. Open a Pull Request


📬 Contact
**Nagendra Reddy Keshavareddy**  
📧 [LinkedIn](https://www.linkedin.com/in/keshavareddy-nagendra-reddy-672127256)  
💻 [GitHub](https://github.com/nagendrared)


## License

This project is licensed under the [MIT License](LICENSE).












