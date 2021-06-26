import socketio
import threading
import time
import json
import random

sio = socketio.Client()


def worker_handler():
    while True:
        time.sleep(1)
        data = {
            "deviceId": "0452de3b-075f-48bd-bcdd-9b629e329c5b",
            "metadata": {"count": random.randint(100, 200), "time": time.time()},
        }
        sio.emit("message", json.dumps(data))


worker = threading.Thread(target=worker_handler)


@sio.event
def connect():
    print("I'm connected!")
    worker.start()


@sio.event
def message(data):
    print("I received a message!")


sio.connect("http://localhost:5050")
sio.wait()
