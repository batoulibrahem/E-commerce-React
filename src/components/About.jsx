import React from "react";
import Navbar from "./Navbar";

function About() {
  return (<>
 
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">About LA Collection</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="lead text-muted">
            LA Collection is more than just a store — it's a curated experience
            for those who appreciate elegance, individuality, and timeless style.
          </p>

          <p className="text-muted">
            Founded with passion and precision, LA Collection began as a vision
            to bring refined fashion into everyday life. What started as a small
            idea has grown into a destination for style lovers across the region.
          </p>

          <p className="text-muted">
            We believe fashion is a form of self-expression. Our mission is to
            empower you to feel confident, inspired, and uniquely you through
            every piece we offer.
          </p>

          <ul className="list-unstyled mt-4">
            <li className="mb-2">
              ✅ Carefully selected collections
            </li>
            <li className="mb-2">
              ✅ Limited-edition pieces
            </li>
            <li className="mb-2">
              ✅ Exceptional customer care
            </li>
            <li className="mb-2">
              ✅ Fast and secure delivery
            </li>
          </ul>

          <blockquote className="blockquote mt-4 text-center">
            <p className="fst-italic">
              “Style is a way to say who you are without having to speak.”  
            </p>
            <footer className="blockquote-footer">Rachel Zoe</footer>
          </blockquote>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
