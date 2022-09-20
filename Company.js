import React from "react";

function Company() {
  return (
    <>
      <div class="about-section">
        <h2>Information about Company</h2>
        <div className="font-style">
         Soft Technologies Pvt Ltd
          <br />
          <br />
          <i>
          <p>
 IT software company aims to provide cutting edge innovative products that are meaningful and strives to surpass the expectation of customers. We aim to educate our customers and deliver the products that helps them.
          The founders of Software are innovators with experience in Research and Development, with good track records in research publishing and patenting. Soft was born as a result of long term relationship and commitment of founders who believe in using technology to serve mankind.
          We're a group of Like minded Geeks.
          We 're India's Leading company for custom cloud software Development.</p>
          <br />
          Address:Sanjayanagar, Bengaluru-56 <br />
          Email Id- Soft@gmail.com<br />
          Phone No- 6745665353
          </i>
        </div>
      </div>
      <br />
      <h2 className="y">Our Team</h2>
      <br /> <br />
      <div className="container">
        <div class="row">
          <div class="column">
            <div class="card">
              <img src="ni1.jpg" alt="Jane" className="c1"></img>
              <div class="container">
                <h2>Jenny Das</h2>
                <p class="title">CEO & Founder</p>
                <p>It has highly Talented Software Engineers</p>
                <p>Jenny@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="ni2.jpg" alt="Jane" className="c1"></img>
              <div class="container">
                <h2>Robert Disouja</h2>
                <p class="title">Director</p>
                <p>Let's Join Geeksynergy</p>
                <p>Robert@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="ni3.jpg" alt="Jane" className="c1"></img>
              <div class="container">
                <h2>Manisha Rao</h2>
                <p class="title">Assistant professor</p>
                <p>Excellent and Brilliant Service providers</p>
                <p>manish123@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="ni4.jpg" alt="Jane" className="c1"></img>
              <div class="container">
                <h2>Jhimmi Pandey</h2>
                <p class="title">Designer</p>
                <p>Excellent Services </p>
                <p>Pandey@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="ni5.jpg" alt="Mike" className="c1"></img>
              <div class="container">
                <h2>Mike Ross</h2>
                <p class="title">Art Director</p>
                <p>Quality Services</p>
                <p>mike@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="ni6.jpg" alt="John" className="c1"></img>
              <div class="container">
                <h2>Swati Singh</h2>
                <p class="title">Designer</p>
                <p>Join Now</p>
                <p>swati@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Soft Technology Company</p>
        <a href="Geeksynergy@gmail.com">Geeksynergy@gmail.com</a>
      </footer>
    </>
  );
}

export default Company;
