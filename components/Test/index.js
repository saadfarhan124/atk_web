import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
const Test = () => {

    // const myref = useRef();
    // const myref1 = useRef();
    // console.clear();

    // gsap.set('.center', {xPercent:-50, yPercent:-50})
    // gsap.set('section', { autoAlpha: 0 })
    
    
    // var sections = gsap.utils.toArray("section");
    
    
    
    // var largeTL = gsap.timeline({
    //   scrollTrigger: { 
    //     trigger: '.section01',
    //     pin: '.wrap-all',
    //     scrub: 0.5,
    //     start: "top top",
    //     //end: '+=550%',
    //     end: '+=950%',
    //   },
    // })
    
    
    
    
    // sections.forEach(function(elem,i) {
    
    //   gsap.set("section", {zIndex: (i, target, targets) => targets.length - i});    
      
    //   var lines = elem.querySelectorAll(".lines");
    
    //   const tlDelay = i;
      
    //   var smallTL = gsap.timeline()
    
    //   smallTL
    //   .to(elem, { autoAlpha: 1 }, tlDelay)
    //   .from(lines, {xPercent:-100, duration: 1, ease:'power2.out', stagger: 0.6 })
    //   .to(elem, { autoAlpha: 0 })
    //   ;
      
    //   largeTL.add(smallTL, tlDelay);
    
    //   })
  return (
   <>
   
<div className="wrap-all">

<section className="section section01"> 
  <h1>Section 01</h1>

  <div className="wrap center">
    <h2 className="lines">Take a BRAKE!</h2>
    <h2 className="lines">Have a COFFEE.</h2>
  </div>

</section>

<section className="section"> 
  <h1 className="line">Section 02</h1> 

  <div className="wrap center">
    <h2 className="lines">Take a BRAKE!</h2>
    <h2 className="lines">Have a COFFEE.</h2>
  </div>

</section>

<section className="section"> 
  <h1 className="line">Section 03</h1>

  <div className="wrap center">
    <h2 className="lines">Take a BRAKE!</h2>
    <h2 className="lines">Have a COFFEE.</h2>
    <h2 className="lines">Enjoy GreenSock.</h2>
  </div>

</section>

<section className="section"> 
  <h1>End</h1>  
</section>
  
</div>

   </>

  );
};

export default Test;
