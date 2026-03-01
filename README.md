**TEAM NAME: Crisp**

**AI-Driven Multi-Objective Optimization Framework for Precast Cycle Management**
Overview

This project presents an AI-powered decision-support system designed to optimize cycle time in precast concrete yards.

The solution integrates:

Strength prediction using Machine Learning

Multi-objective optimization

Simulation-based production strategy evaluation

It enables yard managers to reduce cost, minimize cycle time, and maintain required strength levels efficiently.

**Problem Statement 1**

In precast production, element cycle time (casting → curing → demoulding → reset) directly impacts:

Yard capacity

Project timeline

Production cost

Delays occur due to:

Strength gain uncertainty

Curing variations

Mix design differences

Operational constraints

An intelligent system is required to predict strength gain and optimize production decisions.

**Proposed Solution**

The framework combines:

Supervised Machine Learning (XGBoost)
Predicts concrete strength gain under varying parameters.

Multi-Objective Optimization (Genetic Algorithm / NSGA-II)
Identifies optimal trade-offs between:

Cycle time

Cost

Strength requirements

Simulation-Based Decision Engine
Evaluates multiple production scenarios and recommends the best operational strategy.

**Demo of prototype**
<img width="1907" height="846" alt="image" src="https://github.com/user-attachments/assets/14502bf1-5fb7-4b3d-b162-fd87e80125ff" />



**Technology Stack**

Python

XGBoost

Genetic Algorithm / NSGA-II

Pandas / NumPy

Streamlit (Interactive Dashboard)

Key Features

Accurate strength prediction (R² ≈ 0.97)

Automated trade-off analysis

Cost and time reduction insights

Real-time parameter tuning

Decision-support dashboard

Performance & Validation

High prediction accuracy verified using historical yard data

Optimization tested under multiple constraint scenarios

Simulated production runs confirmed practical feasibility

System Workflow

Input mix design and operational parameters

Predict strength gain curve

Apply multi-objective optimization

Generate Pareto-optimal solutions

Recommend best cycle strategy

Installation
git clone https://github.com/your-username/precast-cycle-optimization.git
cd precast-cycle-optimization
pip install -r requirements.txt
streamlit run app.py
Project Structure
├── data/
├── models/
├── optimization/
├── simulation/
├── app.py
├── requirements.txt
└── README.md
Future Scope

Integration with IoT curing sensors

Real-time yard data streaming

Cloud deployment

Reinforcement learning for adaptive scheduling

Impact

This solution enables:

Faster project delivery

Reduced operational cost

Improved yard utilization

Data-driven production planning

Team

Createchh 2026 Submission
AI-Driven Optimization for Smart Infrastructure Production
