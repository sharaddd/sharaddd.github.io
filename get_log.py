import urllib.request
import json
import sys

url = "https://api.github.com/repos/sharaddd/sharaddd.github.io/actions/jobs/66746853243/logs"
req = urllib.request.Request(url)
try:
    with urllib.request.urlopen(req) as response:
        print(response.read().decode('utf-8'))
except urllib.error.HTTPError as e:
    print(f"HTTPError: {e.code}")
