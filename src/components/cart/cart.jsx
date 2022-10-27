import { Link } from "react-router-dom";
import "./cart.css";

function Cart({ img, title, rout }) {
  return (
    <>
      <div className="cart">
        <img src={img} alt="" />
        <h3>
          <Link to={`/${rout}`}>{title}</Link>
        </h3>
      </div>
    </>
  );
}

export default Cart;
