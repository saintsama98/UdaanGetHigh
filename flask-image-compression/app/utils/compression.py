from flask import current_app
from werkzeug.utils import secure_filename
import os
import json
import zlib
import base64
import cv2

class AdvancedImageCompressor:
    def compress(self, input_image: str, output_file: str, compressed_image: str) -> None:
        """
        Compress an image and save the metadata and a visual representation.
        """
        # Load the image
        image = cv2.imread(input_image, cv2.IMREAD_UNCHANGED)
        height, width, channels = image.shape if len(image.shape) == 3 else (*image.shape, 1)

        # Flatten image data
        image_data = image.tobytes()

        # Compress and encode to base64
        compressed_data = base64.b64encode(zlib.compress(image_data)).decode("utf-8")

        # Save metadata
        metadata = {
            "width": width,
            "height": height,
            "channels": channels,
            "compressed_data": compressed_data,
        }

        with open(output_file, "w") as f:
            json.dump(metadata, f)

        # Create a compressed visual representation
        compressed_vis = cv2.resize(image, (width // 2, height // 2))
        cv2.imwrite(compressed_image, compressed_vis)