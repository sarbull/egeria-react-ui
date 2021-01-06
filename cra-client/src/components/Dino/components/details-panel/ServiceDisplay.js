/* SPDX-License-Identifier: Apache-2.0 */
/* Copyright Contributors to the ODPi Egeria project. */

import React, { useContext }                   from "react";

import { ResourcesContext }                    from "../../contexts/ResourcesContext";

import IntegrationServiceDisplay               from "./IntegrationServiceDisplay";

import AccessServiceDisplay                    from "./AccessServiceDisplay";

import "./details-panel.scss";


export default function ServiceDisplay() {

  const resourcesContext = useContext(ResourcesContext);


  let focus = resourcesContext.focus;
  let serviceDetails;
  let serviceCat;
  if (focus.category === "service-instance") {
    serviceDetails = resourcesContext.getFocusService();
    serviceCat = serviceDetails.serviceCat;
    if (!serviceDetails) {
      return null;
    }
  }
  else {
    /*
     * The focus is not a service-instance, so do nothing...
     */
    return null;
  }


  return (

    <div className="type-details-container">

      <div>
        { (serviceCat === "IntegrationService") && <IntegrationServiceDisplay/> }
      </div>
      <div>
        { (serviceCat === "AccessService") && <AccessServiceDisplay/> }
      </div>

    </div>
  );

}


ServiceDisplay.propTypes = {
  
};

