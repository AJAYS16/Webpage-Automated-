# Portfolio CI/CD Pipeline with Jenkins, GitHub, SonarQube, and Docker on AWS EC2
- Hyy guys this is ajay.

Welcome Engineers! This project demonstrates how to set up a complete CI/CD pipeline for my personal portfolio website using **Jenkins**, **GitHub**, **SonarQube**, and **Docker** on an **AWS EC2** instance.

---

## ✅ Features
- 🔁 Automated builds triggered by changes in GitHub  
- 🧠 Code quality analysis using SonarQube  
- 📦 Docker-based deployment for portability  
- ⚙️ End-to-end automation with Jenkins  
- ☁️ Hosted on secure and scalable AWS EC2  

---

## 🧱 Architecture

| Step            | Tool        | Description                      |
|-----------------|-------------|----------------------------------|
| 1. Code Push    | GitHub      | Push source code changes         |
| 2. Trigger      | Jenkins     | Starts pipeline on code update  |
| 3. Analysis     | SonarQube   | Reviews code quality/coverage   |
| 4. Build/Test   | Jenkins     | Executes build and tests        |
| 5. Containerize | Docker      | Builds Docker image              |
| 6. Deploy       | Jenkins     | Deploys image to EC2             |

---

## 🧰 Prerequisites
- AWS Account with EC2 access  
- GitHub repository with portfolio code  
- Basic understanding of Jenkins, Docker, and Linux  
- Open necessary ports (22, 80, 8080, 9000)

---

