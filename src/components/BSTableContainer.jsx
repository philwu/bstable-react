import React from 'react';
import BSTableHeader from './BSTableHeader';
import BSTableBody from './BSTableBody';
import BSTableFooter from './BSTableFooter';

function BSTableContainer(props) {
  let classes = "fixed-table-container ";
  if (props.height) {
    classes += 'fixed-height ';
    if (props.showFooter) {
      classes += 'has-footer ';
    }
  }
  return (
    <div className={classes}>
      <BSTableHeader {...props} />
      <BSTableBody {...props} />
      <BSTableFooter />
    </div>);
}
export default BSTableContainer;