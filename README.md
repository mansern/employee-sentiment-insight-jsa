# Employee Sentiment & Intent Detection System (POC)

## Overview

This is a **Proof of Concept (POC)** for detecting employee sentiment and identifying when an employee might be thinking about resigning, using natural language processing (NLP) and sentiment analysis. The system analyzes messages (from platforms like Slack, email, or feedback forms) to gauge sentiment and intent based on the tone and content of the text.

The purpose of this POC is to explore how AI can automatically detect signs of employee dissatisfaction or potential resignation through their messages.

Developed by: **Muhammad Anser Naseer**  
📧 **Email:** [muhammadin87@gmail.com]

## Features

- **Sentiment Analysis**: Analyzes the sentiment of employee messages (positive, neutral, or negative).
- **Intent Detection**: Detects if an employee is signaling dissatisfaction or considering resignation, using OpenAI's GPT model.
- **Extensibility**: The system is designed to be easily extendable to work with various communication platforms.

## Technology Stack

- **Node.js**: Server-side JavaScript runtime.
- **OpenAI GPT-3.5**: Used for intent detection and message analysis.
- **Sentiment Analysis Library**: For sentiment scoring of text.
- **dotenv**: For securely managing environment variables (like API keys).
- **fs (File System)**: For reading employee messages from files.

## How It Works

1. **Input**: The system takes messages from employees (such as feedback or Slack messages) stored in a text file.
2. **Sentiment Analysis**: The system evaluates the sentiment of each message and categorizes it as positive, neutral, or negative.
3. **Intent Analysis**: Using OpenAI’s GPT-3.5, the system analyzes if a message shows signs of resignation, dissatisfaction, or demotivation.
4. **Output**: The results are logged to the console, showing both sentiment scores and the analysis of whether the message indicates intent to resign.

## Setup and Installation

Follow these steps to set up the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/employee-sentiment-insight-jsa.git
cd employee-sentiment-insight-jsa
npm install
Replace openAI key with your actual OpenAI API key in .env file
node index.js

```
