const residentsFetch = async (id) => {
   const characterUrl = process.env.API_CHARACTER_URL;
   const locationUrl = process.env.API_LOCATION_URL + id;
   let locationData = await fetch(locationUrl);
   locationData = await locationData.json();
   const locationResidents = locationData.residents;
   let locationResidentsUrl = characterUrl;
   var i = 1;
   while (i <= locationResidents.length) {
      locationResidentsUrl += i.toString() + ',';
      i++;
   }

   locationResidentsUrl = locationResidentsUrl.slice(0, -1);

   let locationResidentsData = await fetch(locationResidentsUrl);
   locationResidentsData = await locationResidentsData.json();
   if (!(locationResidentsData instanceof Array)) {
      locationResidentsData = [locationResidentsData];
   }
   return {
      locationName: locationData.name,
      locationResidentsData,
   };
};

export default residentsFetch;
