import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import Component from '@glimmer/component';

export default class ParameterizedChild extends Component {
  @alias('job.decodedPayload') payload;

  @computed('payload')
  get payloadJSON() {
    let json;
    try {
      json = JSON.parse(this.payload);
    } catch (e) {
      // Swallow error and fall back to plain text rendering
    }
    return json;
  }
}
