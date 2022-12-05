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

      } else if (window.scrollY >= 3125 && window.scrollY <= 7200) {
        setShadow(2);
      } else if (window.scrollY >= 7201) {
        setShadow(3);
      }
    }
  };
  console.log("Number" + shadow);
  return (
    <div className="containerw" style={{ border: '0px solid red' }}>
      <div
        className={`${shadow === 1 && "sticky"} ${shadow === 2 && "shadow"} ${shadow === 3 && "shadowhide"
          }`}
        id="bar"
      >
        {/* {window.screenY >= } */}

        <h1 className="text1">BRAND STRATEGY PROCESS</h1>
      </div>
      <div className="mySwiper" >
        <Hide>
          <div className="slides" style={{border:'0px solid red'}}>
            <div className="flex-container" style={{border:'0px solid red',padding:'0',height:'100%'}} >


              <div className="mani" style={{ display: 'flex', flexDirection: 'row' ,border:'0px solid red',padding:'0',margin:'0',alignItems:'center'}} >

                <div style={{ flex: 1, }} className="box1">
                  <h2 className="tot"><span>Step1</span></h2>



                </div>
                <div style={{ flex: 2 }}>
                  <div style={{ height: '100%', paddingLeft: '1rem' }}>
                    <div className="right-head">
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
        </Hide>
        <Show>
          <div className="slides">
            <div className="flex-container" >
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >

                <div >
                  <div className="mobstep">Step1</div>
                  <div >
                    <div className="mobhead">
                      Immerse & <br /> Research_
                    </div>
                    <div className="mobtext" style={{ marginTop: '2rem' }}>Brand immersion</div>
                    <div className="mobtext">Brand audit</div>

                    <div className="mobtext">Market research</div>

                    <div className="mobtext">Competitor analysis</div>
                    <div className="mobtext">Audience analysis</div>
                  </div>

                </div>
              </div>


            </div></div>
        </Show>

        {/* ////////////////// */}
        <Hide>
          <div className="slides">
            <div className="flex-container" >


              <div style={{ display: 'flex', flexDirection: 'row' }} className="mani">

                <div style={{ flex: 1, }} className="box1">
                  <h2 className="tot"><span>Step2</span></h2>



                </div>
                <div style={{ flex: 2 }}>
                  <div style={{ height: '100%', paddingLeft: '1rem' }}>
                    <div className="right-head">
                      Fieldwork_
                    </div>
                    <div className="mobtext" style={{ marginTop: '2rem' }}> Customer, employee</div>
                    <div className="mobtext">or partner interviews</div>

                    <div className="mobtext">Questionnaires</div>

                    <div className="mobtext">Polls</div>
                    <div className="mobtext">Pop-up agency</div>
                  </div>

                </div>
              </div>


            </div></div>
        </Hide>
        <Show>
          <div className="slides">
            <div className="flex-container" >
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >

                <div >
                  <div className="mobstep">Step2</div>
                  <div >
                    <div className="mobhead">
                      Fieldwork_
                    </div>
                    <div className="mobtext" style={{ marginTop: '2rem' }}> Customer, employee</div>
                    <div className="mobtext">or partner interviews</div>

                    <div className="mobtext">Questionnaires</div>

                    <div className="mobtext">Polls</div>
                    <div className="mobtext">Pop-up agency</div>
                  </div>

                </div>
              </div>


            </div></div>
        </Show>


        {/* /////////// */}
        <Hide>
          <div className="slides">
            <div className="flex-container" >


              <div style={{ display: 'flex', flexDirection: 'row' }} className="mani">

                <div style={{ flex: 1, }} className="box1">
                  <h2 className="tot"><span>Step3</span></h2>



                </div>
                <div style={{ flex: 2 }}>
                  <div style={{ height: '100%', paddingLeft: '1rem' }}>
                    <div className="right-head">
                      Workshop_
                    </div>
                    <div className="mobtext" style={{ marginTop: '2rem' }}> Collaborative workshop</div>
                    <div className="mobtext">Q & A</div>

                    <div className="mobtext">Group exercises</div>

                    <div className="mobtext">Identification of brand</div>
                    <div className="mobtext">objectives and opportunities</div>
                  </div>

                </div>
              </div>


            </div></div>
        </Hide>
        <Show>
          <div className="slides">
            <div className="flex-container" >
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >

                <div >
                  <div className="mobstep">Step3</div>
                  <div >
                    <div className="mobhead">
                      Workshop_
                    </div>
                    <div className="mobtext" style={{ marginTop: '2rem' }}> Collaborative workshop</div>
                    <div className="mobtext">Q & A</div>

                    <div className="mobtext">Group exercises</div>

                    <div className="mobtext">Identification of brand</div>
                    <div className="mobtext">objectives and opportunities</div>
                  </div>

                </div>
              </div>


            </div></div>
        </Show>




        {/* /////////////////// */}

        <Hide>
          <div className="slides">
            <div className="flex-container" >


              <div style={{ display: 'flex', flexDirection: 'row' }} className="mani">

                <div style={{ flex: 1, }} className="box1">
                  <h2 className="tot"><span>Step4</span></h2>



                </div>
                <div style={{ flex: 2 }}>
                  <div style={{ height: '100%', paddingLeft: '1rem' }}>
                    <div className="right-head" style={{border:'0px solid red',padding:'0',paddingBottom:2}}>
                      Brand Strategy_
                    </div>
                    <div className="mobtext" style={{ marginTop: '0rem' }}> Audience personas</div>
                    <div className="mobtext">    Brand positioning & Differentiation</div>

                    <div className="mobtext">Value proposition</div>

                    <div className="mobtext">Archetypes</div>
                    <div className="mobtext">Messaging</div>
                    <div className="mobtext">Brand compass</div>

                  </div>

                </div>
              </div>


            </div></div>
        </Hide>
        <Show>
          <div className="slides">
            <div className="flex-container" >
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >

                <div >
                  <div className="mobstep">Step4</div>
                  <div >
                    <div className="mobhead">
                      Brand Strategy_
                    </div>
                    <div className="mobtext" style={{ marginTop: '2rem' }}> Audience personas</div>
                    <div className="mobtext">    Brand positioning & Differentiation</div>

                    <div className="mobtext">Value proposition</div>

                    <div className="mobtext">Archetypes</div>
                    <div className="mobtext">Messaging</div>
                    <div className="mobtext">Brand compass</div>

                  </div>

                </div>
              </div>


            </div></div>
        </Show>

        {/* /// */}
        <Hide>
          <div className="slides">
            <div className="flex-container" >


              <div style={{ display: 'flex', flexDirection: 'row' }} className="mani">

                <div style={{ flex: 1, }} className="box1">
                  <h2 className="tot"><span>Step5</span></h2>



                </div>
                <div style={{ flex: 2 }}>
                  <div style={{ height: '100%', paddingLeft: '1rem' }}>
                    <div className="right-head">
                      Brand Development_
                    </div>
                    <div className="mobtext" style={{ marginTop: '2rem' }}>Naming</div>
                    <div className="mobtext">    Logo</div>

                    <div className="mobtext">Icon</div>

                    <div className="mobtext">Colour palette</div>
                    <div className="mobtext">Typography</div>
                    <div className="mobtext">Graphic language</div>
                    <div className="mobtext">Imagery style</div>
                    <div className="mobtext">Brand in action</div>
                    <div className="mobtext">Guidelines</div>
                    <div className="mobtext">Brand book</div>
                  </div>

                </div>
              </div>


            </div></div>
        </Hide>
        <Show>
          <div className="slides">
            <div className="flex-container" >
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >

                <div >
                  <div className="mobstep">Step5</div>
                  <div >
                    <div className="mobhead">
                      Brand Development_
                    </div>
                    <div className="mobtext" style={{ marginTop: '2rem' }}>Naming</div>
                    <div className="mobtext">    Logo</div>

                    <div className="mobtext">Icon</div>

                    <div className="mobtext">Colour palette</div>
                    <div className="mobtext">Typography</div>
                    <div className="mobtext">Graphic language</div>
                    <div className="mobtext">Imagery style</div>
                    <div className="mobtext">Brand in action</div>
                    <div className="mobtext">Guidelines</div>
                    <div className="mobtext">Brand book</div>
                  </div>

                </div>
              </div>


            </div></div>

        </Show>

        {/* //// */}

        <Hide>
          <div className="slides">
            <div className="flex-container" >


              <div style={{ display: 'flex', flexDirection: 'row' }} className="mani">

                <div style={{ flex: 1, }} className="box1">
                  <h2 className="tot"><span>Step6</span></h2>



                </div>
                <div style={{ flex: 2 }}>
                  <div style={{ height: '100%', paddingLeft: '1rem' }}>
                    <div className="right-head">
                      Testing_
                    </div>
                    <div className="mobtext" style={{ marginTop: '2rem' }}>Customer, employee</div>
                    <div className="mobtext">     or partner interviews</div>

                    <div className="mobtext">Questionnaires</div>

                    <div className="mobtext">Focus groups</div>
                    <div className="mobtext">User testing</div>
                    <div className="mobtext">Mystery shopping</div>
                    <div className="mobtext">A/B testing</div>

                  </div>

                </div>
              </div>


            </div></div>
        </Hide>
        <Show>
          <div className="slides">
            <div className="flex-container" >
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >

                <div >
                  <div className="mobstep">Step6</div>
                  <div >
                    <div className="mobhead">
                      Testing_
                    </div>
                    <div className="mobtext" style={{ marginTop: '2rem' }}>Customer, employee</div>
                    <div className="mobtext">     or partner interviews</div>

                    <div className="mobtext">Questionnaires</div>

                    <div className="mobtext">Focus groups</div>
                    <div className="mobtext">User testing</div>
                    <div className="mobtext">Mystery shopping</div>
                    <div className="mobtext">A/B testing</div>

                  </div>

                </div>
              </div>


            </div></div>
        </Show>
        {/* //////// */}
        <Hide>
          <div className="slides">
            <div className="flex-container" >


              <div style={{ display: 'flex', flexDirection: 'row' }} className="mani">

                <div style={{ flex: 1, }} className="box1">
                  <h2 className="tot"><span>Step7</span></h2>



                </div>
                <div style={{ flex: 2 }}>
                  <div style={{ height: '100%', paddingLeft: '1rem' }}>
                    <div className="right-head">
                      Creative Production_
                    </div>
                    <div className="mobtext" >Digital design</div>
                    <div className="mobtext">     Video</div>

                    <div className="mobtext">Photography</div>

                    <div className="mobtext">Animation</div>
                    <div className="mobtext">Print</div>
                    <div className="mobtext">Packaging</div>
                    <div className="mobtext">Campaigns</div>
                    <div className="mobtext"> Social media guidelines & beyond...</div>


                  </div>

                </div>
              </div>


            </div></div>
        </Hide>
        <Show>
          <div className="slides">
            <div className="flex-container" >
              <div style={{ display: 'flex', flexDirection: 'column' }} >

                <div >
                  <div className="mobstep">Step7</div>
                  <div >
                    <div className="mobhead" >
                      Creative Production_
                    </div>
                    <div className="mobtext" style={{ marginTop: '2rem' }}>Digital design</div>
                    <div className="mobtext">     Video</div>

                    <div className="mobtext">Photography</div>

                    <div className="mobtext">Animation</div>
                    <div className="mobtext">Print</div>
                    <div className="mobtext">Packaging</div>
                    <div className="mobtext">Campaigns</div>
                    <div className="mobtext"> Social media guidelines & beyond...</div>


                  </div>

                </div>
              </div>


            </div></div>
        </Show>


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
  );
};

export default Scrolling;
