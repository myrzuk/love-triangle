/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let effect=0;
  for (let a = 0; a < preferences.length; a++){
      let up1 = preferences[a]-1;
      if (up1==a) continue;
      let up2 = preferences[up1]-1;
      if (up1==up2) continue;
      let up3 = preferences[up2]-1;
      if (up3==up2) continue;
      if (up3==a){effect++};
      
  };
    return effect/3 ;
    
};

