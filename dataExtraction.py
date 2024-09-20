import json

# Step 1: Read the JSON file
with open('TacoBellYorkGoogleReviews.json', 'r') as file:
    data = json.load(file)

# Step 2: Define the keys you want to extract
keys_to_extract = [
    'review_text', 'review_rating', 'date'
]

# Step 3: Extract specific key-value pairs, but only include reviews where review_text is not null
extracted_data = []
for review in data:
    if review.get('review_text'):  # Check if review_text is not null
        extracted_review = {key: review.get(key) for key in keys_to_extract}
        extracted_data.append(extracted_review)

# Step 4: Store the extracted data to a new file
with open('extractedData.txt', 'w') as outfile:
    json.dump(extracted_data, outfile, indent=4)