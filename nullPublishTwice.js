if (Meteor.isClient) {
  Meteor.subscribe('named');
}

if (Meteor.isServer) {
  
  Meteor.publish('named', function(){
    console.log('named publish called');
    return [];
  });
  Meteor.publish(null, function () {
    console.log('null publish called');
    return [];
  });

  FastRender.onAllRoutes(function(path) {
    console.log('fast-render path: ',path);
    this.subscribe('named');
  });
}
