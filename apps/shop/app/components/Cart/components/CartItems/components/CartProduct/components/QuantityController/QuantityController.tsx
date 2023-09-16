'use client';
import style from './QuantityController.module.scss';
import { FC } from 'react';
import { useCart } from '../../../../../../../../contexts/CartContext';
import { QuantityButton } from './components/QuantityButton';

interface QuantityControllerProps {
  productId: string;
  customClassName?: string;
}

export const QuantityController: FC<QuantityControllerProps> = ({
  customClassName,
  productId,
}) => {
  const { increaseQuantity, decreaseQuantity, getQuantityForProduct } =
    useCart();

  const quantity = getQuantityForProduct(productId);

  return (
    <div className={customClassName ? customClassName : style.menu}>
      <QuantityButton title="-" onClick={() => decreaseQuantity(productId)} />
      <p>{quantity}</p>
      <QuantityButton title="+" onClick={() => increaseQuantity(productId)} />
    </div>
  );
};
