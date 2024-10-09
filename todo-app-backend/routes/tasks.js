const express = require('express');
const auth = require('../middleware/auth'); // Import the auth middleware
const Task = require('../models/Task');

const router = express.Router();

// Create Task (protected route)
router.post('/', auth, async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const newTask = new Task({
      userId: req.user.id,  // Get user ID from the authenticated token
      title,
      description,
      completed,
    });

    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get Tasks (protected route)
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
