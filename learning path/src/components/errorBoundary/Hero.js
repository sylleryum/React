import React from 'react';

function MyComponent({heroName}) {
    if (heroName ==="joker"){
        throw new Error("not a hero")
    }
    return (
        <div>
            {heroName}
        </div>
    );
};

export default MyComponent;
