import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Changed useHistory to useNavigate

const VideoCallPage = () => {
    const { roomCode } = useParams(); // Get the roomCode from the URL
    const navigate = useNavigate(); // Hook to handle navigation
    const [isCallStarted, setIsCallStarted] = useState(false);
    const [isMicMuted, setIsMicMuted] = useState(false);
    const [isCameraOff, setIsCameraOff] = useState(false);
    const [localStream, setLocalStream] = useState(null);
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const [peerConnection, setPeerConnection] = useState(null);

    // Constants for WebRTC signaling (may need a signaling server like Socket.IO for production)
    const ICE_SERVERS = {
        iceServers: [
            {
                urls: 'stun:stun.l.google.com:19302', // Google's public STUN server
            },
        ],
    };

    // Function to get media (camera & microphone)
    const getUserMedia = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });

            setLocalStream(stream);

            if (localVideoRef.current) {
                localVideoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Error accessing media devices.', error);
        }
    };

    // Request camera and microphone permissions when the component is loaded
    useEffect(() => {
        // Request permissions and set up the media stream
        getUserMedia();

        return () => {
            // Clean up the stream when the component unmounts
            if (localStream) {
                localStream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    // Start the call by creating a peer connection and adding local stream
    const startCall = () => {
        if (!localStream) {
            console.error('Local stream is not available!');
            return;
        }

        const pc = new RTCPeerConnection(ICE_SERVERS);
        setPeerConnection(pc);

        // Add local stream to the peer connection
        localStream.getTracks().forEach(track => pc.addTrack(track, localStream));

        // When remote stream is added to the connection, show it on the remote video element
        pc.ontrack = (event) => {
            if (remoteVideoRef.current) {
                remoteVideoRef.current.srcObject = event.streams[0];
            }
        };

        // Create an offer and set it as the local description
        pc.createOffer()
            .then(offer => pc.setLocalDescription(offer))
            .then(() => {
                // Send the offer to the remote peer (via a signaling server)
                console.log('Offer sent:', pc.localDescription);
            })
            .catch(err => console.error('Error creating offer:', err));

        setIsCallStarted(true);
    };

    // End the call and clean up
    const endCall = () => {
        // Close the peer connection if it exists
        if (peerConnection) {
            peerConnection.close();
            setPeerConnection(null);
        }
    
        // Check if localStream exists and stop its tracks (audio and video)
        if (localStream) {
            localStream.getTracks().forEach(track => {
                track.stop();  // Stop both audio and video tracks
            });
            setLocalStream(null);  // Reset the local stream
        }
    
        // Update state to indicate call has ended
        setIsCallStarted(false);
    
        // Ensure mic and camera states are updated to reflect that they are off
        setIsMicMuted(true);  // Mute mic after call ends
        setIsCameraOff(true); // Turn off camera after call ends
    
        // Navigate back to the previous page (or home page)
        navigate(-1); // Navigate back to the previous page (adjust as needed)
    };
    


    // Toggle microphone on/off
    const toggleMic = () => {
        if (localStream) {
            localStream.getTracks().forEach(track => {
                if (track.kind === 'audio') {
                    track.enabled = !track.enabled;
                    setIsMicMuted(!track.enabled);
                }
            });
        }
    };

    // Toggle camera on/off
    const toggleCamera = () => {
        if (localStream) {
            localStream.getTracks().forEach(track => {
                if (track.kind === 'video') {
                    track.enabled = !track.enabled;
                    setIsCameraOff(!track.enabled);
                }
            });
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4">
                <h1 className="text-xl font-semibold mb-4">Video Call - Room: {roomCode}</h1>

                <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                        <h2 className="text-center">Your Video</h2>
                        <video
                            ref={localVideoRef}
                            autoPlay
                            muted
                            className="w-full rounded-lg shadow-md"
                        ></video>
                    </div>
                    <div className="w-1/2 ml-2">
                        <h2 className="text-center">Remote Video</h2>
                        <video
                            ref={remoteVideoRef}
                            autoPlay
                            className="w-full rounded-lg shadow-md"
                        ></video>
                    </div>
                </div>

                <div className="flex justify-center space-x-4 mb-4">
                    <button
                        onClick={toggleMic}
                        className={`py-2 px-4 rounded-md ${isMicMuted ? 'bg-gray-500' : 'bg-green-500'} text-white`}
                    >
                        {isMicMuted ? 'Unmute Microphone' : 'Mute Microphone'}
                    </button>
                    <button
                        onClick={toggleCamera}
                        className={`py-2 px-4 rounded-md ${isCameraOff ? 'bg-gray-500' : 'bg-blue-500'} text-white`}
                    >
                        {isCameraOff ? 'Turn Camera On' : 'Turn Camera Off'}
                    </button>
                </div>

                <div className="flex justify-center space-x-4">
                    {!isCallStarted ? (
                        <button
                            onClick={startCall}
                            className="bg-green-500 text-white py-2 px-4 rounded-md"
                        >
                            Start Call
                        </button>
                    ) : (
                        <button
                            onClick={endCall}
                            className="bg-red-500 text-white py-2 px-4 rounded-md"
                        >
                            End Call
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoCallPage;
