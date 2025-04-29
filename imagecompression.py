
import json
import zlib
import base64
import numpy as np
import cv2
import matplotlib.pyplot as plt
from skimage.metrics import structural_similarity as ssim

class AdvancedImageCompressor:
    def __init__(self):
        pass

    def compress(self, input_image: str, output_file: str, compressed_image: str) -> None:
        """
        Compress an image and store it as an alphanumeric string.
        Also, output a compressed image representation.
        """
        # Load image
        image = cv2.imread(input_image, cv2.IMREAD_UNCHANGED)
        height, width, channels = image.shape if len(image.shape) == 3 else (*image.shape, 1)

        print(f"🔍 Original Image Size: {height}x{width}, Channels: {channels}")

        # Flatten image data
        image_data = image.tobytes()

        # Compress & encode to base64
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

        print(f"✅ Image compressed and saved to {output_file}")

        # Create a compressed image (lower quality representation)
        compressed_vis = cv2.resize(image, (width // 2, height // 2))
        cv2.imwrite(compressed_image, compressed_vis)
        print(f"✅ Compressed image saved as {compressed_image}")

    def decompress(self, input_file: str, output_image: str, original_image: str) -> None:
        """
        Decompress an image and reconstruct it.
        Calculate SSIM and PSNR scores.
        """
        # Load compressed data
        with open(input_file, "r") as f:
            metadata = json.load(f)

        # Extract metadata
        width = metadata["width"]
        height = metadata["height"]
        channels = metadata["channels"]
        compressed_data = metadata["compressed_data"]

        print(f"🔍 Metadata: Width={width}, Height={height}, Channels={channels}")

        # Decode & decompress
        decompressed_data = zlib.decompress(base64.b64decode(compressed_data))

        # Convert back to numpy array
        decompressed_image = np.frombuffer(decompressed_data, dtype=np.uint8).reshape((height, width, channels))

        # Save the decompressed image
        cv2.imwrite(output_image, decompressed_image)
        print(f"✅ Image decompressed and saved to {output_image}")

        # Calculate SSIM & PSNR
        original = cv2.imread(original_image, cv2.IMREAD_UNCHANGED)
        decompressed = cv2.imread(output_image, cv2.IMREAD_UNCHANGED)
        ssim_score = ssim(original, decompressed, win_size=3, channel_axis=-1 if channels > 1 else None)

        psnr_score = cv2.PSNR(original, decompressed)
        
        print(f"🔬 SSIM: {ssim_score:.4f}, PSNR: {psnr_score:.4f} dB")

        # Display the decompressed image
        plt.imshow(decompressed_image, cmap="gray" if channels == 1 else None)
        plt.title("Decompressed Image")
        plt.axis("off")
        plt.show()

# Running the compression and decompression
def main():
    compressor = AdvancedImageCompressor()
    image_path = "compressed_visual1.jpg"
    compressed_file = "compressed_image.txt"
    compressed_image = "compressed_visual2.jpg"
    decompressed_image = "decompressed_image.jpg"

    # Run compression
    compressor.compress(image_path, compressed_file, compressed_image)

    # Run decompression
    compressor.decompress(compressed_file, decompressed_image, image_path)

if __name__ == "__main__":
    main()