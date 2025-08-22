const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const now = new Date();
  const hour = now.getHours(); // 0 = midnight, 23 = 11pm

  // 24-hour advice list
  const adviceList = [
    "Midnight: Time to rest and recharge your energy 🌙",
    "1 AM: Quiet hour — reflect or sleep well 😴",
    "2 AM: Deep rest — your brain restores itself 🧠",
    "3 AM: Still asleep? Your body is healing 🛌",
    "4 AM: Early risers start their day 🌄",
    "5 AM: Great time for meditation or a jog 🏃‍♂️",
    "6 AM: Sunrise energy, set intentions ☀️",
    "7 AM: Fuel up with a healthy breakfast 🥣",
    "8 AM: Focus on your most important task 📈",
    "9 AM: Stay productive — momentum is building 💪",
    "10 AM: Peak brain power, handle tough work 🧮",
    "11 AM: Wrap up morning goals 🎯",
    "12 PM: Take a lunch break and recharge 🍲",
    "1 PM: Ease back into work — stay sharp 🖥️",
    "2 PM: Afternoon slump? Move and hydrate 💧",
    "3 PM: Coffee boost time ☕",
    "4 PM: Review tasks and wrap up projects 📋",
    "5 PM: End work, start winding down 🔑",
    "6 PM: Spend time with family or hobbies 👨‍👩‍👧‍👦",
    "7 PM: Enjoy dinner, relax 🍽️",
    "8 PM: Light exercise or reading 📚",
    "9 PM: Reflect on the day, gratitude practice 🙏",
    "10 PM: Start preparing for sleep 💤",
    "11 PM: Wind down, relax, and rest 🌌"
  ];

  const advice = adviceList[hour];

  res.render("index", { advice, hour });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
