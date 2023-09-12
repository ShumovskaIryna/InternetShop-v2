import React from "react"
import Products from './Products';

const Home = () => {
    return (
      <div className="hero">
        <div className="card text-bg-dark">
            <img src="/assets/red-panda.jpeg" className="card-img" alt="Red_Panda" height="460px"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">LET'S GO SHOPPING</h5>
                <p className="card-text lead fs-2">A lot of staff for you. CHOOSE, BUY & TRY. </p>
                </div>
             </div>
        </div>
      <Products/>
      </div>
    )
}

export default Home;