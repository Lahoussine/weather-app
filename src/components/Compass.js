import React, { useState, useRef } from 'react'

//Voir documentation https://codepen.io/GaryHomewood/pen/EygNRa/


const svgNS = "http://www.w3.org/2000/svg";


function drawCenterLine(x1, y1, x2, y2, svg) {
    var centreLineHorizontal = document.createElementNS(svgNS, "line");
    centreLineHorizontal.setAttributeNS(null, "x1", x1);
    centreLineHorizontal.setAttributeNS(null, "y1", y1);
    centreLineHorizontal.setAttributeNS(null, "x2", x2);
    centreLineHorizontal.setAttributeNS(null, "y2", y2);
    centreLineHorizontal.setAttributeNS(null, "stroke", "grey");
    centreLineHorizontal.setAttributeNS(null, "stroke-width", 1);
    centreLineHorizontal.setAttributeNS(null, "stroke-opacity", 0.5);
    svg.appendChild(centreLineHorizontal);
}

function drawCardinalDirection(x, y, displayText, svg) {
    var direction = document.createElementNS(svgNS, "text");
    direction.setAttributeNS(null, "x", x);
    direction.setAttributeNS(null, "y", y);
    direction.setAttributeNS(null, "font-size", "20px");
    direction.setAttributeNS(null, "font-family", "Helvetica");
    direction.setAttributeNS(null, "fill", "white");
    var textNode = document.createTextNode(displayText);
    direction.appendChild(textNode);
    svg.appendChild(direction);
}


function Compass(props) {

    const [state, setState] = useState(props)
    const svg = useRef();
    console.log("#####Compass props#####")
    console.log('Wind Deg '+props?.row?.wind_deg)
    console.log('Wind Speed '+props?.row?.wind_speed)
    console.log("#####Compass props#####")

    return (
        <React.Fragment>
            <svg id="compass" ref={svg => {
                if (svg == null) {
                    //when closing expandable row, svg is null thwn we get error
                    //to avoid this, if svg ref is null then do nothing and return
                    return;
                }
                var pointer = document.createElementNS(svgNS, "polygon");
                pointer.setAttributeNS(null, "points", "150,0 155,12 145,12");
                pointer.setAttributeNS(null, "fill", "red");

                svg.appendChild(pointer);


                var c = document.createElementNS(svgNS, "circle");
                c.setAttributeNS(null, "cx", 150);
                c.setAttributeNS(null, "cy", 150);
                c.setAttributeNS(null, "r", 20);
                c.setAttributeNS(null, "fill", "white");
                c.setAttributeNS(null, "fill-opacity", 0.1);
                svg.appendChild(c);
                drawCenterLine(150, 100, 150, 200, svg);
                drawCenterLine(100, 150, 200, 150, svg);
                drawCardinalDirection(143, 72, "N", svg);
                drawCardinalDirection(228, 158, "E", svg);
                drawCardinalDirection(143, 242, "S", svg);
                drawCardinalDirection(58, 158, "W", svg);

                let w, y2;
                for (var i = 0; i < 360; i += 2) {
                    // draw degree lines
                    var s = "grey";
                    if (i == 0 || i % 30 == 0) {
                        w = 3;
                        s = "white";
                        y2 = 50;
                    } else {
                        w = 1;
                        y2 = 45;
                    }

                    var l1 = document.createElementNS(svgNS, "line");
                    l1.setAttributeNS(null, "x1", 150);
                    l1.setAttributeNS(null, "y1", 30);
                    l1.setAttributeNS(null, "x2", 150);
                    l1.setAttributeNS(null, "y2", y2);
                    l1.setAttributeNS(null, "stroke", s);
                    l1.setAttributeNS(null, "stroke-width", w);
                    l1.setAttributeNS(null, "transform", "rotate(" + i + ", 150, 150)");
                    svg.appendChild(l1);

                    // draw degree value every 30 degrees
                    if (i % 30 == 0) {
                        var t1 = document.createElementNS(svgNS, "text");
                        if (i > 100) {
                            t1.setAttributeNS(null, "x", 140);
                        } else if (i > 0) {
                            t1.setAttributeNS(null, "x", 144);
                        } else {
                            t1.setAttributeNS(null, "x", 147);
                        }
                        t1.setAttributeNS(null, "y", 24);
                        t1.setAttributeNS(null, "font-size", "11px");
                        t1.setAttributeNS(null, "font-family", "Helvetica");
                        t1.setAttributeNS(null, "fill", "grey");
                        t1.setAttributeNS(null, "style", "letter-spacing:1.0");
                        t1.setAttributeNS(null, "transform", "rotate(" + i + ", 150, 150)");
                        var textNode = document.createTextNode(i);
                        t1.appendChild(textNode);
                        svg.appendChild(t1);
                    }
                }

            }} width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            </svg>
        </React.Fragment>
    )

}


export default Compass;