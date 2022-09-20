import React from "react";

export default function Card({ props }) {


  return (
    <div>
    <br/>
    <br/>
      <div
        className="card overflow-hidden"
        style={{ padding: "20px", width: "335px", height: "335px" }}>
        <div class="card-body">
          <div className="row ">
            <div className="col-md-2 text-center">
              <div className="row">
                <div className="col-md-12 p-3 ">
                  <i className="fa-solid fa-caret-up fa-2x"></i>
                 
                </div>
               
              </div>
              
              <div className="row">
        
                <div className="col-md-12">{props.totalVoted}</div>

              </div>
             
              <div className="row">
            
                <div className="col-md-12">
                
                  <i className="fa-solid fa-caret-down fa-2x"></i>
              
                </div>
             
              </div>
              <div class='jk'>Votes</div> 
            </div>
            <div className="col-md-4">
              <img src={props.poster} alt=" " height="150px" width="100%" />
            </div>
            <div className="col-md-6">
              <div className="row">
                <h4 className="col">{props.title}</h4>
              </div>
              <div className="row">
                <div className="col overflow-hidden">
       
                  Language:{props.language}
                  <br />
                  Genre:{props.genre}
                  <br />
                  Sort:{props.voting}
                  <br/>
                
                </div>
              </div>
         
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div className="row w-100 ">
            <div className="col-md-12 ">
            <br/>
              <div className="btn btn-primary" style={{ width: "100%" }}>
                Watch Trailer
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
