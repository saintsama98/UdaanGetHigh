from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class CompressedImage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    original_filename = db.Column(db.String(255), nullable=False)
    compressed_data = db.Column(db.Text, nullable=False)
    width = db.Column(db.Integer, nullable=False)
    height = db.Column(db.Integer, nullable=False)
    channels = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<CompressedImage {self.original_filename}>'