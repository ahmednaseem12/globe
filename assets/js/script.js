// scripts.js
import * as THREE from "three";
import { Country } from "https://cdn.jsdelivr.net/npm/country-state-city@3.2.1/+esm";
let data = {
  attackOrigins: [
    // Your attack origin data here
  ],
  attackTargets: [
    // Your attack target data here
  ],
  attackTypes: [
    // Your attack types data here
  ],
  liveAttacks: [
    // Your live attacks data here
  ],
};

let routes = [];
const countryNameToCode = {
  Afghanistan: "AF",
  Albania: "AL",
  Algeria: "DZ",
  Andorra: "AD",
  Angola: "AO",
  Argentina: "AR",
  Armenia: "AM",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bhutan: "BT",
  Bolivia: "BO",
  "Bosnia and Herzegovina": "BA",
  Botswana: "BW",
  Brazil: "BR",
  Brunei: "BN",
  Bulgaria: "BG",
  "Burkina Faso": "BF",
  Burundi: "BI",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  "Cape Verde": "CV",
  "Central African Republic": "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  Colombia: "CO",
  Comoros: "KM",
  "Congo, Republic of the": "CG",
  "Costa Rica": "CR",
  Croatia: "HR",
  Cuba: "CU",
  Cyprus: "CY",
  "Czech Republic": "CZ",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  "Dominican Republic": "DO",
  "East Timor": "TL",
  Ecuador: "EC",
  Egypt: "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Eswatini: "SZ",
  Ethiopia: "ET",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Greece: "GR",
  Grenada: "GD",
  Guatemala: "GT",
  Guinea: "GN",
  "Guinea-Bissau": "GW",
  Guyana: "GY",
  Haiti: "HT",
  Honduras: "HN",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  Iran: "IR",
  Iraq: "IQ",
  Ireland: "IE",
  Israel: "IL",
  Italy: "IT",
  "Ivory Coast": "CI",
  Jamaica: "JM",
  Japan: "JP",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  "Korea, North": "KP",
  "Korea, South": "KR",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  Laos: "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  "Marshall Islands": "MH",
  Mauritania: "MR",
  Mauritius: "MU",
  Mexico: "MX",
  Micronesia: "FM",
  Moldova: "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Morocco: "MA",
  Mozambique: "MZ",
  Myanmar: "MM",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  Netherlands: "NL",
  "New Zealand": "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Palau: "PW",
  Palestine: "PS",
  Panama: "PA",
  "Papua New Guinea": "PG",
  Paraguay: "PY",
  Peru: "PE",
  Philippines: "PH",
  Poland: "PL",
  Portugal: "PT",
  Qatar: "QA",
  Romania: "RO",
  Russia: "RU",
  Rwanda: "RW",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  Samoa: "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Singapore: "SG",
  Slovakia: "SK",
  Slovenia: "SI",
  "Solomon Islands": "SB",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Sudan": "SS",
  Spain: "ES",
  "Sri Lanka": "LK",
  Sudan: "SD",
  Suriname: "SR",
  Sweden: "SE",
  Switzerland: "CH",
  Syria: "SY",
  Taiwan: "TW",
  Tajikistan: "TJ",
  Tanzania: "TZ",
  Thailand: "TH",
  Togo: "TG",
  Tonga: "TO",
  "Trinidad and Tobago": "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  Tuvalu: "TV",
  Uganda: "UG",
  Ukraine: "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  "Vatican City": "VA",
  Venezuela: "VE",
  Vietnam: "VN",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
};

const getContinentFromCountry = (countryName) => {
  const countryToContinent = {
    afghanistan: "Asia",
    albania: "Europe",
    algeria: "Africa",
    andorra: "Europe",
    angola: "Africa",
    "antigua and barbuda": "North America",
    argentina: "South America",
    armenia: "Asia",
    australia: "Oceania",
    austria: "Europe",
    azerbaijan: "Asia",
    bahamas: "North America",
    bahrain: "Asia",
    bangladesh: "Asia",
    barbados: "North America",
    belarus: "Europe",
    belgium: "Europe",
    belize: "North America",
    benin: "Africa",
    bhutan: "Asia",
    bolivia: "South America",
    "bosnia and herzegovina": "Europe",
    botswana: "Africa",
    brazil: "South America",
    brunei: "Asia",
    bulgaria: "Europe",
    "burkina faso": "Africa",
    burundi: "Africa",
    "cabo verde": "Africa",
    cambodia: "Asia",
    cameroon: "Africa",
    canada: "North America",
    "central african republic": "Africa",
    chad: "Africa",
    chile: "South America",
    china: "Asia",
    colombia: "South America",
    comoros: "Africa",
    "congo (congo-brazzaville)": "Africa",
    "costa rica": "North America",
    croatia: "Europe",
    cuba: "North America",
    cyprus: "Asia",
    "czechia (czech republic)": "Europe",
    denmark: "Europe",
    djibouti: "Africa",
    dominica: "North America",
    "dominican republic": "North America",
    ecuador: "South America",
    egypt: "Africa",
    "el salvador": "North America",
    "equatorial guinea": "Africa",
    eritrea: "Africa",
    estonia: "Europe",
    'eswatini (fmr. "swaziland")': "Africa",
    ethiopia: "Africa",
    fiji: "Oceania",
    finland: "Europe",
    france: "Europe",
    gabon: "Africa",
    gambia: "Africa",
    georgia: "Asia",
    germany: "Europe",
    ghana: "Africa",
    greece: "Europe",
    grenada: "North America",
    guatemala: "North America",
    guinea: "Africa",
    "guinea-bissau": "Africa",
    guyana: "South America",
    haiti: "North America",
    honduras: "North America",
    hungary: "Europe",
    iceland: "Europe",
    india: "Asia",
    indonesia: "Asia",
    iran: "Asia",
    iraq: "Asia",
    ireland: "Europe",
    israel: "Asia",
    italy: "Europe",
    jamaica: "North America",
    japan: "Asia",
    jordan: "Asia",
    kazakhstan: "Asia",
    kenya: "Africa",
    kiribati: "Oceania",
    kosovo: "Europe",
    kuwait: "Asia",
    kyrgyzstan: "Asia",
    laos: "Asia",
    latvia: "Europe",
    lebanon: "Asia",
    lesotho: "Africa",
    liberia: "Africa",
    libya: "Africa",
    liechtenstein: "Europe",
    lithuania: "Europe",
    luxembourg: "Europe",
    madagascar: "Africa",
    malawi: "Africa",
    malaysia: "Asia",
    maldives: "Asia",
    mali: "Africa",
    malta: "Europe",
    "marshall islands": "Oceania",
    mauritania: "Africa",
    mauritius: "Africa",
    mexico: "North America",
    micronesia: "Oceania",
    moldova: "Europe",
    monaco: "Europe",
    mongolia: "Asia",
    montenegro: "Europe",
    morocco: "Africa",
    mozambique: "Africa",
    "myanmar (formerly burma)": "Asia",
    namibia: "Africa",
    nauru: "Oceania",
    nepal: "Asia",
    netherlands: "Europe",
    "new zealand": "Oceania",
    nicaragua: "North America",
    niger: "Africa",
    nigeria: "Africa",
    "north korea": "Asia",
    "north macedonia": "Europe",
    norway: "Europe",
    oman: "Asia",
    pakistan: "Asia",
    palau: "Oceania",
    "palestine state": "Asia",
    panama: "North America",
    "papua new guinea": "Oceania",
    paraguay: "South America",
    peru: "South America",
    philippines: "Asia",
    poland: "Europe",
    portugal: "Europe",
    qatar: "Asia",
    romania: "Europe",
    russia: "Europe",
    rwanda: "Africa",
    "saint kitts and nevis": "North America",
    "saint lucia": "North America",
    "saint vincent and the grenadines": "North America",
    samoa: "Oceania",
    "san marino": "Europe",
    "sao tome and principe": "Africa",
    "saudi arabia": "Asia",
    senegal: "Africa",
    serbia: "Europe",
    seychelles: "Africa",
    "sierra leone": "Africa",
    singapore: "Asia",
    slovakia: "Europe",
    slovenia: "Europe",
    "solomon islands": "Oceania",
    somalia: "Africa",
    "south africa": "Africa",
    "south korea": "Asia",
    "south sudan": "Africa",
    spain: "Europe",
    "sri lanka": "Asia",
    sudan: "Africa",
    suriname: "South America",
    sweden: "Europe",
    switzerland: "Europe",
    syria: "Asia",
    tajikistan: "Asia",
    tanzania: "Africa",
    thailand: "Asia",
    "timor-leste": "Asia",
    togo: "Africa",
    tonga: "Oceania",
    "trinidad and tobago": "North America",
    tunisia: "Africa",
    turkey: "Asia",
    turkmenistan: "Asia",
    tuvalu: "Oceania",
    uganda: "Africa",
    ukraine: "Europe",
    "united arab emirates": "Asia",
    "united kingdom": "Europe",
    "united states": "North America",
    uruguay: "South America",
    uzbekistan: "Asia",
    vanuatu: "Oceania",
    "vatican city": "Europe",
    venezuela: "South America",
    vietnam: "Asia",
    yemen: "Asia",
    zambia: "Africa",
    zimbabwe: "Africa",
  };

  // Return the continent for the given country name, or null if not found
  return countryToContinent[countryName.toLowerCase()] || null;
};

let markers = []; // All marker data
let currentIndex = 0; // Keeps track of the current marker index

// Function to update the globe with new marker data
const updateMarkers = (newMarkers) => {
  globe.ringsData(newMarkers); // Update rings with ripple effect
};

// Function to initialize markers and set interval to update them
const initMarkers = (totalMarkers, chunkSize) => {
  let markersSubset = totalMarkers.slice(0, chunkSize); // Initialize with the first 30 markers
  updateMarkers(markersSubset);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalMarkers.length;

    // Replace one marker every 0.5 seconds
    markersSubset = [
      ...totalMarkers.slice(currentIndex, currentIndex + chunkSize),
      ...totalMarkers.slice(
        0,
        (currentIndex + chunkSize) % totalMarkers.length
      ),
    ].slice(0, chunkSize);

    updateMarkers(markersSubset);
  }, 500); // Update every 0.5 seconds
};

// Function to generate random color
const randomColor = () => {
  const colors = [
    "#d83b81",
    "#31b250",
    "#2778d1",
    "#c24d1e",
    "#c4c350",
    "#5e49bf",
    "#0a886c",
    "#090ea0",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Function to generate markers from GeoJSON
const generateMarkersFromGeoJSON = (countriesData) => {
  const markers = [];
  countriesData.features.forEach((feature) => {
    const coordinates = feature.geometry.coordinates;
    const latLng = getLatLngFromCoordinates(coordinates);

    if (latLng) {
      markers.push({
        lat: latLng.lat, // Latitude
        lng: latLng.lng, // Longitude
        size: 0.5, // Marker size (for ripple effect)
        color: randomColor(), // Assign random color
        maxR: Math.random() * 2 + 0.9,
        propagationSpeed: (Math.random() - 0.5) * 5 + 1,
        repeatPeriod: Math.random() * 4000 + 400,
      });
    }
  });
  return markers;
};

// Helper function to extract lat/lng from GeoJSON coordinates
const getLatLngFromCoordinates = (coordinates) => {
  if (coordinates && Array.isArray(coordinates)) {
    if (Array.isArray(coordinates[0])) {
      const firstPoint = coordinates[0][0];
      return { lng: firstPoint[0], lat: firstPoint[1] };
    }
  }
  return null;
};

const getColorByContinent = (country) => {
  let color = "";

  const continent = getContinentFromCountry(country.toLowerCase());

  switch (continent) {
    case "Africa":
      color = "#3C5B6F";
      break;
    case "Asia":
      color = "#3C5B6F";
      break;
    case "Europe":
      color = "#F5EFE6";
      break;
    case "North America":
      color = "#F5EFE6";
      break;
    case "Oceania":
      color = "#F5EFE6";
      break;
    case "South America":
      color = "#F5EFE6";
      break;
    default:
      color = "#3C5B6F";
      break;
  }

  return color;
};

const getCoordinatesByCountryName = (countryName) => {
  const countryCode = countryNameToCode[countryName];

  if (!countryCode) {
    return null; // Return null if country code not found
  }

  const country = Country.getCountryByCode(countryCode);
  if (!country) {
    return null; // Return null if country details not found
  }

  return {
    lat: country.latitude,
    lng: country.longitude,
    name: country.name,
  };
};

const containerRef = document.getElementById("tablesContainer");
const scrollLeftButton = document.getElementById("scrollLeft");
const scrollRightButton = document.getElementById("scrollRight");

const scrollRight = () => {
  containerRef.scrollBy({ left: 300, behavior: "smooth" });
};

const scrollLeft = () => {
  containerRef.scrollBy({ left: -300, behavior: "smooth" });
};

scrollLeftButton.addEventListener("click", scrollLeft);
scrollRightButton.addEventListener("click", scrollRight);

let globe = null;

const fetchCountriesData = () => {
  fetch("./assets/dataset/ne_110m_admin_0_countries.geojson")
    .then((res) => res.json())
    .then((_countries) => {
      console.log("Countries data:", _countries);
      globe.polygonsData(
        _countries.features?.filter((d) => d.properties.ISO_A2 !== "AQ")
      );
      // Generate markers from the country data
      markers = generateMarkersFromGeoJSON(_countries);
      initMarkers(markers, 40); // Initialize with the first 30 markers
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
    });
};

// Function to interpolate color based on the assigned color and progress
const colorInterpolator = (feat, t) => {
  // Get the hex color from feat.color, or default to white if no color is provided
  const baseColor = feat.color || "#ffffff";

  // Parse the hex color to get the RGB components
  const r = parseInt(baseColor.slice(1, 3), 16); // Red component
  const g = parseInt(baseColor.slice(3, 5), 16); // Green component
  const b = parseInt(baseColor.slice(5, 7), 16); // Blue component

  // Create an RGBA color string with interpolated opacity based on `t`
  return `rgba(${r},${g},${b},${Math.sqrt(1 - t)})`;
};

const init = () => {
  const globeContainer = document.getElementById("globeContainer");

  const globe = Globe()(globeContainer)
    .globeMaterial(
      new THREE.MeshLambertMaterial({
        color: "#495449", // Edit here for globe Ocean part
        roughness: 2,
        metalness: 0.1,
      })
    )
    .pointOfView({ altitude: 3 })
    .showAtmosphere(false) // Enable atmosphere for glow effect
    .atmosphereColor("#006d55") // Adjusted to bright green
    .atmosphereAltitude(0.5) // Increase altitude for a more prominent glow
    .polygonLabel(({ properties: d }) => d.ADMIN) // Country label
    .polygonsTransitionDuration(300)
    .polygonCapColor((feat) => "#272D29") // Edit here for globe Countrie part
    .polygonSideColor((feat) => "#232927")
    .polygonSideMaterial(
      new THREE.MeshStandardMaterial({
        color: "#232927",
        side: THREE.DoubleSide,
        roughness: 0.1,
        metalness: 1,

        emissive: "#444444", // Add an emissive color for a slight glow effect
        emissiveIntensity: 0.6,
      })
    )
    .polygonAltitude(0.02)
    .polygonStrokeColor((feat) => `#3a403b`) // Stroke color for country borders
    .ringColor((feat) => {
      // Get the elapsed time (you may want to use performance.now() or a custom time source)
      const currentTime = Date.now(); // Current time in milliseconds

      // Calculate progress t based on the ring's repeat period and propagation speed
      const t = (currentTime % feat.repeatPeriod) / feat.repeatPeriod;

      // Call your interpolator with both feat and the manually calculated t
      const color = colorInterpolator(feat, t);

      return color;
    })
    .ringMaxRadius("maxR")
    .ringPropagationSpeed("propagationSpeed")
    .ringRepeatPeriod("repeatPeriod")
    .ringAltitude(0.03)
    .lineHoverPrecision(0)
    .width(window.innerWidth)
    .height(window.innerHeight);

  //set backgroun color
  globe.backgroundColor("#06150D"); // Edit here for Background part
  // // Add Lighting to the Scene
  const ambientLight = new THREE.AmbientLight(0xffffff, 0); // Soft white ambient light
  globe.scene().add(ambientLight);

  fetchCountriesData();

  // Handle window resize
  window.addEventListener("resize", () => {
    globe.width([window.innerWidth]);
    globe.height([window.innerHeight]);
  });

  const populateTables = () => {
    const attackOriginDiv = document.getElementById("attackOrigins");
    const attackTargetDiv = document.getElementById("attackTargets");
    const attackTypeDiv = document.getElementById("attackTypes");
    const liveAttackDiv = document.getElementById("liveAttacks");

    let innerHTML = "";

    data.attackOrigins.forEach((origin) => {
      innerHTML += `
    <div class="grid grid-cols-4 md:gap-2 px-1 md:p-1 text-[10px] md:text-xs text-wrap break-words mriya">
      <div>${origin.id}</div>
      <div class="flex w-full col-span-3 items-center">
        <img src="./assets/flags/${origin.code.toLowerCase()}.png" alt="${
        origin.name
      } flag" class="w-3 object-fit me-1" />
        ${origin.name}
      </div>
      <div></div>
    </div>
  `;
    });
    attackOriginDiv.innerHTML = innerHTML;

    innerHTML = "";

    data.attackTargets.forEach((target) => {
      innerHTML += `
    <div class="grid grid-cols-4 md:gap-2 px-1 md:p-1 text-[10px] md:text-xs text-wrap break-words mriya">
      <div>${target.id}</div>
      <div class="flex w-full col-span-3 items-center">
        <img src="./assets/flags/${target.code.toLowerCase()}.png" alt="${
        target.name
      } flag" class="w-3 object-fit me-1" />
        ${target.name}
      </div>
      <div></div>
    </div>
  `;
    });
    attackTargetDiv.innerHTML = innerHTML;

    innerHTML = "";

    data.attackTypes.forEach((type) => {
      innerHTML += `
    <div class="grid grid-cols-8 text-[10px] md:text-xs md:gap-2 px-1 md:p-2 text-wrap break-words mriya">
        <div class='col-span-2'>${type.id}</div>
        <div class='col-span-2'>${type.port}</div>
        <div class='col-span-4'>${type.attaker_type}</div>
    
    </div>
  `;
    });
    attackTypeDiv.innerHTML = innerHTML;

    innerHTML = "";

    data.liveAttacks.forEach((attack) => {
      innerHTML += `
    <div class="grid grid-cols-8 text-[10px] md:text-xs md:gap-2  px-1 md:p-2 text-wrap break-words mriya-bold">
        <div>${attack.timestamp}</div>
        <div class='col-span-2'>${attack.attacker}</div>
        <div>${attack.attacker_ip}</div>
        <div>${attack.attacker_geo}</div>
        <div>${attack.target_geo}</div>
        <div>${attack.attacker_type}</div>
        <div>${attack.port}</div>
    </div>
  `;
    });
    liveAttackDiv.innerHTML = innerHTML;
  };

  // Fetch data and update the globe
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.spyderlab.org/api/v1/crypto-attackers"
      );
      const _data = response.data.data;
      data.liveAttacks = _data.live_attacker;
      data.attackTypes = _data.attacker_type;
      data.attackOrigins = _data.attack_origins;
      data.attackTargets = _data.attackers_targets;

      const _routes = _data.live_attacker
        .map((attack) => ({
          src: getCoordinatesByCountryName(attack.attacker_geo.trim()),
          dst: getCoordinatesByCountryName(attack.target_geo.trim()),
          type: attack.attacker_type,
          name: attack.attacker_geo,
          targetName: attack.target_geo,
          color: getColorByContinent(attack.attacker_geo.trim()), // Random color for the route
        }))
        .filter((route) => route.src && route.dst);

      if (routes.length > 75) {
        // Remove the first 50 elements
        routes = routes.slice(50);
      }
      routes = [...routes, ..._routes];

      //routes.concat(_routes);

      globe.arcsData(routes);
      populateTables();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
  setInterval(fetchData, 2500); // Fetch data every 2.5 seconds

  // Create star field
  const createStarField = () => {
    const starsGeometry = new THREE.SphereGeometry(1, 64, 64);
    const starCount = 10000;
    const starVertices = [];

    for (let i = 0; i < starCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000) + 100;
      starVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({ color: 0xeeeeee });
    const starField = new THREE.Points(starsGeometry, starsMaterial);

    globe.scene().add(starField);
  };

  createStarField();
};

document.addEventListener("DOMContentLoaded", init);
