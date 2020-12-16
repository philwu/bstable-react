import React from 'react';

import './BSTable.scss';
import Constants from './constants'
import BSTableToolbar from './components/BSTableToolbar';
import BSTablePagination from './components/BSTablePagination';
import BSTableContainer from './components/BSTableContainer';

// let defaults = Constants.DEFAULTS;
// let column_defaults = Constants.COLUMN_DEFAULTS;

function BSTable(props) {
  let options = props;
  if (options.options !== undefined)
    options = { ...options, ...options.options };

  if (options.locale) {
    const locales = Constants.COLUMN_DEFAULTS.locales;
    const parts = options.locale.split(/-|_/)

    parts[0] = parts[0].toLowerCase()
    if (parts[1]) {
      parts[1] = parts[1].toUpperCase()
    }

    if (locales[options.locale]) {
      options = { ...options, ...locales[options.locale] };
    } else if (locales[parts.join('-')]) {
      options = { ...options, ...locales[parts.join('-')] };
    } else if (locales[parts[0]]) {
      options = { ...options, ...locales[parts[0]] };
    }
  }

  const topPagination = ['top', 'both'].includes(options.paginationVAlign) ?
    <BSTablePagination clearfix={true} /> : null;
  const bottomPagination = ['bottom', 'both'].includes(options.paginationVAlign) ?
    <BSTablePagination /> : null;

  return (
    <div className="bootstrap-table4">
      <BSTableToolbar />
      {topPagination}
      <BSTableContainer {...options} />
      <div class="clearfix"></div>
      {bottomPagination}
    </div>
  );
}

export default BSTable;