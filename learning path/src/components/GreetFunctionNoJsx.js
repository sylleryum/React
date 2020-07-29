import React from 'react';

const Hello = () => {
    //with JSX
    // return ( 
    //     <div>
    //         <h1>Hello world JSX</h1>
    //     </div>
    //  );

    //without JSX
     return React.createElement('div'
     ,{id:'theId', className: 'theClass'}
     ,React.createElement('h1', null, "Hello World no JSX"));
}
 
export default Hello;