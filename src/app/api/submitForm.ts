import prisma from '@/db'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { currentCartId, newCartId, leadId } = req.body;

            console.log('Swapping carts:', currentCartId, newCartId, leadId);

            res.status(200).json({ message: 'Success' });
        } catch (error) {
            console.error('Error updating cart:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
