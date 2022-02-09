import React from 'react';

const Button = props =>{

    const { text} = props;// si se traen mas de 1 texto lo recomendable es hacerlo asi 
    return(
        <div>
            <button type="button">{props.text}</button>
            <button type="button">{text}</button>
        </div>
    )
};

export default Button;