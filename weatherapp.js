$("document").ready(function() {

  $("main").css("opacity", "1");

  var lat;
  var lon;
  var api;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      lat = position.coords.latitude;
      lon = position.coords.longitude;
      api = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=9e66562c2f1d9db20c296f79904c3d06&units=metric";

      $.getJSON(api, function(data) {

        var mintemp = data.main.temp_min;
        var maxtemp = data.main.temp_max;
        var weather = data.weather[0].main;
        var weatherIcon = data.weather[0].id;
        var location = data.name;
        var country = data.sys.country;
        var temp = Math.round(data.main.temp);

        $(".description").html("<div class='icon'></div>" + weather);

        const checkWeatherId = function(weatherIcon, firstIdInCategory, lastIdOfCategory) {
          return weatherIcon >= firstIdInCategory && weatherIcon <= lastIdOfCategory;
        };

        if  (checkWeatherId(weatherIcon, 200, 232)) {
          $(".icon").css("background-image", "url('https://i.imgur.com/6vwtGyP.png')");
        } else if (checkWeatherId(weatherIcon, 300, 531)) {
          $(".icon").css("background-image", "url('https://i.imgur.com/ZjHDyCu.png')");
        } else if (checkWeatherId(weatherIcon, 600, 622)) {
          $(".icon").css("background-image", "url('https://i.imgur.com/7Rx2NQw.png')");
        } else if (checkWeatherId(weatherIcon, 801, 802)) {
          $(".icon").css("background-image", "url('https://i.imgur.com/ttOZAeP.png')");
        } else if (checkWeatherId(weatherIcon, 803, 804)) {
          $(".icon").css("background-image", "url('https://i.imgur.com/GHHmLiw.png')");
        } else {
          $(".icon").css("background-image", "url('https://i.imgur.com/JMnS7PX.png')");
        };

        $(".location").text(location + ", " + country);
        $(".mintemp").text(mintemp + " °C");
        $(".maxtemp").text(maxtemp + " °C");
        $(".display").text(temp + " °C");

      });
    });
  }
});
