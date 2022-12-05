import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Hide = styled.div`
@media screen and (max-width: 680px) {
  display:none;

}
`
const Show = styled.div`
@media screen and (min-width: 679px) {
  display:none;
  justify-content:flex-start;
  align-item:left;
}
`
const Scrolling = () => {
  const [shadow, setShadow] = useState(3);
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    document.addEventListener("scroll", checkScroll);
    return () => document.removeEventListener("scroll", checkScroll);
  }, []);

  const checkScroll = (e) => {
    const bar = document.getElementById("bar");
    // get bar since it offsetTop might not be fixed

    console.log(window.scrollY, bar.offsetTop);

    // why loging these two? you gonna see
    //Mobile View
    if (window.innerWidth <= 767) {
      if (window.scrollY >= 2000 && window.scrollY <= 2735) {
        //      if (window.scrollY + 10 >= bar.offsetTop)
        // why +10 ?? will see
        setFlag(true)
        setShadow(1);
      } else if (window.scrollY >= 2736 && window.scrollY <= 5630) {
        setShadow(2);
      } else if (window.scrollY >= 5631) {
        setShadow(3);
      }
    }
    //Tab View
    else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
      if (window.scrollY >= 2100 && window.scrollY <= 2810) {
        console.log("--")
        //      if (window.scrollY + 10 >= bar.offsetTop)
        // why +10 ?? will see
        setShadow(1);
        console.log("shadow", shadow)
      } else if (window.scrollY >= 2811 && window.scrollY <= 5730) {
        console.log("here")
        setShadow(2);
        console.log("shadow", shadow)

      } else if (window.scrollY >= 5731) {
        setShadow(3);
      }
    } //Browser View
    else if (window.innerWidth >= 1024) {
      if (window.scrollY >= 2300 && window.scrollY <= 3124) {
        //      if (window.scrollY + 10 >= bar.offsetTop)
        // why +10 ?? will see
        setShadow(1);

      } else if (window.scrollY >= 3125 && window.scrollY <= 7350) {
        console.log("000")
        setShadow(2);
      } else if (window.scrollY >= 7351) {
        setShadow(3);
      }
    }
  };
  console.log("Number" + shadow);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="containerw" >
        <div
          className={`${shadow === 1 && "sticky"} ${shadow === 2 && "shadow"} ${shadow === 3 && "shadowhide"
            }`}
          id="bar"
        >
          {/* {window.screenY >= } */}

          <h1 className="text1">BRAND STRATEGY PROCESS</h1>
        </div>
        <div className="mySwiper" >
          <div className="slides" style={{border:'0px solid red'}}>
            <div style={{width: '100%' }}>
              <div className="steptitle">
                Step 1
              </div>
            </div>
            <div className="flex-container" style={{ padding: '0', height: '80vh' }} >
              <div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>

                <div style={{ width: '60%',  height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div>
                    <div className="heading">
                      Immerse & <br /> Research_
                    </div>
                    <div className="right-list">Brand immersion</div>
                    <div className="right-list">Brand audit</div>

                    <div className="right-list">Market research</div>

                    <div className="right-list">Competitor analysis</div>
                    <div className="right-list">Audience analysis</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ////////////////// */}
          <div className="slides">
            <div style={{  width: '100%' }}>
              <div className="steptitle">
                Step 2
              </div>
            </div>
            <div className="flex-container" style={{  padding: '0', height: '80vh' }} >
              <div style={{  height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>

                <div style={{ width: '60%',height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div>
                    <div className="heading">
                      Fieldwork_
                    </div>
                    <div className="right-list">Customer, employee</div>
                    <div className="right-list">or partner interviews</div>

                    <div className="right-list">Questionnaires</div>

                    <div className="right-list">Polls</div>
                    <div className="right-list">Pop-up agency</div>
                  </div>
                </div>

              </div>
            </div>

          </div>



          {/* /////////// */}

          <div className="slides">
            <div style={{ width: '100%' }}>
              <div className="steptitle">
                Step 3
              </div>
            </div>
            <div className="flex-container" style={{ padding: '0', height: '80vh' }} >
              <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>

                <div style={{ width: '60%',  height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div>
                    <div className="heading">
                      Workshop_
                    </div>
                    <div className="right-list">Collaborative workshop</div>
                    <div className="right-list">Q & A</div>

                    <div className="right-list">Group exercises</div>

                    <div className="right-list">Identification of brand</div>
                    <div className="right-list">objectives and opportunities</div>
                  </div>
                </div>

              </div>
            </div>

          </div>









          {/* /////////////////// */}
          <div className="slides">
            <div style={{  width: '100%' }}>
              <div className="steptitle">
                Step 4
              </div>
            </div>
            <div className="flex-container" style={{ padding: '0', height: '80vh' }} >
              <div style={{  height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>

                <div style={{ width: '60%',  height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div>
                    <div className="heading">
                      Brand Strategy_

                    </div>
                    <div className="right-list">Audience personas</div>
                    <div className="right-list">  Brand positioning & Differentiation</div>

                    <div className="right-list">Value proposition</div>

                    <div className="right-list">Archetypes</div>
                    <div className="right-list">Messaging</div>
                  </div>
                </div>

              </div>
            </div>

          </div>


          {/* /// */}


          <div className="slides">
            <div style={{ width: '100%' }}>
              <div className="steptitle">
                Step 5
              </div>
            </div>
            <div className="flex-container" style={{ padding: '0', height: '80vh' }} >
              <div style={{  height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>

                <div style={{ width: '60%',  height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div>
                    <div className="heading">
                      Brand Making_

                    </div>
                    <div className="right-list">Naming</div>
                    <div className="right-list">  Logo ,Icon</div>

                    <div className="right-list">Colour palette</div>

                    <div className="right-list">Typography</div>
                    <div className="right-list">Graphic language</div>
                  </div>
                </div>

              </div>
            </div>

          </div>




          {/* //// */}
          <div className="slides">
            <div style={{  width: '100%' }}>
              <div className="steptitle">
                Step 6
              </div>
            </div>
            <div className="flex-container" style={{ padding: '0', height: '80vh' }} >
              <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>

                <div style={{ width: '60%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div>
                    <div className="heading">
                      Brand Testing_

                    </div>
                    <div className="right-list">Customer, employee</div>
                    <div className="right-list">  or partner interviews</div>

                    <div className="right-list">Questionnaires</div>

                    <div className="right-list">Focus groups</div>
                    <div className="right-list">A/B testing</div>
                  </div>
                </div>

              </div>
            </div>

          </div>





          {/* //////// */}


          <div className="slides">
            <div style={{  width: '100%' }}>
              <div className="steptitle">
                Step 7
              </div>
            </div>
            <div className="flex-container" style={{  padding: '0', height: '80vh' }} >
              <div style={{  height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>

                <div style={{ width: '60%',  height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div>
                    <div className="heading">
                      Creative Production_


                    </div>
                    <div className="right-list">Digital design</div>
                    <div className="right-list">  Video, Photography</div>

                    <div className="right-list">Animation, Print</div>

                    <div className="right-list">Packaging</div>
                    <div className="right-list">Campaigns</div>
                  </div>
                </div>

              </div>
            </div>

          </div>



          <div
            className="slides"
            style={{
              boxShadow: "none",
              border: "none",
              color: "transparent",
              backgroundColor: "transparent",
            }}
          ></div>{" "}
          <div
            className="slides"
            style={{
              boxShadow: "none",
              border: "none",
              color: "transparent",
              backgroundColor: "transparent",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Scrolling;
