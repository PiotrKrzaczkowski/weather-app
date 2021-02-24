window.addEventListener("load", () => {
  let long, lat;

  const cityName = document.querySelector(".city-name");
  const icon = document.querySelector(".icon");
  const dayDegree = document.querySelector(".day");
  const sunrisee = document.querySelector(".sunrise");
  const sunsett = document.querySelector(".sunset");
  const date = document.querySelector(".full-date");
  const region = document.querySelector(".region");
  const desc = document.querySelector(".desc");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

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
          const {
            temp,
            timezone,
            city_name,
            ob_time,
            weather,
            sunset,
            sunrise,
          } = json.data[0];
          console.log(json.data[0]);

          // console.log(weatherIcon);

          // API TO DOM
          desc.textContent = weather.description;
          cityName.textContent = city_name;
          dayDegree.innerHTML = `<p>${temp.toFixed()}&nbsp;&deg;</p>`;
          date.textContent = ob_time.substring(0, 10);
          sunsett.innerHTML = `<i class="far fa-moon"></i> ${sunset}`;
          sunrisee.innerHTML = `<i class="far fa-sun"></i> ${sunrise}`;
          region.textContent = timezone;
        });
    });
  }
});
