import React from 'react';


function Footer({listAddItems}) {
    return (
        <div style={{position:"fixed",bottom:"0",backgroundColor:"#0975df",color:"white",textAlign:"center",width:"27%"}}>
            {listAddItems}
        </div>
    );
}

export default Footer;