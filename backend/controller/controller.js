let Data = require('../model/data')




//payment details post




exports.createForm = (req, res) => {
    console.log(req.body)
    var data = new Data({

        name: req.body.name,
        email:req.body.email,
        mobile:req.body.mobile


    });

    data.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findForm = (req, res) => {
    Data.find()
        .then(Data => {
            res.send(Data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving regs."
            });
        });
};



exports.Datadetailbyid = (req, res) => {
    console.log(req.query)
    Data.findById(req.query.id)
        .then(Data => {
            res.send(Data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving regs."
            });
        });

}


exports.update = (req, res) => {
    console.log(req.body);

    Data.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email:req.body.email,
        mobile:req.body.mobile


    }, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id "
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id "
                });
            }
            return res.status(500).send({
                message: "Error updating note with id "
            });
        });
};


exports.delete = (req, res) => {
    console.log(req.params.id)
    Data.findByIdAndDelete(req.params.id)
        .then(Data => {
            res.send(Data);
            console.log('deleted')
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving regs."
            });
        });

}


