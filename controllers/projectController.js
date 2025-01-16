// projectController.js
const updateTaskOrder = async (req, res) => {
    const { projectId } = req.params;
    const { taskOrder } = req.body; // Expecting an array of task IDs in the new order
    // Update the order of tasks in the database
    await Task.updateMany({ projectId }, { $set: { order: taskOrder } });
    res.status(204).send();
};

module.exports = { updateTaskOrder };