import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Album1 from '../../assets/Album 1.png';
import Album2 from '../../assets/Album 2.png';
import Album3 from '../../assets/Album 3.png';
import Album4 from '../../assets/Album 4.png';
import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  const params = useParams();

  return (
    <Fragment>
      {params.product_id === "1" && (
        <section>
          <div className={classes.sections}>
            <img
              src={Album1}
              alt="Website"
              className={classes.img}
            ></img>
            <div className={classes.details}>
              <h1 className={classes.title}>Album 1</h1>
              <h2>best album of the year</h2>
              <button className={classes.rating}>4.5⭐</button>
              <button className={classes.price}>$100</button>
            </div>
          </div>
          <div className={classes.reviews}>
            <h5> Reviews </h5>
            <p> Yash </p>
            <p> Best album. Worth buying</p>
            <p>⭐⭐⭐⭐</p>
          </div>
        </section>
      )}
      {params.product_id === "2" && (
        <section>
          <div className={classes.sections}>
            <img
              src={Album2}
              alt="Website"
              className={classes.img}
            ></img>
            <div className={classes.details}>
              <h1 className={classes.title}>Album 2</h1>
              <h2>best album of this month</h2>
              <button className={classes.rating}>4.3⭐</button>
              <button className={classes.price}>$50</button>
            </div>
          </div>
          <div className={classes.reviews}>
            <h5> Reviews </h5>
            <p> vaibhav </p>
            <p> Awesome in cheapest rate</p>
            <p>⭐⭐⭐</p>
            <p> Ayush </p>
            <p> best album</p>
            <p>⭐⭐⭐⭐</p>
          </div>
        </section>
      )}

      {params.product_id === "3" && (
        <section>
          <div className={classes.sections}>
            <img
              src={Album3}
              alt="Website"
              className={classes.img}
            ></img>
            <div className={classes.details}>
              <h1 className={classes.title}>Album 3</h1>
              <h2>best album of this month</h2>
              <button className={classes.rating}>4.3⭐</button>
              <button className={classes.price}>$70</button>
            </div>
          </div>
          <div className={classes.reviews}>
            <h5> Reviews </h5>

            <p> rishav </p>
            <p> best album</p>
            <p>⭐⭐⭐⭐</p>
            <p> Durgesh </p>
            <p> Awesome in cheapest rate</p>
            <p>⭐⭐⭐</p>
          </div>
        </section>
      )}

      {params.product_id === "4" && (
        <section>
          <div className={classes.sections}>
            <img
              src={Album4}
              alt="Website"
              className={classes.img}
            ></img>
            <div className={classes.details}>
              <h1 className={classes.title}>Album 4</h1>
              <h2>Latest this week</h2>
              <button className={classes.rating}>2.3⭐</button>
              <button className={classes.price}>$100</button>
            </div>
          </div>
          <div className={classes.reviews}>
            <h5> Reviews </h5>

            <p> Rishav </p>
            <p>not worth buying..</p>
            <p>⭐</p>
            <p> Mahesh </p>
            <p> Average!!!</p>
            <p>⭐⭐⭐</p>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default ProductDetails;