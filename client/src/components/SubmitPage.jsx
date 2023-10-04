import React from 'react';
import { useSelector } from 'react-redux';

const SubmitPage = () => {
  const state = useSelector((state) => state.handleName);
  return (
    <>
      <div className="hero_thanks">
        <div className="wrapper_thanks">
          <div className="thanks_screen">
            <img className="background" src="/assets/vector.png" alt="background" />
            <img className="back-white" src="/assets/white1.png" alt="background" />
            <div className="container_thanks">
              <img className="red_panda" src="/assets/Red_Panda.png" alt="RedPanda" />
              <div className="text_thanks">
                <h5>Thanks, {state.value || 'unknown user'}!</h5>
                <p>
                  I just wanted to drop you a quick note and let you know that I received your
                  recent payment.
                </p>
                <h6>I hope to work together again very soon!</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitPage;
