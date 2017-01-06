export default class Route {
  constructor(opts) {
    Object.assign(this, opts);
  }
  // TODO: Rewrite route splitting
  /*async getChildRoutes({ location }, cb) {
    location = location.pathname.charAt(1).toUpperCase() +
      location.pathname.toLowerCase().slice(2);

    if (this.subPath) {
      location = `${this.subPath}/${location}`;
    }

    await System.import(`brosa/routes/${location}/index.js`)
    .then(childRoute => {
      cb(null, [childRoute.default]);
    }).catch(err => {
      cb(err, null);
    })
  }*/
}
