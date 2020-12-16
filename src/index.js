import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import BSTable from './BSTable';

const data = [{ "ss": "aaa" }];
const options = {
    data,
    paginationVAlign: 'both',
};
ReactDOM.render(
    <BSTable a={data} options={options} />,
    document.getElementById('root')
);