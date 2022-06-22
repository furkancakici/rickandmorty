const locationsFetch = async () => {
   let locationsdata = await fetch(process.env.API_LOCATION_URL);
   locationsdata = await locationsdata.json();
   locationsdata = locationsdata.results;
   return locationsdata;
};

export default locationsFetch;
