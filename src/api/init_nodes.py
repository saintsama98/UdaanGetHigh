import json
import os
from datetime import datetime, timedelta

# Sample data for each node
node1_data = [
    {
        "id": "REG-001",
        "type": "Asset Based",
        "asset": "Flat 101, Green Residency",
        "owner": "Amit Sharma",
        "date": "2024-04-28",
        "status": "Active",
        "pdfUrl": "/documents/REG-001.pdf"
    },
    {
        "id": "REG-002",
        "type": "Asset Based",
        "asset": "Shop 12, City Mall",
        "owner": "Priya Verma",
        "date": "2024-04-27",
        "status": "Pending",
        "pdfUrl": "/documents/REG-002.pdf"
    },
    {
        "id": "REG-003",
        "type": "Asset Based",
        "asset": "Plot 45, Sector 9",
        "owner": "Rohit Singh",
        "date": "2024-04-26",
        "status": "Completed",
        "pdfUrl": "/documents/REG-003.pdf"
    }
]

node2_data = [
    {
        "id": "FOL-001",
        "type": "Follower Based",
        "asset": "Commercial Complex A1",
        "owner": "Sanjay Mehta",
        "date": "2024-04-28",
        "status": "Active",
        "pdfUrl": "/documents/FOL-001.pdf"
    },
    {
        "id": "FOL-002",
        "type": "Follower Based",
        "asset": "Retail Space B2",
        "owner": "Meera Patel",
        "date": "2024-04-27",
        "status": "Pending",
        "pdfUrl": "/documents/FOL-002.pdf"
    },
    {
        "id": "FOL-003",
        "type": "Follower Based",
        "asset": "Office Tower Z9",
        "owner": "Vikram Shah",
        "date": "2024-04-26",
        "status": "Completed",
        "pdfUrl": "/documents/FOL-003.pdf"
    }
]

node3_data = [
    {
        "id": "AOR-001",
        "type": "AOR Based",
        "asset": "Industrial Plot X1",
        "owner": "Arun Joshi",
        "date": "2024-04-28",
        "status": "Active",
        "pdfUrl": "/documents/AOR-001.pdf"
    },
    {
        "id": "AOR-002",
        "type": "AOR Based",
        "asset": "Warehouse Y2",
        "owner": "Kavita Singh",
        "date": "2024-04-27",
        "status": "Pending",
        "pdfUrl": "/documents/AOR-002.pdf"
    },
    {
        "id": "AOR-003",
        "type": "AOR Based",
        "asset": "Factory Complex Z3",
        "owner": "Suresh Kumar",
        "date": "2024-04-26",
        "status": "Active",
        "pdfUrl": "/documents/AOR-003.pdf"
    }
]

def generate_more_documents(base_docs, count=25):
    """Generate more documents based on the base documents"""
    all_docs = []
    base_date = datetime.now()
    
    for i in range(count):
        # Use modulo to cycle through base docs
        base_doc = base_docs[i % len(base_docs)].copy()
        
        # Modify the document
        doc_num = str(i + 1).zfill(3)
        base_doc["id"] = f"{base_doc['id'][:4]}{doc_num}"
        base_doc["asset"] = f"{base_doc['asset']} {chr(65 + (i % 26))}{i + 1}"
        base_doc["owner"] = f"{base_doc['owner']} {chr(65 + (i % 26))}"
        base_doc["date"] = (base_date - timedelta(days=i)).strftime('%Y-%m-%d')
        base_doc["status"] = ["Active", "Pending", "Completed"][i % 3]
        base_doc["pdfUrl"] = f"/documents/{base_doc['id']}.pdf"
        
        all_docs.append(base_doc)
    
    return all_docs

def init_nodes():
    """Initialize the nodes with sample data"""
    storage_dir = "node_storage"
    if not os.path.exists(storage_dir):
        os.makedirs(storage_dir)
    
    # Generate more documents for each node
    node1_docs = generate_more_documents(node1_data)
    node2_docs = generate_more_documents(node2_data)
    node3_docs = generate_more_documents(node3_data)
    
    # Save documents to node storage
    nodes_data = {
        "node1": node1_docs,
        "node2": node2_docs,
        "node3": node3_docs
    }
    
    for node_id, docs in nodes_data.items():
        file_path = os.path.join(storage_dir, f"{node_id}_documents.json")
        with open(file_path, 'w') as f:
            json.dump(docs, f, indent=2)
        print(f"Initialized {node_id} with {len(docs)} documents")

if __name__ == "__main__":
    init_nodes() 