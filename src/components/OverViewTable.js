
import React from 'react';
import '.././OverViewTable.css';
import moment from 'moment';
function OverViewTable(props) {
    const { row } = props;
    {
        console.log(new Date(row?.dt * 1000))
        console.log(moment(row?.dt * 1000).format('DD/MM'))

    }
    return (
        <React.Fragment>
            <div className="detail-row space-between">
                <div className="detail-column">
                    <div className="detail-row2">
                        <p>{moment(row?.dt * 1000).format('DD/MM')}</p>
                    </div>
                    <div className="detail-row2">
                        <div style={{ display: 'flex' }}>
                            <img src={require("../icons/temperature.svg")} alt="temperature" style={{ marginRight: 5, width: 35 }}></img>
                            <div style={{ marginTop: 5, marginRight: 15, marginBottom: 0, marginLeft: 0 }}>{row?.temp?.min}°</div>
                            <div style={{ marginTop: 5, marginRight: 15, marginBottom: 0, marginLeft: 0 }}>{row?.temp?.max}°</div>
                        </div>
                    </div>
                </div>
                <div className="detail-column">
                    <img src={require("../icons/" + row?.weather?.[0]?.icon + ".svg")} alt="snowflake"></img>
                    {/*<p>Description {row?.weather?.[0]?.main}</p>*/}
                </div>
                <div className="detail-column">
                    <div className="detail-column2">
                        <div style={{ display: 'flex' }}>
                            <img src={require("../icons/humidity.svg")} alt="humidity" style={{ marginRight: 24, width: 35 }}></img>
                            <div style={{ marginTop: 7 }}>{row?.humidity}%</div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <img src={require("../icons/pressure.svg")} alt="pressure" style={{ marginRight: 24, width: 35 }}></img>
                            <div style={{ marginTop: 7 }}>{row?.pressure} hPa</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OverViewTable;