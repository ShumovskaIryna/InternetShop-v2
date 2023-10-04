import React from 'react';

const SubmitPage = () => {
  return (
    <>
      <div className="hero_thanks">
        <div class="wrapper_thanks">
          <div class="thanks_screen">
            <img class="background" src="/assets/vector.png" alt="background" />
            <img class="back-white" src="/assets/white1.png" alt="background" />
            <div class="container_thanks">
              <img class="red_panda" src="/assets/Red_Panda.png" alt="RedPanda" />
              <div class="text_thanks">
                <h5>Thanks, [name].</h5>
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
