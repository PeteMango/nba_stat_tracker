from flask import Flask
from .extensions import mongo
from .main import main

def create_app(default_config='myapp.settings'):
    app = Flask(__name__)
    app.config.from_object(default_config)

    mongo.init_app(app)
    app.register_blueprint(main)

    return app