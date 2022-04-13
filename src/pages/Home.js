import React from "react";
import Alert from "../components/Alert";
import Master from "../layouts/Master";

export default function Home() {
  
  return (
    <Master>
      <div className="py-8 px-6">
        
        <Alert 
          message="Alert Message Danger"
          type="danger"
        />

        <Alert 
          message="Alert Message Success"
          type="success"
        />

      </div>
    </Master>
  );
}
