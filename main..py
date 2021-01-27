from apiclient.discovery import build
from flask import Flask, json, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
apiKey = "AIzaSyDkX9ATXIRT-Lv2QHYialFMSLT_dd0gCSY"
ytRes = build('youtube', 'v3', developerKey=apiKey)

maxDataAvailable = 10000

# Root
@app.route('/')
def index():
    data = ytRes.search().list(q='covid19 news', part='snippet',
                               type='video', maxResults=maxDataAvailable).execute()
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


# Video
@app.route('/video')
def video():
    video = request.args.get('search')
    data = ytRes.search().list(q=video, part='snippet',
                               type='video', maxResults=maxDataAvailable).execute()
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response

# Channel
@app.route('/channel')
def channel():
    channel = request.args.get('search')
    data = ytRes.search().list(q=channel, part='snippet',
                               type='channel', maxResults=maxDataAvailable).execute()
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


if __name__ == '__main__':
    app.run(app.run(host='192.168.43.57', port=8080, debug=True))
