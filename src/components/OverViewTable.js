
import React from 'react';
import '.././OverViewTable.css';
function OverViewTable(props) {
    const { row } = props;

    return (
        <React.Fragment>
            <div className="detail-row space-between">
                <div className="detail-column">
                    <div className="detail-row2">
                        <p>{row?.temp?.min}°</p>
                        <p>{row?.temp?.max}°</p>
                    </div>
                    <div className="detail-row2">
                        <p>{row?.dt * 1000}</p>
                    </div>
                </div>
                <div className="detail-column">
                    <img src={require("../icons/" + row?.weather?.[0]?.icon + ".svg")} alt="snowflake"></img>
                    {/*<p>Description {row?.weather?.[0]?.main}</p>*/}
                </div>
                <div className="detail-column">
                    <div className="detail-column2">
                        <div style={{display:'flex'}}>
                            <img src={require("../icons/humidity.svg")} alt="humidity" style={{marginRight:24, width:35 }}></img>
                            <div style={{marginTop:7}}>{row?.humidity}%</div>
                        </div>
                        <div style={{display:'flex'}}>
                            <img src={require("../icons/pressure.svg")} alt="humidity" style={{marginRight:24, width:35 }}></img>
                            <div style={{marginTop:7}}>{row?.pressure} hPa</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OverViewTable;