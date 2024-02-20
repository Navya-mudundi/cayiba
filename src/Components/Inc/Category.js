import React from "react";
import '../Inc/Category.css';
import ProductDetails from '../Pages/ProductDetails';
// import Card from "./Card"; 

function Category() {
  return (
    <div className="Wrapper">
      <Card
        img="https://www.cayiba.com/uploads/listings/12c29c768be874a31401a3a5f1fc13d0.png"
        title='frock'
        description='jhgudyg'
        price='240'
      />
      <Card
        img="https://www.cayiba.com/uploads/listings/12c29c768be874a31401a3a5f1fc13d0.png"
        title='frock'
        description='jhgudyg'
        price='240'
      />
      <Card
        img="https://www.cayiba.com/uploads/listings/12c29c768be874a31401a3a5f1fc13d0.png"
        title='frock'
        description='jhgudyg'
        price='240'
      />
      <Card
        img="https://www.cayiba.com/uploads/listings/12c29c768be874a31401a3a5f1fc13d0.png"
        title='frock'
        description='jhgudyg'
        price='240'
      />
      <Card
        img="https://www.cayiba.com/uploads/listings/12c29c768be874a31401a3a5f1fc13d0.png"
        title='frock'
        description='jhgudyg'
        price='240'
      />
      <Card
        img="https://www.cayiba.com/uploads/listings/12c29c768be874a31401a3a5f1fc13d0.png"
        title='frock'
        description='jhgudyg'
        price='240'
      />
    </div>
   );
}

function Card(props) {
  return (
    <div className="Card">
      <a href="/productDetails"className="Card1">
      <img src={props.img} alt={props.title} className="Card-img" />
     </a>
     <div class="card-top1">
      <p>FEATURED</p>
     </div>

      <div className="Card-body">
        <h2 className="Card-title">{props.title}</h2>
        <p className="Card-description">{props.description}</p>
        <h3 className="Card-price">{props.price}</h3>
        <button className="Card-btn">sell</button>
      </div>
    </div>
  );
}
export default Category;