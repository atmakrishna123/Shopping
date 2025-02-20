"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Cart.module.css';
const Cart = () => {
    const [cartItems,setCartItems] = useState([
        {
            id:1,
            title:"Product 1",
            price:25000,
            quantity:1,
            image:"/Images/prod1.jpg",
        },
        {
            id:2,
            title:"Product 2",
            price:75000,
            quantity:2,
            image:"/Images/prod2.jpg",
        },
    ]);
    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: quantity } : item
            )
        );
    };
    const features = [
        {
          image: "/Images/icon1.jpg",
          title: "High Quality",
          desc: "Premium materials and durability.",
        },
        {
          image: "/Images/icon2.jpg",
          title: "Warranty Protection",
          desc: "Hassle-free warranty coverage",
        },
        {
          image: "/Images/icon3.jpg",
          title: "Free Shipping",
          desc: "No extra delivery charges",
        },
        {
          image: "/Images/icon4.jpg",
          title: "24/7 Support",
          desc: "Assistance, anytime anywhere",
        },
      ];
    const removeItem = (id) => {
        setCartItems((prevItems)=>prevItems.filter((item) => item.id !== id));
    };
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,0
    );
    
    return (
        <>
            <div className={styles.body}>
                <div className={styles.backgroundImg}>
                    <Image src="/Images/Cart.jpg" width={1520} height={600} alt="Background Icon"/>
                </div>
            </div>
            <h2 className={styles.cartTitle}>Cart</h2>
            <div className={styles.cartContainer}>
                <div className={styles.cartContent}>
                    <table className={styles.cartTable}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                <td className={styles.productInfo}>
                                    <Image src={item.image} alt={item.title} width={50} height={50} className={styles.productInfoImg}/>
                                    <span>{item.title}</span>
                                </td>
                                <td>
                                    Rs {item.price.toLocaleString()}
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min="1"
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    />
                                </td>
                                <td>
                                    Rs {(item.price * item.quantity).toLocaleString()}
                                </td>
                                <td>
                                    <button className={styles.deleteBtn} onClick={() => removeItem(item.id)}>🗑</button>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={styles.cartTotals}>
                        <h3>Cart Totals</h3>
                        <p>
                            <strong>Total</strong> 
                            <span>
                                Rs {totalAmount.toLocaleString()}
                            </span>
                        </p>
                        <button className={styles.checkoutBtn}>Check Out</button>
                    </div>
                </div>
            </div>
            <div className={styles.featureContainer}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                    <img src={feature.image} alt={feature.title} className={styles.featureIcon} />
                    <div className={styles.featureText}>
                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                        <p className={styles.featureDescription}>{feature.desc}</p>
                    </div>
            </div>
      ))}
    </div>
        </>
    );
};
export default Cart;
