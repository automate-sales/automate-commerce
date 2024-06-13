import { stringify } from 'querystring';

const generalResponseCodes: { [key: string]: string } = {
    1: 'Transaction Approved',
    2: 'Transaction Declined',
    3: 'Error in transaction data or system error'
}

const specificResponseCodes = {
    100: 'Transaction was approved.',
    200: 'Transaction was declined by processor.',
    201: 'Do not honor.',
    202: 'Insufficient funds.',
    203: 'Over limit.',
    204: 'Transaction not allowed.',
    220: 'Incorrect payment information.',
    221: 'No such card issuer.',
    222: 'No card number on file with issuer.',
    223: 'Expired card.',
    224: 'Invalid expiration date.',
    225: 'Invalid card security code.',
    226: 'Invalid PIN.',
    240: 'Call issuer for further information.',
    250: 'Pick up card.',
    251: 'Lost card.',
    252: 'Stolen card.',
    253: 'Fraudulent card.',
    260: 'Declined with further instructions available. (See response text)',
    261: 'Declined-Stop all recurring payments.',
    262: 'Declined-Stop this recurring program.',
    263: 'Declined-Update cardholder data available.',
    264: 'Declined-Retry in a few days.',
    300: 'Transaction was rejected by gateway.',
    400: 'Transaction error returned by processor.',
    410: 'Invalid merchant configuration.',
    411: 'Merchant account is inactive.',
    420: 'Communication error.',
    421: 'Communication error with issuer.',
    430: 'Duplicate transaction at processor.',
    440: 'Processor format error.',
    441: 'Invalid transaction information.',
    460: 'Processor feature not available.',
    461: 'Unsupported card type.'
}

//: 'this should generally be the same for all payment providers while some may require certain additional fields
// consist of fields from the checkout form
type PaymentInput = {
    name: string, //Full name of the credit card holder.
    ccNumber: string, //Credit card number.
    ccExp: string, //Credit card expiration date.
    cvv: string, //The card security code.
    total: number, //Total order amount.
    orderId: string //ID of the order
}

//these are the inputs required by the payment gateway, in this case NMI
type GatewayInput = PaymentInput & {
    //user input
    first_name: string, //Full name of the credit card holder.
    ccnumber: string, //Credit card number.
    ccexp: string, //Credit card expiration date. Format: MMYY
    cvv: string, //The card security code.
    amount: string, //Total order amount
    orderid: string //The Id of the order
    //system input
    type: 'sale' | 'auth' | 'credit' | 'validate' | 'offline', //type of the transaction. use sales for processing credit card payments
    security_key: string, //API Security Key assigned to a merchant account. Should be stored as NMI_SECURITY_KEY in .env
}

type GatewayResponse = {
    authcode: string;
    avsresponse: string;
    cvvresponse: string;
    orderid: string;
    response: string;
    response_code: string;
    responsetext: string;
    transactionid: string;
    type: string;
};

// mappings is a json object that maps userInput fields from the payment gateway with payment input fields available in the checkout method
// keys are user input keys from GatewayInput, values are keys from PaymentInput as strings
const mappings = {
    first_name: 'name',
    ccnumber: 'ccNumber',
    ccexp: 'ccExp',
    cvv: 'cvv',
    amount: 'total',
    orderid: 'orderId'
} as { [key: string ]: keyof PaymentInput }

// submits a payment request to a given provider. In this case NMI
const nmiPayment = async(gatewayInput: GatewayInput)=> {
    const hostName = 'secure.nmi.com'
    const path = '/api/transact.php'
    const postData = stringify(gatewayInput)
    const options = {
        method: 'POST',
        body: postData,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    const response = await fetch(`https://${hostName}${path}`, options)
    if (response.ok) return convertToJson(await response.text())
    else throw new Error(`Error: payment request status ${response.status}`)
}

const convertToJson = (input: string) => {
    try{
        return input.split('&').reduce((acc, item) => {
            const [key, value] = item.split('=');
            return { ...acc, [key]: value };
        }, {}) as GatewayResponse;
    } catch(err){
        throw new Error(`Error parsing payment response as json - ${err}`)
    }
}    

// generates required input for payment
// submits the payment
// processes the success response or the error messages
export async function processPayment(paymentInput: PaymentInput) {
    const gatewayInput: GatewayInput = {
        ...Object.entries(mappings).reduce((acc, [key, value]) => ({...acc, [key]: String(paymentInput[value]) || ''}), {}),
        type: 'sale',
        security_key: process.env.NMI_SECURITY_KEY,
    } as GatewayInput
    try {
        const res = await nmiPayment(gatewayInput)
        if(res.response == '1') return res.transactionid // when succesfull the payment request should return the transactionId
        else throw new Error(`${generalResponseCodes[res.response as keyof typeof generalResponseCodes]} ${res.cvvresponse? '- '+specificResponseCodes[Number(res.cvvresponse) as keyof typeof specificResponseCodes]: ''}`)
    } catch(err: any) {
        throw new Error(err.message)
    }
}