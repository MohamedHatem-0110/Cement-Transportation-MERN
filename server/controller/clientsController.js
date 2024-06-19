const Client = require("../models/clientModel");

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createClient = async (req, res) => {
  const client = new Client({
    name: req.body.name,
    balance: req.body.balance,
  });
  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const removeClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Client removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllClients, removeClient, createClient };
