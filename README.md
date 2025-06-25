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

loan-eligibility-predictor/
│
├── backend/ # Flask backend
│ ├── app.py # Flask application
│ ├── model.pkl # Trained ML model
│ ├── requirements.txt # Backend dependencies
│
├── frontend/ # React + TypeScript frontend
│ ├── index.html
│ ├── package.json
│ ├── tailwind.config.ts
│ ├── tsconfig.json
│ └── src/
│ ├── App.tsx
│ ├── main.tsx
│ └── components/
│ ├── InputForm.tsx
│ └── Result.tsx
│
└── README.md


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

Flask API will be available at https://loan-eligibility-1-ibry.onrender.com/.


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

![Screenshot 2025-06-25 115413](https://github.com/user-attachments/assets/7dd728c9-38b3-4549-bf25-055adf259482)

## Prediction Result

![image](https://github.com/user-attachments/assets/62fc5a77-096e-463f-95d6-0a78f647df2c)

📊 Model Details
• Model used: Logistic Regression (can be extended)
• Accuracy: ~75% on test data
• Trained using features like:
  •  Gender, Married, Education
  •  ApplicantIncome, CoapplicantIncome
  •  Credit History, Loan Amount, Property Area


🚀 Deployment
To deploy the app:
   •  Use Gunicorn for Flask backend
   •  Serve frontend with Vite build
   •  Deploy on platforms like Render, Vercel (frontend), or Railway

🤝 Contributing
Contributions are welcome! Here's how:
1. Fork the repo  
2. Create a feature branch: `git checkout -b feature-name`  
3. Commit changes: `git commit -m "Add feature"`  
4. Push to GitHub: `git push origin feature-name`  
5. Open a Pull Request

📄 License
This project is licensed under the MIT License.

📬 Contact
**Nagendra Reddy Keshavareddy**  
📧 [LinkedIn](https://www.linkedin.com/in/keshavareddy-nagendra-reddy-672127256)  
💻 [GitHub](https://github.com/nagendrared)












