let messages = [];
let id = 0;

module.exports = {
    create: ( req, res ) => { // so this is a method that allows me to type messages and send?? i think so...
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send( messages ); //what does 200 mean again??
    },
    read: ( req, res ) => { //returns the entire messages array
        res.status(200).send( messages );
    },
    update: ( req, res ) => { //updates the text property of a message using the text value from the request body
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex( message => message.id == updateID );
        let message = messages[ messageIndex ];

        messages[ messageIndex ] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };

        res.status(200).send( messages );
    },
    delete: ( req, res ) => {
        const deleteID = req.params.id;
        console.log(deleteID)
        messageIndex = messages.findIndex( message => message.id == deleteID );
        messages.splice(messageIndex, 1);
        res.status(200).send( messages ).catch(err => console.log(err));

    }
};

