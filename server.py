from bottle import route
from bottle import run
from bottle import static_file
import paste

@route("/<staticFile>")
def serve_static_file():
    return static_file(staticFile, root='./')

@route('/<jsFile>')
def serve_js_files(jsFile):
    return static_file(jsFile, root='./')

if __name__ == "__main__":
    run(host="localhost", port=8080, debug=True, server='paste')