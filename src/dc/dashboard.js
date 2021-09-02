import React from "react";
import { Row, Col } from "react-flexbox-grid";
// import { BubbleChart } from "./bubbleChart";
import { GainOrLossChart } from "./gainOrLessChart";
// import { QuarterChart } from "./quarterChart";
// import { DayOfWeekChart } from "./dayOfWeekChart";
// import { FluctuationChart } from "./fluctuationChart";
// import { MoveChart } from "./moveChart";
// import { DataTable } from "./nasdaqTable";
import { CloudPieChart } from "./cloudPieChart";
import { CloudLabelChart } from "./cloudLabelChart";
import { CloudContentTable } from "./cloudContentTable";
import { DataContext } from "./cxContext";
import { css } from "glamor";

import { WordCloudChart } from "./wordCloudChart";

export const Dashboard = (props) => {
  const style = css({
    padding: "1rem",
    marginTop: "2rem",
  });
  return (
    <div {...style}>
      <DataContext>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={4} style={{border: "outset"}}>
                <CloudPieChart />
              </Col>
              <Col md={8}>
              </Col>              
            </Row>
            <Row>
              <Col md={6} style={{border: "outset"}}>
                <CloudLabelChart />
              </Col>
              <Col md={6} style={{border: "outset"}}>
                <WordCloudChart />
              </Col>              
            </Row>            
          </Col>
          <Col md={4} style={{border: "outset"}}>
            <CloudContentTable />
          </Col>
        </Row>
        {/* <Row>
          <Col md={7}>
            <Row>
              <Col md={12}>
                <MoveChart />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <GainOrLossChart />
              </Col>
              <Col md={6}>
                <FluctuationChart />
              </Col>

              <Col md={6}>
                <QuarterChart />
              </Col>
              <Col md={6}>
                <DayOfWeekChart />
              </Col>
            </Row>
          </Col>
          <Col
            md={5}
            style={{ overflowY: "scroll", maxHeight: "70vh", width: "100%" }}
          >
            <DataTable />
          </Col>
        </Row> */}
      </DataContext>
    </div>
  );
};
