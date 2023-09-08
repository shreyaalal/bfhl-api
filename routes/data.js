import express from 'express';

const router = express.Router();
const reqdata = ({
        data: ["M","1","334","4","B"]
});

const resdata = ({
    is_success: true,
    user_id: "shreya_lal_16032002", 
    email: "sl5424@srmist.edu.in",
    roll_number:"RA2011003010584"
});

router.get('/', (req, res) => {
    let numbers = reqdata.data.filter(char => /[0-9]/.test(char));
    let alphabets = reqdata.data.filter(char => /[a-zA-Z]/.test(char));
    let highest = alphabets.sort().pop();
});

router.post('/', (req, res) => {
    console.log(resdata, numbers, alphabets, highest);
    res.send('POST ROUTE REACHED');
});

export default router;