window.addEventListener("load", () => {
  let long, lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.longitude;
      let temperatureDescription = document.querySelector(
        ".temperature-description"
      );
      let temperatureDegree = document.querySelector(".temperature-degree");
      let locationTimezone = document.querySelector(".location-timezone");

      const api = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${long}&lat=${lat}`;

      fetch(api, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3f742aa7f0msh38d82fbd969f3f0p13f599jsnd37a842aeba3",
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        },
      })
        .then((data) => {
          return data.json();
        })
        .then((json) => {
          const { app_temp } = json.data[0];
          console.log(app_temp);

          // API TO DOM
          temperatureDegree.textContent = app_temp;
        });
    });
  }
});
