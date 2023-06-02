// import React from "react";
import Link from "next/link";
import Image from "next/image";
const Cards = ({ title, desc, price, img, id }) => {
  // const link = title.replace(" ", "-")
  // console.log(link)
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "18rem" }}>
        {/* <img src={img} className="card-img-top" alt="..." /> */}
        <Image
          src={img}
          className="card-img-top"
          alt="image"
          width={100}
          height={100}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">{desc}</p> */}

          <span>{price}</span>
          <br />
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          <Link href={`/blog/${id}`} className="btn btn-outline-secondary">
            Go to Details
          </Link>
        </div>
      </div>
    </div>
  );
};
async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

export default async function Blog() {
  const res = await getData();
  // console.log("res", res)
  return (
    <div className="container section">
      <div className="row">
        {res.products.map((val) => (
          <Cards
            title={val.title}
            desc={val.description}
            price={val.price}
            img={val.thumbnail}
            id={val.id}
          />
        ))}
      </div>
    </div>
  );
}
