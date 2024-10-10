import crypto from 'crypto';
import qs from 'querystring';

type PaymentInput = {
  total: number;
  email: string;
  payment: {
    CCNum: string;
    CVV2: string;
    Exp: string;
    Name: string;
  }
}

function buildPayload(input: PaymentInput){
  const str = input.payment.CCNum + input.payment.CVV2 + input.email;
  const payload = {
    CCLW: process.env.PAGUELO_FACIL_CCLW,
    txType: 'sh',
    CMTN: input.total.toString(),
    CDSC: 'Ergonomica Desk',
    CCNum: input.payment.CCNum,
    ExpMonth: input.payment.Exp.split('/')[0],
    ExpYear: '20' + input.payment.Exp.split('/')[1],
    CVV2: input.payment.CVV2,
    Name: input.payment.Name.substr(0, input.payment.Name.indexOf(' ')),
    LastName: input.payment.Name.substr(input.payment.Name.indexOf(' ')),
    Email: input.email,
    Address: 'panama',
    Tel: '2323232323',
    Ip: '192.168.0.1',
    SecretHash: crypto
      .createHash('sha512')
      .update(str)
      .digest('hex')
  };
  return qs.stringify(payload);
}

async function submitPayment(input: PaymentInput) {
  const paymentEnv = process.env.ENV === 'master' ? 'secure' : 'sandbox';
  const url = `https://${paymentEnv}.paguelofacil.com/rest/ccprocessing/`;
  const config = {
    method: 'POST',
    headers: {
      'cache-control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: buildPayload(input)
  };

  try {
    const result = await fetch(url, config);
    const data = await result.json();

    if (data.error) throw new Error(data.error);
    else if (data.Status === 'Approved') {
      console.log('PAYMENT COMPLETE ', data);
      return data;
    } else throw new Error(`Status: ${data.Status}`);
  } catch (err: any) {
    throw new Error(String(err));
  }
}