# 🌆 PhilaConValley Web

Welcome to the official website repo for **PhilaConValley** — a Philly-grown, community-powered launchpad for creative technologists, organizers, and open-source builders.

Our goal is to bridge the gap between **community and technology**, offering a space where people can:
- Connect with us on **Slack**
- Get onboarded into our **open-source projects**
- Collaborate with others to **build solutions for local communities**

---

## 🧭 Mission

PhilaConValley is where **Philadelphia’s tech, art, and activism scenes** meet.  
We center **BIPOC and queer technologists** while fostering collaboration and mentorship across all backgrounds.

Our initiatives focus on:
- Building **open-source civic and cultural tech** projects  
- Supporting **community organizations** with accessible digital solutions  
- Creating pathways for **new developers and designers** to learn, contribute, and grow  

Follow our journey on Instagram → [@phlconvalley](https://www.instagram.com/phlconvalley/)  
Join the movement. Build with purpose.

---

## ⚙️ About This Repo

This repository powers the public-facing **PhilaConValley website**, which will serve as:

- 🪐 **Community launchpad** → connect to our Slack, social media, and initiatives  
- 🚀 **Contributor onboarding hub** → guides for new open-source contributors  
- 🧩 **Project directory** → highlights of current community-led projects  
- 💡 **Request portal** → form for community partners to request custom builds or collaborations  

---

## 🧑🏽‍💻 Getting Started (local dev)

> _Stack details & environment keys will be documented in future commits._

```bash
# 1️⃣ Clone the repo
git clone https://github.com/VictorAzizJ/philaConValleyWeb.git
cd philaConValleyWeb

# 2️⃣ Install dependencies (example: Next.js + Tailwind)
npm install

# 3️⃣ Configure environment
cp .env.example .env.local

# Add the following variables:
# SLACK_INVITE_URL=
# AIRTABLE_BASE_ID=
# AIRTABLE_API_KEY=
# SITE_URL=http://localhost:3000

# 4️⃣ Run dev server
npm run dev
