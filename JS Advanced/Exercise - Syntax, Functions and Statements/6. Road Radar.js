/* · On the motorway, the limit is 130 km/h

· On the interstate, the limit is 90 km/h

· In the city, the limit is 50 km/h

· Within a residential area, the limit is 20 km/h*/

/*For speeding up to 20 km/h over the limit, the status should be speeding.

For speeding up to 40 km/h over the limit, the status should be excessive speeding.

For anything else, status should be reckless driving*/
function RoadRadar(speed, zone) {
  let overLimit = "";
  if (zone == "motorway") {
    if (speed <= 130) {
      console.log(`Driving ${speed} km/h in a 130 zone`);
    } else {
      let faster = speed - 130;
      if (faster <= 20) {
        overLimit = "speeding";
      } else if (faster <= 40) {
        overLimit = "excessive speeding";
      } else {
        overLimit = "reckless driving";
      }
      console.log(
        `The speed is ${faster} km/h faster than the allowed speed of 130 - ${overLimit}`
      );
    }
  }
  if (zone == "interstate") {
    if (speed <= 90) {
      console.log(`Driving ${speed} km/h in a 90 zone`);
    } else {
      let faster = speed - 90;

      if (faster <= 20) {
        overLimit = "speeding";
      } else if (faster <= 40) {
        overLimit = "excessive speeding";
      } else {
        overLimit = "reckless driving";
      }
      console.log(
        `The speed is ${faster} km/h faster than the allowed speed of 90 - ${overLimit}`
      );
    }
  }
  if (zone == "city") {
    if (speed <= 50) {
      console.log(`Driving ${speed} km/h in a 50 zone`);
    } else {
      let faster = speed - 50;
      if (faster <= 20) {
        overLimit = "speeding";
      } else if (faster <= 40) {
        overLimit = "excessive speeding";
      } else {
        overLimit = "reckless driving";
      }
      console.log(
        `The speed is ${faster} km/h faster than the allowed speed of 50 - ${overLimit}`
      );
    }
  }
  if (zone == "residential") {
    if (speed <= 20) {
      console.log(`Driving ${speed} km/h in a 20 zone`);
    } else {
      let faster = speed - 20;
      if (faster <= 20) {
        overLimit = "speeding";
      } else if (faster <= 40) {
        overLimit = "excessive speeding";
      } else {
        overLimit = "reckless driving";
      }
      console.log(
        `The speed is ${faster} km/h faster than the allowed speed of 20 - ${overLimit}`
      );
    }
  }
}
RoadRadar(120, "interstate");
