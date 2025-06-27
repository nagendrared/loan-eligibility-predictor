
# Loan Eligibility Prediction

A web-based application that predicts loan eligibility based on applicant details using a machine learning model. The project features a **React + TypeScript** frontend and a **Flask** backend with a trained ML model.

---

## Features

- Predicts loan approval status based on user input.
- Interactive form-based frontend.
- Flask backend serves a trained Logistic Regression model.
- Real-time predictions displayed in a clean UI.
- Responsive design with TailwindCSS.

---

## Tech Stack

### Frontend
- React (with Vite)
- TypeScript
- TailwindCSS

### Backend
- Python (Flask)
- scikit-learn (ML model)
- Pandas, NumPy
- Gunicorn (for production)

---

## Folder Structure

```bash
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

## Installation & Setup

### Prerequisites
- Python 3.8+
- Node.js 18+
- pip and npm

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

> Flask API runs at: http://127.0.0.1:5000/

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

> App runs at: http://localhost:5173/

---

## How It Works

1. User enters loan details in the frontend form.
2. Form submits a POST request to the Flask API.
3. Backend loads `model.pkl` and returns a prediction.
4. The prediction result is displayed to the user.

---

## Model Details

- **Model**: Logistic Regression
- **Accuracy**: ~75% on test data
- **Features Used**:
  - Gender
  - Married
  - Education
  - Applicant Income
  - Coapplicant Income
  - Credit History
  - Loan Amount
  - Property Area

---

## Deployment

### Backend Deployment (Render)

1. Push `backend/` to GitHub.
2. Go to https://render.com → New Web Service.
3. Set root directory to `backend/`.
4. Choose **Python** as environment.
5. Set start command: `gunicorn app:app`
6. Deploy. Render will generate a backend URL.

### Frontend Deployment (Vercel)

1. Push `frontend/` to GitHub.
2. Go to https://vercel.com → New Project.
3. Choose `frontend/` as root directory.
4. Vercel auto-detects Vite + TypeScript.
5. Deploy. Your app will be live at your Vercel URL.

### Connecting Frontend to Backend

Update API URL in your frontend code:

```ts
// Local
fetch("http://localhost:5000/predict", ...)

// Deployed
fetch("https://your-backend-url.onrender.com/predict", ...)
```

---

## Screenshots

### Home Page Form
![Home Page Form](https://github.com/user-attachments/assets/37430a6b-64bb-4740-ad58-2ef25edc8b61)

### Prediction Result
![Prediction Result](https://github.com/user-attachments/assets/433b5e50-4761-461f-a546-871ac2f94c0f)

---

## Contributing

1. Fork the repo  
2. Create a branch: `git checkout -b feature-name`  
3. Commit: `git commit -m "add feature"`  
4. Push: `git push origin feature-name`  
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Contact

**Nagendra Reddy Keshavareddy**  
- LinkedIn: [https://www.linkedin.com/in/keshavareddy-nagendra-reddy-672127256](https://www.linkedin.com/in/keshavareddy-nagendra-reddy-672127256)  
- GitHub: [https://github.com/nagendrared](https://github.com/nagendrared)
