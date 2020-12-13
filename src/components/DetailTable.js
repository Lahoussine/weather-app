
import React from 'react';
import '.././DetailTable.css';
function DetailTable(props) {
    const { row } = props;

    return     (
        <React.Fragment>
               <div className="detail-row space-between">              
                    <div className="detail-column">
                        <div className="detail-row2">
                        <p>{row?.temp?.min}°</p>
                        <p>{row?.temp?.max}°</p>
                        </div>
                    </div>
                    <div className="detail-column">
                    <img src={require("../icons/"+row?.weather?.[0]?.icon+".svg")} alt="snowflake"></img>
                    {/*<p>Description {row?.weather?.[0]?.main}</p>*/}
                    </div>
                    <div className="detail-column">
                        <div className="detail-column2">
                            <p>Humidity {row?.humidity}</p>
                            <p>Pressure {row?.pressure}</p>
                        </div>                        
                    </div>  
               </div>      
        </React.Fragment>
            );
}

export default DetailTable;