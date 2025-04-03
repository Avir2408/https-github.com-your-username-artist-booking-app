const Chat = require('../models/chat');

exports.getUserChats = async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.params.userId });
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createChat = async (req, res) => {
  try {
    const chat = new Chat(req.body);
    await chat.save();
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};