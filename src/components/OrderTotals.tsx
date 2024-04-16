import { useMemo } from 'react';
import { OrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderTotalsProps = {
  order: OrderItem[];
};

export default function OrderTotals({ order }: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  return (
    <>
      <div className="">
        <h2 className="font-semibold">Totales y propinas:</h2>
        <p>
          Subtotal a pagar:{' '}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina: <span className="font-bold">$0</span>
        </p>
        <p>
          Total a pagar: <span className="font-bold">$0</span>
        </p>
      </div>
      <button>Finalizar Orden</button>
    </>
  );
}