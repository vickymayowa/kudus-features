
const updateTaskDeadline = async (req, res) => {
    const { taskId } = req.params;
    const { deadline } = req.body; // Expecting a new deadline date
    // Update the task's deadline in the database
    await Task.findByIdAndUpdate(taskId, { deadline });
    res.status(204).send();
};

// taskController.js
const filterTasks = async (req, res) => {
    const { userId, status, priority } = req.query;
    // Fetch tasks based on filters
    const tasks = await Task.find({ userId, status, priority });
    res.json(tasks);
};

module.exports = { filterTasks,updateTaskDeadline };