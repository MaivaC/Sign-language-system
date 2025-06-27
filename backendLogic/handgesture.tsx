import React, {
  useEffect,
  useState,
} from 'react';

import {
  CameraType,
  CameraView,
  useCameraPermissions,
} from 'expo-camera';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import * as handpose from '@tensorflow-models/handpose';
import * as tf from '@tensorflow/tfjs';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';

const TensorCamera = cameraWithTensors(CameraView);

export default function CameraTensor() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [model, setModel] = useState<handpose.HandPose>();
  const [handDetected, setHandDetected] = useState(false);

  const textureDims = { height: 1200, width: 1600 };

  const tensorDims = { width: 152, height: 200 };

  useEffect(() => {
    const prepare = async () => {
      await tf.ready();
      const loadedModel = await handpose.load();
      setModel(loadedModel);
      console.log('TF & Handpose model loaded');
    };

    prepare();
  }, []);

  const handleCameraStream = (images: IterableIterator<tf.Tensor3D>) => {
    const loop = async () => {
      const nextImageTensor = images.next().value;
      if (model && nextImageTensor) {
        const predictions = await model.estimateHands(nextImageTensor);
        setHandDetected(predictions.length > 0);
        tf.dispose([nextImageTensor]);
      }
      requestAnimationFrame(loop);
    };
    loop();
  };

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <TensorCamera
        style={styles.camera}
        type={facing}
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeHeight={tensorDims.height}
        resizeWidth={tensorDims.width}
        resizeDepth={3}
        onReady={handleCameraStream}
        autorender
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
      {handDetected && <Text style={styles.detected}>✋ Hand Detected!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  detected: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    color: 'limegreen',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
