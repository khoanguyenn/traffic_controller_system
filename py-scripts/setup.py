import subprocess
import cv2
import time
rtmp_url = "rtmp://172.93.167.177:1935/live/97e9708e-b49a-40d8-bdba-51dab111237a"

cap = cv2.VideoCapture("y2mate.com - Relaxing highway traffic_480p.mp4")
#cap = cv2.VideoCapture("y2mate.com - Relaxing highway traffic_480p.mp4")

# gather video info to ffmpeg
fps = int(cap.get(cv2.CAP_PROP_FPS))
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH) / 2)
width = 640
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT) / 2)
height = 480

# command and params for ffmpeg
command = [
    "ffmpeg",
    "-y",
    "-f",
    "rawvideo",
    "-vcodec",
    "rawvideo",
    "-pix_fmt",
    "bgr24",
    "-s",
    "{}x{}".format(width, height),
    "-r",
    str(fps),
    "-i",
    "-",
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-preset",
    "ultrafast",
    "-f",
    "flv",
    rtmp_url,
]


# using subprocess and pipe to fetch frame data
p = subprocess.Popen(command, stdin=subprocess.PIPE)



while cap.isOpened():
    timer = time.time()
    time.sleep(0.04)
    ret, frame = cap.read()
    if not ret:
        print("frame read failed")
        break
    
    
    # YOUR CODE FOR PROCESSING FRAME HERE
    frame = cv2.resize(frame, (width, height), cv2.INTER_AREA)
    cv2.imshow('frame', frame)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    # write to pipe
    p.stdin.write(frame.tobytes())
    
    fps2 = int(1/(time.time() - timer));
    print(fps2)
cap.release()
cv2.destroyAllWindows()
