import '@tensorflow/tfjs-react-native';

import * as handpose from '@tensorflow-models/handpose';
import * as tf from '@tensorflow/tfjs';

export async function loadModel() {
  await tf.ready();
  return await handpose.load();
}
