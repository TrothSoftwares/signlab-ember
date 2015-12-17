import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  serialize() {

    const result = this._super(...arguments),
      attr = result.data.attributes,
      rel = result.data.relationships;

      if(rel){
    return Object.keys(rel).reduce(function(acc, elem) {

      const data = rel[elem].data;
      if (data) {

        acc[elem + "_id"] = data.id;
      }
      if (data && data.type) {

        acc[elem + "_type"] = data.type[0].toUpperCase() + data.type.slice(1, -1);
      }
      console.log(acc);
      return acc;

    }, attr);
   }
   else{

return (rel,attr);

   }

 }


// serialize: function(record, options) {
//     var json = {};
//
//     record.eachAttribute(function(name) {
//       json[serverAttributeName(name)] = record.get(name);
//     })
//
//     record.eachRelationship(function(name, relationship) {
//       if (relationship.kind === 'hasMany' && name == ”jobtypes”) {
//         json[serverHasManyName(name)] = record.get(name).mapBy('id'}
//     });
//
//     return json;
//   }
// });
//
// function serverAttributeName(attribute) {
//   return attribute.underscore().toUpperCase();
// }
//
// function serverHasManyName(name) {
//   return serverAttributeName(name.singularize()) + "_ids";
// }
//
});


// export default DS.JSONSerializer.extend({
//
//
//
// });

// import ActiveModelAdapter from 'active-model-adapter';
//
// export default ActiveModelAdapter.extend();
