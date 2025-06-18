// App.tsx or App.js
import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function GestureApp() {
  const [gesture, setGesture] = useState('Waiting for gesture...');

  const handleMessage = (event: any) => {
    const data = event.nativeEvent.data;
    setGesture(data);
  };

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        onMessage={handleMessage}
        javaScriptEnabled
        style={styles.webview}
      />
      <View style={styles.overlay}>
        <Text style={styles.gestureText}>{gesture}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1, backgroundColor: 'black' },
  overlay: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 16,
    borderRadius: 12,
  },
  gestureText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});



const htmlContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>MediaPipe Hands</title>
    <style>
      body { margin: 0; overflow: hidden; background: black; }
      video { display: none; }
      canvas { position: absolute; top: 0; left: 0; }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"></script>
  </head>
  <body>
    <video class="input_video" autoplay playsinline></video>
    <canvas class="output_canvas"></canvas>
    <script>
      const videoElement = document.getElementsByClassName('input_video')[0];
      const canvasElement = document.getElementsByClassName('output_canvas')[0];
      const canvasCtx = canvasElement.getContext('2d');

      function resizeCanvas() {
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const hands = new Hands({
        locateFile: (file) => \`https://cdn.jsdelivr.net/npm/@mediapipe/hands/\${file}\`,
      });

      hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.7,
      });

      hands.onResults((results) => {
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(
          results.image, 0, 0, canvasElement.width, canvasElement.height);

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
          for (const landmarks of results.multiHandLandmarks) {
            drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 3 });
            drawLandmarks(canvasCtx, landmarks, { color: '#FF0000', lineWidth: 2 });

            // Simple Gesture Detection: Detect if all fingers are up (open hand)
            const isOpenHand = landmarks[8].y < landmarks[6].y &&
                               landmarks[12].y < landmarks[10].y &&
                               landmarks[16].y < landmarks[14].y &&
                               landmarks[20].y < landmarks[18].y;

            const message = isOpenHand ? "Open Hand Detected" : "Hand Detected";
            window.ReactNativeWebView?.postMessage(message);
          }
        } else {
          window.ReactNativeWebView?.postMessage("No Hand Detected");
        }

        canvasCtx.restore();
      });

      const camera = new Camera(videoElement, {
        onFrame: async () => await hands.send({ image: videoElement }),
        width: 640,
        height: 480,
      });

      camera.start();
    </script>
  </body>
</html>
`;
