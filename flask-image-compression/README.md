# Flask Image Compression Project

This project provides a Flask web application that allows users to upload images, which are then processed through an image compression pipeline. The compressed data is stored in a database for further use.

## Project Structure

```
flask-image-compression
├── app
│   ├── __init__.py          # Initializes the Flask application and sets up configurations
│   ├── routes.py            # Defines the routes for image upload and processing
│   ├── models.py            # Contains database models for storing image metadata
│   ├── utils
│   │   ├── __init__.py      # Initializes the utils package
│   │   └── compression.py    # Contains the image compression logic
├── migrations                # Directory for database migrations
├── instance
│   └── config.py            # Configuration settings for the Flask application
├── requirements.txt          # Lists the project dependencies
├── .env                      # Environment variables for sensitive information
├── run.py                    # Entry point for running the Flask application
└── README.md                 # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd flask-image-compression
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**
   ```
   pip install -r requirements.txt
   ```

4. **Configure the application:**
   - Update the `instance/config.py` file with your database connection details and any other necessary configurations.

5. **Run database migrations:**
   ```
   flask db upgrade
   ```

6. **Start the application:**
   ```
   python run.py
   ```

## Usage

- Navigate to `http://localhost:5000` in your web browser.
- Use the provided endpoint to upload an image.
- The application will compress the image and store the compressed data in the database.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.