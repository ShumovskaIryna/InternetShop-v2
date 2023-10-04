import React from 'react';

const SomeErrorScreen = (props) => {
  return (
    <>
      <div className="black">
        {' '}
        <div className="white">
          {' '}
          <div
            className="close"
            onClick={() => {
              props.toggleProductDetails((current) => !current);
            }}
          >
            Close
          </div>
          <div className="hero">
            <div className="card text-bg-dark mt-5">
              <img
                src="/assets/red-panda.jpeg"
                className="card-img"
                alt="Red_Panda"
                height="300px"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                  <h5 className="card-title display-3 fw-bolder mb-0">SOMETHING'S GOING WRONG</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SomeErrorScreen;
