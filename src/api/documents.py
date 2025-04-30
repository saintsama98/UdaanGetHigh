from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Simulating decentralized storage with a local directory
STORAGE_DIR = "node_storage"
if not os.path.exists(STORAGE_DIR):
    os.makedirs(STORAGE_DIR)

def get_all_nodes():
    """Simulate getting all available nodes"""
    # In a real implementation, this would discover and return actual node addresses
    return ["node1", "node2", "node3"]

def query_node(node_id, query_params):
    """Simulate querying a specific node for documents"""
    # In a real implementation, this would make HTTP/P2P requests to actual nodes
    node_file = os.path.join(STORAGE_DIR, f"{node_id}_documents.json")
    
    if not os.path.exists(node_file):
        return []
        
    with open(node_file, 'r') as f:
        documents = json.load(f)
        
    # Apply filters based on query parameters
    filtered_docs = documents
    if query_params.get('type'):
        filtered_docs = [doc for doc in filtered_docs if doc['type'] == query_params['type']]
    if query_params.get('search'):
        search_term = query_params['search'].lower()
        filtered_docs = [doc for doc in filtered_docs if 
            search_term in doc['id'].lower() or
            search_term in doc['asset'].lower() or
            search_term in doc['owner'].lower()]
            
    return filtered_docs

@app.route('/api/documents', methods=['GET'])
def get_documents():
    """Fetch documents from all nodes based on query parameters"""
    query_params = {
        'type': request.args.get('type'),
        'search': request.args.get('search')
    }
    
    all_documents = []
    nodes = get_all_nodes()
    
    for node in nodes:
        node_documents = query_node(node, query_params)
        all_documents.extend(node_documents)
        
    # Sort documents by date (newest first)
    all_documents.sort(key=lambda x: datetime.strptime(x['date'], '%Y-%m-%d'), reverse=True)
    
    return jsonify({
        'status': 'success',
        'documents': all_documents
    })

@app.route('/api/documents/<document_id>', methods=['GET'])
def get_document(document_id):
    """Fetch a specific document from the nodes"""
    nodes = get_all_nodes()
    
    for node in nodes:
        node_file = os.path.join(STORAGE_DIR, f"{node}_documents.json")
        if os.path.exists(node_file):
            with open(node_file, 'r') as f:
                documents = json.load(f)
                for doc in documents:
                    if doc['id'] == document_id:
                        return jsonify({
                            'status': 'success',
                            'document': doc
                        })
    
    return jsonify({
        'status': 'error',
        'message': 'Document not found'
    }), 404

@app.route('/api/documents/store', methods=['POST'])
def store_document():
    """Store a new document in the network"""
    document = request.json
    
    # Validate required fields
    required_fields = ['id', 'type', 'asset', 'owner', 'status']
    if not all(field in document for field in required_fields):
        return jsonify({
            'status': 'error',
            'message': 'Missing required fields'
        }), 400
        
    # Add timestamp
    document['date'] = datetime.now().strftime('%Y-%m-%d')
    
    # Store in a random node (in real implementation, this would use a proper distribution algorithm)
    node_id = get_all_nodes()[0]
    node_file = os.path.join(STORAGE_DIR, f"{node_id}_documents.json")
    
    existing_documents = []
    if os.path.exists(node_file):
        with open(node_file, 'r') as f:
            existing_documents = json.load(f)
            
    existing_documents.append(document)
    
    with open(node_file, 'w') as f:
        json.dump(existing_documents, f, indent=2)
        
    return jsonify({
        'status': 'success',
        'message': 'Document stored successfully',
        'document': document
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000) 