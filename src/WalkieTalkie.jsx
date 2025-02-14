import React, { useState, useRef } from 'react';

const WalkieTalkie = () => {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    console.log("Starting recording");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start();
      setRecording(true);
      mediaRecorderRef.current.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        audioChunksRef.current = [];
        console.log("Recording stopped, audio URL:", url);
      };
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    console.log("Stopping recording");
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Walkie Talkie</h2>
      <div className="mb-4">
        <button
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
          className="cursor-pointer bg-purple-500 px-4 py-2 rounded"
        >
          {recording ? 'Recording...' : 'Hold to Talk'}
        </button>
      </div>
      {audioUrl && (
        <div>
          <audio controls src={audioUrl} className="w-full" />
        </div>
      )}
    </div>
  );
};

export default WalkieTalkie;