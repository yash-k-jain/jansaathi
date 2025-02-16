# Government Scheme Analyzer

## 📌 Overview
**Government Scheme Analyzer** is a web-based application that leverages **OpenAI's ChatGPT** to analyze government schemes and compare policies. The project aims to provide users with insights into different government initiatives, helping them make informed decisions.

## 🚀 Features
- **Search Government Schemes**: Find detailed information about various government policies.
- **AI-Powered Analysis**: Utilize OpenAI's ChatGPT to summarize and explain complex policies.
- **Comparison Tool**: Compare different schemes based on parameters such as eligibility, benefits, and impact.
- **User-Friendly Interface**: A clean and interactive UI for seamless navigation.
- **Real-time Updates**: Fetches and analyzes up-to-date policy data.

## 🛠️ Tech Stack
- **Frontend**: Next.js (App Router), Tailwind CSS
- **Backend**: Next.js API Routes
- **AI Integration**: OpenAI GPT API
- **Database**: MongoDB (for storing scheme details and user preferences)

## 📂 Project Structure
```
├── app             # Next.js App Router
│   ├── api        # API routes for backend logic
│   ├── components # Reusable UI components
│   ├── layout.tsx # Application layout
│   ├── page.tsx   # Main page
│   ├── styles     # Global and component-specific styles
├── public         # Static assets (images, icons, etc.)
├── utils          # Helper functions
├── data           # Scheme dataset (if applicable)
├── README.md      # Project documentation
```

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/government-scheme-analyzer.git
cd government-scheme-analyzer
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
OPENAI_API_KEY=your_openai_api_key
MONGO_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=your_api_url
```

### 4️⃣ Start the Application
```bash
npm run dev
```

## 📌 Usage
1. **Search for a Scheme**: Enter the scheme name or category.
2. **View AI Analysis**: Get a detailed breakdown of the policy.
3. **Compare Policies**: Select two or more schemes to compare.
4. **Get Insights**: AI-generated recommendations for better understanding.

## 🔥 Future Enhancements
- Add **Machine Learning-based sentiment analysis** on policies.
- Implement **User Authentication** for personalized recommendations.
- Integrate **Data Visualization** for comparative analysis.

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit pull requests.

## 📜 License
This project is licensed under the **MIT License**.

---
Made with ❤️ by **Dcoders**

