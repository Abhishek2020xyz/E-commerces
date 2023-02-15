import { Button } from "react-bootstrap";


import Table from 'react-bootstrap/Table';

function Home(){
    return(
        <div>
        <div className="header">
            <h1>The Generics</h1>
            <button className="latest-album">Get our latest Album</button>
            <button class="play-btn">►</button>
            
        </div>
        {/* <section id="tours" class="container">
            <h2>Tours</h2>
            <div class="tour-item">
                <span class="tour-date">JUL 16</span>
                <span class="tour-place">DETROIT,MI</span>
                <span class="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
                <button class="btn btn-primary">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span class="tour-date">JUL 19</span>
                <span class="tour-place">TORONTO, ON</span>
                <span class="tour-spec-place">BUDWEISER STAGE</span>
                <button class="btn btn-primary">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span class="tour-date">JUL 22</span>
                <span class="tour-place">BRISTOW, VA</span>
                <span class="tour-spec-place">JIGGY LUBE LIVE</span>
                <button class="btn btn-primary">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span class="tour-date">JUL 29</span>
                <span class="tour-place">PHOENIX, AZ</span>
                <span class="tour-spec-place">AK-CHIN PAVILION</span>
                <button class="btn btn-primary">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span class="tour-date">AUG 2</span>
                <span class="tour-place">LAS VEGAS, NV</span>
                <span class="tour-spec-place">T-MOBILE ARENA</span>
                <button class="btn btn-primary">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span class="tour-date">JUL16</span>
                <span class="tour-place">CONCORD, CA</span>
                <span class="tour-spec-place">CONCORD PAVILION</span>
                <button class="btn btn-primary">BUY TICKETS</button>
            </div> */}
        {/* </section> */}
        <div className="a">
        
                 <h1 style={{fontFamily:'Comic Sans MS',textAlign:'center'}}>TOURS</h1>
                <Table striped bordered hover>
               <thead>
                 <tr>
                   <th>#</th>
                   <th>Date</th>
                   <th>Place</th>
                   <th>Event</th>
                   <th>Buy</th>
                 </tr>
              </thead>
              <tbody>
                 <tr>
                   <td>1</td>
                   <td>JUL16</td>
                   <td>DETROIT, MI</td>
                   <td>DTE ENERGY MUSIC THEATRE</td>
                   <td><Button variant="info">Buy Tickets</Button></td>
                 </tr>
                 <tr>
                   <td>2</td>
                   <td>JUL19</td>
                   <td>TORONTO,ON</td>
                   <td>
               BUDWEISER STAGE</td>
              <td><Button variant="info">Buy Tickets</Button></td>
        
                 </tr>
             <tr>
                   <td>3</td>
                   <td>JUL 22</td>
                   <td>BRISTOW, VA</td>
                  <td>JIGGY LUBE LIVE</td>
                   <td><Button variant="info">Buy Tickets</Button></td>
                  
                 </tr>
                 <tr>
                   <td>4</td>
                   <td>JUL 22</td>
                   <td>BRISTOW, VA</td>
                   <td>JIGGY LUBE LIVE</td>
                   <td><Button variant="info">Buy Tickets</Button></td>
                  
                 </tr>
                 <tr>
                   <td>5</td>
                   <td>AUG 2</td>
                   <td>LAS VEGAS, NV</td>
                   <td>
                 T-MOBILE ARENA</td>
                 <td><Button variant="info">Buy Tickets</Button></td>
                  
                 </tr>
                 <tr>
                   <td>6</td>
                   <td>AUG 7</td>
                   <td>BRISTOW, VA</td>
                   <td>JIGGY LUBE LIVE</td>
                   <td><Button variant="info">Buy Tickets</Button></td>
                  
                 </tr>
               </tbody>
             </Table>
                
            </div>
        <footer>
            <div class="footer-title">The Generics</div>
        </footer>
        </div>
        
        
        

        
    )
}
export default Home;
// import React from "react";
// import { Container,Button } from "react-bootstrap";


// import Table from 'react-bootstrap/Table';

// function Home() {

//   return (
//     <div>
//         <div className="generic-section"><h1>The Generics</h1></div>
        
//         <div className="a">
        
//         <h1 style={{fontFamily:'Comic Sans MS',textAlign:'center'}}>TOURS</h1>
//         <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Date</th>
//           <th>Place</th>
//           <th>Event</th>
//           <th>Buy</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>JUL16</td>
//           <td>DETROIT, MI</td>
//           <td>DTE ENERGY MUSIC THEATRE</td>
//           <td><Button variant="info">Buy Tickets</Button></td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>JUL19</td>
//           <td>TORONTO,ON</td>
//           <td>
// BUDWEISER STAGE</td>
// <td><Button variant="info">Buy Tickets</Button></td>

//         </tr>
//         <tr>
//           <td>3</td>
//           <td>JUL 22</td>
//           <td>BRISTOW, VA</td>
//           <td>JIGGY LUBE LIVE</td>
//           <td><Button variant="info">Buy Tickets</Button></td>
          
//         </tr>
//         <tr>
//           <td>4</td>
//           <td>JUL 22</td>
//           <td>BRISTOW, VA</td>
//           <td>JIGGY LUBE LIVE</td>
//           <td><Button variant="info">Buy Tickets</Button></td>
          
//         </tr>
//         <tr>
//           <td>5</td>
//           <td>AUG 2</td>
//           <td>LAS VEGAS, NV</td>
//           <td>
//         T-MOBILE ARENA</td>
//         <td><Button variant="info">Buy Tickets</Button></td>
          
//         </tr>
//         <tr>
//           <td>6</td>
//           <td>AUG 7</td>
//           <td>BRISTOW, VA</td>
//           <td>JIGGY LUBE LIVE</td>
//           <td><Button variant="info">Buy Tickets</Button></td>
          
//         </tr>
//       </tbody>
//     </Table>
        
//     </div>
//     </div>
//   );
// }

// export default Home;