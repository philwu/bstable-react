import React from 'react';
import BSTableLoading from './BSTableLoading';

function BSTableBody(props) {
  console.log(props);
  let loadingClassName = props.classes;
  let border = null;
  if (props.height) {
    if (props.classes.split(' ').includes('table-bordered')) {
      border = <div className="fixed-table-border"></div>;
      // this.$tableBorder = this.$tableBody.find('.fixed-table-border')
      loadingClassName += 'fixed-table-border';
    }
  }
  return (
    <div className="fixed-table-body">
      <table><tbody><tr><td>asdfasdf</td></tr></tbody></table>
      <BSTableLoading className={loadingClassName} />
      {border}
    </div>
  );
}
export default BSTableBody;