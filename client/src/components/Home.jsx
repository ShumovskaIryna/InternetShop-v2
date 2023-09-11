import React from "react"

const Home = () => {
    return (
      <div class="hero">
        <div class="card text-bg-dark">
            <img src="/assets/red-panda.png" class="card-img" alt="Red_Panda" height="560px"/>
            <div class="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                <h5 class="card-title display-3 fw-bolder mb-0">LET'S GO SHOPPING</h5>
                <p class="card-text lead fs-2">A lot of staff for you. CHOOSE, BUY & TRY. </p>
                </div>
             </div>
        </div>
      </div>
    )
}

export default Home;