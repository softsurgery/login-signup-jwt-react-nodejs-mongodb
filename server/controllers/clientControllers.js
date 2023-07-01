const Client = require('../model/clientModel');

exports.createClient = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, address, rate } = req.body;
    
    const client = new Client({
      firstName,
      lastName,
      phoneNumber,
      address,
      rate
    });
    
    const savedClient = await client.save();
    
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a client by ID
exports.getClientById = async (req, res) => {
  try {
    const { clientId } = req.params;
    const client = await Client.findById(clientId);
    
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a client
exports.updateClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const { firstName, lastName, phoneNumber, address, rate } = req.body;
    
    const updatedClient = await Client.findByIdAndUpdate(
      clientId,
      { firstName, lastName, phoneNumber, address, rate },
      { new: true }
    );
    
    if (!updatedClient) {
      return res.status(404).json({ error: 'Client not found' });
    }
    
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a client
exports.deleteClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    
    const deletedClient = await Client.findByIdAndRemove(clientId);
    
    if (!deletedClient) {
      return res.status(404).json({ error: 'Client not found' });
    }
    
    res.json(deletedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
