const characterFetch = async () => {
   const characterUrl = process.env.API_CHARACTER_URL;

   let charactersData = await fetch(characterUrl);
   charactersData = await charactersData.json();
   const charactersCount = charactersData.info.count;
   let allCharactersUrl = characterUrl;
   var i = 1;
   while (i <= charactersCount) {
      allCharactersUrl += i.toString() + ',';
      i++;
   }
   allCharactersUrl = allCharactersUrl.slice(0, -1);
   let allCharactersData = await fetch(allCharactersUrl);
   allCharactersData = await allCharactersData.json();
   return allCharactersData;
};

export default characterFetch;
