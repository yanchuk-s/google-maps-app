<template>
  <div id="app">
    <div class="about-us">
      <div class="info">
        <h1>Our Offices</h1>
        <div class="links">
          <div v-for="(item, index) in maps" :key="index">
          <button 
            :class="{highlight:item.id == selected}"
            @click="chenge(item.lat, item.lng, item.id)"
          >
            {{item.title}}
          </button>
        </div>
        </div>
        <h2>Global Message Services Ukraine LLC</h2>
        <span>
          Kuiv, Stepan Bandera,<br/>33 02066 Ukraine
        </span>
      </div>
      <div class="map">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      selected: 1,
      map: null,
      marker: null,
      iconBase: 'http://maps.google.com/mapfiles/kml/pal3/icon21.png',
      myLatlng: {
        lat: 50.331223,
        lng: 26.519238
      }
    }
  },
  computed: {
    maps() {
      return this.$store.getters.getMap
    }
  },
  mounted: function Map() {
    var myLatlng = this.myLatlng
    const element = document.getElementById('map')
    const options = {
      zoom: 8,
      mapTypeControl: true,
      styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ]
    }
    this.map = new google.maps.Map(element, options)
    this.map.panTo(myLatlng)
    // var iconBase = 'http://maps.google.com/mapfiles/kml/pal3/icon21.png';
    this.marker = new google.maps.Marker({
      position: myLatlng,
      map: this.map,
      icon: this.iconBase
    });

    this.maps.forEach(element => {
      let pin = {lat: element.lat, lng: element.lng}
      this.marker = new google.maps.Marker({
      position: pin,
      map: this.map,
      icon: this.iconBase
    });
    });
  },
  methods: {
    chenge: function (lat,lng, id) {
      // console.log(this)
      this.selected = id
      let pin = {lat: lat, lng: lng}
      this.map.panTo(pin)
      // this.marker = new google.maps.Marker({
      //   position: pin,
      //   map: this.map,
      //   icon: this.iconBase
      // });
    },
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  width: 100%;
  height: 100vh;
}
#app {
   font-family: 'Montserrat', sans-serif!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  .about-us{
    display: flex;
    flex-direction: row;
    width: 100%;
    .info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 20px;
      height: 100vh;
      width: 40%;
      background: #252525;
      h1{
        font-size: 40px;
        font-weight: 200;
        color: #fff;
      }
      h2{
        font-size: 30px;
        font-weight: 200;
        color: #fff;
        text-align: left;
      }
      span{
        color: #fff;
        font-weight: 100;
        text-align: left;
      }
      .links{
        display: flex;
        margin: 20px 0;
        button{
          background: none;
          border: none;
          outline: none;
          color: #fff;
          opacity: 0.7;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif!important;
          font-size: 20px;
          font-weight: 100;
          min-width: 100px;
          padding: 0;
          margin: 0;
          text-align: left;
          &:hover{
            opacity: 1;
          }
        }
        .highlight{
          opacity: 1;
          color: #3db565;
        }
      }
    }
    .map{
      height: 100vh;
      width: 60%;
    }
  }
}

#map{
  width: 100%;
  height: 100vh;
}
.highlight{
  background: yellow;
}
</style>
