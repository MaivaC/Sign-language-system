import React, { useState } from "react";
import { View, Button, Text, Alert, Platform } from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import axios from "axios";

export default function SpeechToTextExpo() {
  const [recording, setRecording] = useState(null);
  const [transcription, setTranscription] = useState("");
  
  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording:", err);
    }
  }

  async function stopRecording() {
    if (!recording) return;
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);
      console.log("Recording stopped and saved at:", uri);
      uploadAudio(uri);
    } catch (err) {
      console.error("Failed to stop recording:", err);
    }
  }

  async function uploadAudio(uri) {
    try {
      const fileInfo = await FileSystem.getInfoAsync(uri);
      const formData = new FormData();
      formData.append("audio", {
        uri,
        type: "audio/x-wav",
        name: "recording.wav",
      });

      const response = await axios.post(
        "http://<YOUR_BACKEND_IP>:5000/transcribe",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setTranscription(response.data.transcription);
    } catch (err) {
      console.error("Upload failed:", err);
      Alert.alert("Error", "Failed to transcribe audio.");
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
      {transcription ? (
        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Transcribed Text:
          </Text>
          <Text>{transcription}</Text>
        </View>
      ) : null}
    </View>
  );
}
