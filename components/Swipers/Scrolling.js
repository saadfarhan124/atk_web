import React, { useEffect, useState } from "react";

const Scrolling = () => {
  const [shadow, setShadow] = useState(3);

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
      if (window.scrollY >= 2000 && window.scrollY <= 2399) {
        //      if (window.scrollY + 10 >= bar.offsetTop)
        // why +10 ?? will see
        setShadow(1);
      } else if (window.scrollY >= 2400 && window.scrollY <= 5630) {
        setShadow(2);
      } else if (window.scrollY >= 5631) {
        setShadow(3);
      }
    }
    //Tab View
    else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
      if (window.scrollY >= 2100 && window.scrollY <= 2599) {
        //      if (window.scrollY + 10 >= bar.offsetTop)
        // why +10 ?? will see
        setShadow(1);
      } else if (window.scrollY >= 2600 && window.scrollY <= 5730) {
        setShadow(2);
      } else if (window.scrollY >= 5731) {
        setShadow(3);
      }
    } //Browser View
    else if (window.innerWidth >= 1024) {
      if (window.scrollY >= 2300 && window.scrollY <= 2899) {
        //      if (window.scrollY + 10 >= bar.offsetTop)
        // why +10 ?? will see
        setShadow(1);
      } else if (window.scrollY >= 2900 && window.scrollY <= 6550) {
        setShadow(2);
      } else if (window.scrollY >= 6551) {
        setShadow(3);
      }
    }
  };
  console.log("Number" + shadow);
  return (
    <div className="containerw" >
      <div
        className={`${shadow === 1 && "sticky"} ${shadow === 2 && "shadow"} ${
          shadow === 3 && "shadowhide"
        }`}
        id="bar"
      >
        <h1 className="text1">BRAND STRATEGY PROCESS</h1>
      </div>
      <div className="mySwiper">
        <div className="slides">
          <div className="flex-container">
            <div style={{ flex: 1, border: "0px solid green" }}>
              <div
                className="title-div"
                style={{
                  display: "flex",
                  border: "0px solid grey",
                  height: "90%",
                  paddingTop: "50%",
                  paddingLeft: "50%",
                  justifyContent: "center",
                  border: "0px solid red",
                }}
              >
                <div className="title">
                  Step<span style={{ paddingRight: "5px" }}></span>1
                </div>
              </div>
            </div>
            <div
              style={{
                flex: 8,
                border: "0px solid green",
                paddingLeft: "1rem",
                paddingTop: "2rem",
                textAlign: "left",
              }}
            >
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
        <div className="slides">
          <div className="flex-container">
            <div style={{ flex: 1, border: "0px solid green" }}>
              <div
                className="title-div"
                style={{
                  display: "flex",
                  border: "0px solid grey",
                  height: "100%",

                  paddingTop: "80%",
                  paddingLeft: "50%",
                  justifyContent: "center",
                  border: "0px solid red",
                }}
              >
                <div className="title">
                  Step<span style={{ paddingRight: "5px" }}></span>2
                </div>
              </div>
            </div>
            <div
              style={{
                flex: 8,
                border: "0px solid green",
                paddingLeft: "1rem",
                paddingTop: "2rem",
                textAlign: "left",
              }}
            >
              <div className="right-head">Fieldwork_</div>

              <div className="right-list">
                Customer, employee <br /> or partner interviews
              </div>
              <div className="right-list">Questionnaires</div>
              <div className="right-list">Polls</div>
              <div className="right-list">Pop-up agency</div>
            </div>
          </div>
        </div>{" "}
        <div className="slides">
          <div className="flex-container">
            <div style={{ flex: 1, border: "0px solid green" }}>
              <div
                className="title-div"
                style={{
                  display: "flex",
                  border: "0px solid grey",
                  height: "80%",

                  paddingTop: "100%",
                  paddingLeft: "50%",
                  justifyContent: "center",
                  border: "0px solid red",
                }}
              >
                <div className="title">
                  Step<span style={{ paddingRight: "5px" }}></span>3
                </div>
              </div>
            </div>
            <div
              style={{
                flex: 8,
                border: "0px solid green",
                paddingLeft: "1rem",
                paddingTop: "2rem",
                textAlign: "left",
              }}
            >
              <div className="right-head">Workshop_</div>
              <div className="right-list">Collaborative workshop</div>
              <div className="right-list">Q & A</div>
              <div className="right-list">Group exercises</div>
              <div className="right-list">
                Identification of brand <br />
                objectives and opportunities{" "}
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="slides" id="slide4">
          <div className="flex-container">
            <div style={{ flex: 1, border: "0px solid green" }}>
              <div
                className="title-div"
                style={{
                  display: "flex",
                  border: "0px solid grey",
                  height: "75%",

                  paddingTop: "50%",
                  paddingLeft: "50%",
                  justifyContent: "center",
                  border: "0px solid red",
                }}
              >
                <div className="title">
                  Step<span style={{ paddingRight: "5px" }}></span>4
                </div>
              </div>
            </div>
            <div
              style={{
                flex: 8,
                border: "0px solid green",
                paddingLeft: "1rem",
                paddingTop: "2rem",
                textAlign: "left",
              }}
            >
              <div className="right-head">Brand Strategy_</div>

              <div className="right-list">Audience personas</div>
              <div className="right-list">
                Brand positioning & Differentiation
              </div>

              <div className="right-list">Value proposition</div>

              <div className="right-list">Brand purpose</div>
              <div className="right-list">Tone of voice</div>
              <div className="right-list">Values and vision</div>
              <div className="right-list">Archetypes</div>
              <div className="right-list">Messaging</div>
              <div className="right-list">Brand compass</div>
            </div>
          </div>
        </div>
        <div className="slides" id="slide5">
          <div className="flex-container">
            <div style={{ flex: 1, border: "0px solid green" }}>
              <div
                className="title-div"
                style={{
                  display: "flex",
                  border: "0px solid grey",
                  height: "70%",

                  paddingTop: "50%",
                  paddingLeft: "50%",
                  justifyContent: "center",
                  border: "0px solid red",
                }}
              >
                <div className="title">
                  Step<span style={{ paddingRight: "5px" }}></span>5
                </div>
              </div>
            </div>
            <div
              style={{
                flex: 8,
                border: "0px solid green",
                paddingLeft: "1rem",
                paddingTop: "2rem",
                textAlign: "left",
              }}
            >
              <div className="right-head">Brand Development_</div>
              <div className="right-list">Naming</div>
              <div className="right-list">Logo</div>

              <div className="right-list">Icon</div>

              <div className="right-list">Colour palette</div>
              <div className="right-list">Typography</div>
              <div className="right-list">Graphic language</div>
              <div className="right-list">Imagery style</div>
              <div className="right-list">Brand in action</div>
              <div className="right-list">Guidelines</div>
              <div className="right-list">Brand book </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="flex-container">
            <div style={{ flex: 1, border: "0px solid green" }}>
              <div
                className="title-div"
                style={{
                  display: "flex",
                  border: "0px solid grey",
                  height: "95%",

                  paddingTop: "50%",
                  paddingLeft: "50%",
                  justifyContent: "center",
                  border: "0px solid red",
                }}
              >
                <div className="title">
                  Step<span style={{ paddingRight: "5px" }}></span>6
                </div>
              </div>
            </div>
            <div
              style={{
                flex: 8,
                border: "0px solid green",
                paddingLeft: "1rem",
                paddingTop: "2rem",
                textAlign: "left",
              }}
            >
              <div className="right-head">Testing_</div>
              <div className="right-list">
                Customer, employee <br />
                or partner interviews
              </div>
              <div className="right-list">Questionnaires</div>

              <div className="right-list">Focus groups</div>

              <div className="right-list">User testing</div>
              <div className="right-list">Mystery shopping</div>
              <div className="right-list">A/B testing</div>
            </div>
          </div>
        </div>
        <div className="slides" id="slide7">
          <div className="flex-container">
            <div style={{ flex: 1, border: "0px solid green" }}>
              <div
                className="title-div"
                style={{
                  display: "flex",
                  border: "0px solid grey",
                  height: "65%",

                  paddingTop: "50%",
                  paddingLeft: "50%",
                  justifyContent: "center",
                  border: "0px solid red",
                }}
              >
                <div className="title">
                  Step<span style={{ paddingRight: "5px" }}></span>7
                </div>
              </div>
            </div>
            <div
              style={{
                flex: 8,
                border: "0px solid green",
                paddingLeft: "1rem",
                paddingTop: "2rem",

                textAlign: "left",
              }}
            >
              <div className="right-head">Creative Production_</div>
              <div className="right-list">Digital design</div>
              <div className="right-list">Video</div>

              <div className="right-list">Photography</div>

              <div className="right-list">Animation</div>
              <div className="right-list">Print</div>
              <div className="right-list">Packaging</div>
              <div className="right-list">Campaigns</div>
              <div className="right-list">
                Social media guidelines & beyond...
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
  );
};

export default Scrolling;
