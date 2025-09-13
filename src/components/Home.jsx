import React from "react"
import Products from "./Products"
function Home() {
  

  return (<>
  
    <>
      <div className="card text-bg-dark border-0">
        <img
        src="/bg.jpg"
        className="card-img"
        alt="Background"
        style={{ height: "550px", objectFit: "cover", width: "100%",  background:"Transparent"}}
        />

        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
           <h5 className="card-title display-3 fw-bold mb-0" style={{ color: '#022527ff' }}>
             New SEASON ARRIVALS
               </h5>
           <p className="card-text lead fs-2" style={{ color: '#022527ff' }}>
             Check Out All The Trends
           </p>
          </div>
        </div>
      </div>
      <Products />
    </>
  

    </>
  )
}

export default Home