// clientController.js

const Client = require('../model/clientModel');

// Create a new client
exports.createClient = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, address, rate } = req.body;

        const client = new Client({
            firstName,
            lastName,
            email,
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

exports.getAllClients = async (req, res) => {
    try {
        const { page = 1, limit = 5 } = req.query;
        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
        };

        const clients = await Client.paginate({}, options);
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
        const { firstName, lastName, email, phoneNumber, address, rate } = req.body;

        const updatedClient = await Client.findByIdAndUpdate(
            clientId,
            { firstName, lastName, email, phoneNumber, address, rate },
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
        const { email } = req.body; // Assuming the email is provided in the request body
        console.log(req.body);
        const deletedClient = await Client.findOneAndRemove({ email });

        if (!deletedClient) {
            return res.status(404).json({ error: 'Client not found' });
        }

        res.json(deletedClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

