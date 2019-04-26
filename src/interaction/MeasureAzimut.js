import ngeoInteractionDrawAzimut from 'ngeo/interaction/DrawAzimut.js';
import ngeoInteractionMeasure, {getFormattedLength} from 'ngeo/interaction/Measure.js';
import LineString from 'ol/geom/LineString.js';
import GeometryCollection from 'ol/geom/GeometryCollection.js';

/**
 * Interaction dedicated to measure length.
 *
 * See our live example: [../examples/measure.html](../examples/measure.html)
 */
export default class extends ngeoInteractionMeasure {
  /**
   * @fires import('ngeo/interaction/Measure.js').MeasureEvent
   * @param {!import('ngeo/misc/filters.js').unitPrefix} unitPrefixFormat The format function
   * @param {!import('ngeo/misc/filters.js').formatNumber} numberFormat The format function
   * @param {!import('ngeo/interaction/Measure.js').MeasureOptions=} options Options
   */
  constructor(unitPrefixFormat, numberFormat, options = {}) {
    super(options);
    let continueMsg;
    if (options.continueMsg !== undefined) {
      continueMsg = options.continueMsg;
    } else {
      continueMsg = document.createElement('span');
      continueMsg.textContent = 'Click to finish.';
    }
    /**
     * Message to show after the first point is clicked.
     * @type {Element}
     */
    this.continueMsg = continueMsg;

    /**
     * The format function
     * @type {import('ngeo/misc/filters.js').formatNumber}
     */
    this.numberFormat = numberFormat;

    /**
     * The format function
     * @type {import('ngeo/misc/filters.js').unitPrefix}
     */
    this.unitPrefixFormat = unitPrefixFormat;
  }

  /**
   * @inheritDoc
   */
  createDrawInteraction(style,
    source) {

    return new ngeoInteractionDrawAzimut({
      source,
      style
    });
  }

  /**
   * @inheritDoc
   */
  handleMeasure(callback) {
    if (!this.sketchFeature) {
      throw 'Missing sketchFeature';
    }
    const geom = this.sketchFeature.getGeometry();
    if (!(geom instanceof GeometryCollection)) {
      throw 'Missing geometry';
    }
    const line = geom.getGeometries()[0];
    if (!(line instanceof LineString)) {
      throw 'Missing line';
    }
    const output = getFormattedAzimutRadius(
      line, this.getMap().getView().getProjection(),
      this.decimals, this.precision, this.unitPrefixFormat, this.numberFormat);
    callback(output, line.getLastCoordinate());
  }

}

/**
 * Compute azimut from a 2 points line.
 * @param {import("ol/geom/LineString.js").default} line LineString.
 * @return {number} Azimut value.
 * @hidden
 */
export function getAzimut(line) {
  const coords = line.getCoordinates();
  const dx = coords[1][0] - coords[0][0];
  const dy = coords[1][1] - coords[0][1];
  const rad = Math.acos(dy / Math.sqrt(dx * dx + dy * dy));
  const factor = dx > 0 ? 1 : -1;
  return (factor * rad * 180 / Math.PI) % 360;
}


/**
 * Format measure output of azimut.
 * @param {!import("ol/geom/LineString.js").default} line LineString.
 * @param {number|undefined} decimals Decimals.
 * @param {!import('ngeo/misc/filters.js').formatNumber} format The format function.
 * @return {string} Formatted measure.
 * @private
 * @hidden
 */
function getFormattedAzimut(line, decimals, format) {
  const azimut = getAzimut(line);
  return `${format(azimut, decimals)}°`;
}

/**
 * Format measure output of azimut and radius.
 * @param {!import("ol/geom/LineString.js").default} line LineString.
 * @param {!import("ol/proj/Projection.js").default} projection Projection of the polygon coords.
 * @param {number|undefined} decimals Decimals.
 * @param {number|undefined} precision Precision.
 * @param {!import('ngeo/misc/filters.js').unitPrefix} formatLength The format function.
 * @param {!import('ngeo/misc/filters.js').formatNumber} formatAzimut The format function.
 * @return {string} Formatted measure.
 * @hidden
 */
export function getFormattedAzimutRadius(
  line, projection, decimals, precision, formatLength, formatAzimut) {

  let output = getFormattedAzimut(line, decimals, formatAzimut);

  output += `, ${getFormattedLength(line, projection, precision, formatLength)}`;

  return output;
}
