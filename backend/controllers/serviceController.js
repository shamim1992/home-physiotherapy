import Service from "../models/servicesModels.js";


export const handleFileUpload = (req, res) => {
    const { filename } = req.file;
    const { username, price, description } = req.body
    const newFile = new Service({
        image: filename,
        username,
        price,
        description
    });

    newFile.save()
        .then(savedFile => {
            res.status(200).json({ message: 'File uploaded successfully', file: savedFile });
        })
        .catch(error => {
            res.status(500).json({ error: 'Error saving file to database' });
        });
};


export const addService = async (req, res) => {
    const { username, price, description } = req.body
    const { filename } = req.file;
    try {

        const newService = new Service({
            username,
            price,
            description,
            image: filename
        });

        const savedService = await newService.save()
        res.status(200).json(savedService);
    } catch (error) {
        res.status(500).json({ error: 'Error saving file to database' });
    }
}

export const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving services' });
    }
}

export const updateServices = async (req, res) => {
    const { id } = req.params;
    const { username, price, description } = req.body
    const { filename } = req.file;
    try {
        const updatedService = await Service.findByIdAndUpdate(id, {
            username,
            price,
            description,
            image: filename
        }, { new: true });
        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ error: 'Error updating services' });
    }
}

export const singleService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json("Unable to find service");
    }

}

export const deleteService = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedService = await Service.findByIdAndDelete(id);
        res.status(200).json(deletedService);
    } catch (error) {
        res.status(500).json({ error: 'Error deleting services' });
    }
}


