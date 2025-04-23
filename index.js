require('dotenv').config();
const { OpenAI } = require('openai');  // Use OpenAI object instead of OpenAIApi
const Sentiment = require('sentiment');
const fs = require('fs');

// Setup OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Init sentiment analysis
const sentiment = new Sentiment();

// Load messages
const messages = fs.readFileSync('./messages.txt', 'utf-8').split('\n').filter(Boolean);

// Analyze each message
async function analyzeMessages() {
  for (const message of messages) {
    console.log(`\n🗣 Message: "${message}"`);

    // 1. Sentiment Score
    const result = sentiment.analyze(message);
    console.log(`📊 Sentiment Score: ${result.score}`);

    // 2. Ask GPT if it's a resignation signal
    const prompt = `Does this message imply the employee wants to resign, feels demotivated, or is unhappy? Reply "Yes" or "No" with a short explanation.\n\nMessage: "${message}"`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const reply = response.choices[0].message.content;
    console.log(`🤖 Intent Analysis: ${reply}`);
  }
}

analyzeMessages();
