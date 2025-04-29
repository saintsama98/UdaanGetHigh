import os
import requests
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from app.utils.compression import AdvancedImageCompressor

routes = Blueprint("routes", __name__)

UPLOAD_FOLDER = "uploads"
COMPRESSED_FOLDER = "compressed"

# Ensure folders exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(COMPRESSED_FOLDER, exist_ok=True)

@routes.route("/compress", methods=["POST"])
def compress_image():
    """
    API endpoint to upload an image, compress it, and send the compressed data to another service.
    """
    if "image" not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image_file = request.files["image"]
    if image_file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    # Save the uploaded image
    filename = secure_filename(image_file.filename)
    input_path = os.path.join(UPLOAD_FOLDER, filename)
    image_file.save(input_path)

    # Compress the image
    compressor = AdvancedImageCompressor()
    compressed_file = os.path.join(COMPRESSED_FOLDER, f"{filename}.json")
    compressed_image = os.path.join(COMPRESSED_FOLDER, f"compressed_{filename}")
    compressor.compress(input_path, compressed_file, compressed_image)

    # Read compressed data
    with open(compressed_file, "r") as f:
        compressed_data = f.read()

    # Send compressed data to another service (e.g., Express.js backend)
    express_url = "http://localhost:5000/api/store"  # Replace with your Express.js endpoint
    response = requests.post(express_url, json={"compressed_data": compressed_data})

    if response.status_code == 200:
        return jsonify({"message": "Image compressed and sent successfully"}), 200
    else:
        return jsonify({"error": "Failed to send compressed data"}), 500