import React from "react";
import {Header, Footer,Blog,Feature, Possibility, Whatgp3, Features} from './containers/index'
import {Navbar,Cta, Brand,} from './component/index'
import './App.css'
function App() {
  return (<>
  <div>
    <section className="">
  <div className="gradient__bg">
     <Navbar/>
     <Header/>
  </div>
 <Brand></Brand>
  <Whatgp3/>
  <Features/>
   <Possibility/>
   <Cta/>
   <Blog/>
   <Footer/>
  </section>
  </div>
  </>
    
  );
}

export default App;
