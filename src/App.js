import React from "react";
import staticData from "./staticData/staticData";
import Invoice from "./component/Invoice";
function App() {

  return (
    <div className="responsive-container">

        <ul style={{listStyleType:"none"}}>
            {
                staticData.invoices.map(item => (
                    <li style={{listStyleType:"none"}} key={item.id}>
                        <Invoice id={item.id} state={item.state} items={item.items} address1={item.address1} address2={item.address2}
                            created_at={item.created_at} city={item.city} full_name={item.full_name}
                                 status={item.status} total_price={item.total_price} zipcode={item.zipcode}/>
                    </li>
                ))
            }
        </ul>
    </div>
  );
}

export default App;
