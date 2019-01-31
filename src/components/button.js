import React from 'react';

const Btn=({label,OnClickHandler})=>(
<button onClick={OnClickHandler}>{label}</button>
);

export default Btn;