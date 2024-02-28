export default function OrderCostSummary({ subtotal, discount, tax, shippingFee, assemblyFee, total}: {
    subtotal: number;
    discount: number;
    tax: number;
    shippingFee: number;
    assemblyFee: number;
    total: number;
}) {
    const orderCost: { [key: string]: { value: string; label: string; condition?: () => boolean; } } = {
        subtotal: {
            value: subtotal.toFixed(2),
            label: 'Subtotal'
        },
        discount: {
            value: discount.toFixed(2),
            label: 'Descuento',
            condition: () => discount > 0
        },
        tax: {
            value: tax.toFixed(2),
            label: 'Impuestos'
        },
        shippingFee: {
            value: shippingFee.toFixed(2),
            label: 'Envío'
        },
        assemblyFee: {
            value: assemblyFee.toFixed(2),
            label: 'Ensamblaje',
            condition: () => assemblyFee > 0
        },
        total: {
            value: total.toFixed(2),
            label: 'Total'
        }
    }

    const res: { [key: string]: { value: string; label: string; } } = Object.entries(orderCost)
        .filter(([key, value]) => value.condition ? value.condition() : true)
        .reduce((obj, [key, value]) => ({ ...obj, [key]: { value: value.value, label: value.label } }), {});
    
    return (
        <div className="py-3">
            {
                Object.entries(res).map(([key, value]) =>
                    <div key={key} className={`flex justify-between py-1 px-2 ${key == 'total' ? 'text-xl' : 'text-l'} ${key == 'discount' ? 'text-red-400' : ''}`}>
                        <div className="col-span-2">{value.label}</div>
                        <div>${value.value}</div>
                    </div>
                )
            }
        </div>
    )
}