import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { Camera } from 'expo-camera';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import * as handpose from '@tensorflow-models/handpose';
import * as tf from '@tensorflow/tfjs';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';

const TensorCamera = cameraWithTensors(Camera);

export default function App() {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [tfReady, setTfReady] = useState(false);
  const [gesture, setGesture] = useState<string>('Detecting...');

  let requestAnimationFrameId: number;
  let model: handpose.HandPose;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');

      await tf.ready();
      setTfReady(true);
      model = await handpose.load();
    })();

    return () => cancelAnimationFrame(requestAnimationFrameId);
  }, []);

  const handleCameraStream = (images, updatePreview, gl) => {
    const loop = async () => {
      const nextImageTensor = images.next().value;

      if (model && nextImageTensor) {
        const predictions = await model.estimateHands(nextImageTensor);

        if (predictions.length > 0) {
          const fingers = predictions[0].annotations;

          // Simple gesture check: all fingers extended = "Open Hand"
          const isOpenHand = Object.keys(fingers).length === 5;
          setGesture(isOpenHand ? 'Open Hand Detected' : 'Hand Detected');
        } else {
          setGesture('No Hand Detected');
        }
      }

      requestAnimationFrameId = requestAnimationFrame(loop);
    };
    loop();
  };

  if (hasPermission === null || !tfReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#069ED2" />
        <Text style={{ marginTop: 10 }}>Loading TensorFlow and Camera...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <TensorCamera
        style={styles.camera}
        type={Camera.Constants.Type.front}
        cameraTextureHeight={1920}
        cameraTextureWidth={1080}
        resizeHeight={200}
        resizeWidth={152}
        resizeDepth={3}
        autorender={true}
        onReady={handleCameraStream}
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>{gesture}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  camera: { flex: 1 },
  overlay: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 16,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
