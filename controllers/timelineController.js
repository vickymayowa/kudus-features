// timelineController.js
const getTimeline = async (req, res) => {
    const { userId, startDate, endDate } = req.query;
    const tasks = await Task.find({ userId, date: { $gte: startDate, $lte: endDate } });
    res.json(tasks);
};

module.exports = { getTimeline };