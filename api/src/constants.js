import EPSG21781 from '@geoblocks/proj/src/EPSG_21781.js';


/**
 * @typedef {Object} APIConfig
 * @property {?string} themesUrl
 * @property {string} projection
 * @property {Array<number>} resolutions
 * @property {?[number, number, number, number]} extent
 * @property {string} backgroundLayer
 */

export default /** @type {APIConfig} */({
  themesUrl: null,
  projection: EPSG21781,
  resolutions: [250, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05],
  extent: null,
  /**
   * The name of the layer to use as background. May be a single value
   * (WMTS) or a comma-separated list of layer names (WMS).
   */
  backgroundLayer: 'OSM map',
});
