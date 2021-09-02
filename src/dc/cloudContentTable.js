import React from "react";
import * as dc from "dc";
import "dc/dc.css";

import { format as d3Format } from "d3";
import { ChartTemplate } from "./chartTemplate";
import { numberFormat } from "./cxContext";
import { css } from "glamor";
import { rhythm } from "../utils/typography";
const tableFunc = (divRef, ndx) => {
  const nasdaqTable = dc.dataTable(divRef);

  const dimension = ndx.dimension((d) => d.content);

//   const avgGroup = dimension.group().reduce(
//     function(p, v) { // add
//         p[v.type] = (p[v.type] || 0) + v.value;
//         return p;
//     });

//     function reversible_group(group) {
//         return {
//             top: function(N) {
//                 return group.top(N);
//             },
//             bottom: function(N) {
//                 return group.top(Infinity).slice(-N).reverse();
//             }
//         };
//     }  
var group = dimension.group().reduce(
    function(p, v) { // add
        p[v.content] = (p[v.content] || 0) + 1;
        return p;
    });




  nasdaqTable
    .dimension(dimension)
    .size(Infinity)
    .group(d=>{
        return d.content;
    })
    // .group(group)
    .columns([
        function (d) { return d.content }
    ])
    .sortBy(function (d) {
      return d.content;
    })
    .on("renderlet", function (table) {
      table.selectAll(".dc-table-group").classed("info", true);
    });

  return nasdaqTable;
};
const style = css({
  "& tr": {
    "&:hover": {
      background: "#dddd",
    },
  },
  "& td": {
    // padding:rhythm(0.1),
    textAlign: "left",
    borderTop: "1px solid #ddd",
  },
});
export const CloudContentTable = (props) => (
  <ChartTemplate
    chartFunction={tableFunc}
    styles={style}
    title="Summary Table"
  />
);
