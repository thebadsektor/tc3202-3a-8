from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from mistralai.client import MistralClient
import base64
import os

app = FastAPI()

# Allow CORS so React can communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Get API key securely
api_key= os.environ[
    "MISTRAL_API_KEY"
] = "HVRUfvU8yjn3p5D2YdAz6QWB0SQNZC3G"
if not api_key:
    raise ValueError("Missing MISTRAL_API_KEY in environment variables")

client = MistralClient(api_key=api_key)
model = "pixtral-12b-2409"

@app.post("/describe-image/")
async def describe_image(file: UploadFile = File(...)):
    try:
        # Read and encode image
        image_bytes = await file.read()
        encoded_image = base64.b64encode(image_bytes).decode('utf-8')

        # Send to Mistral AI
        messages = [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": "Describe this image accurately and in a child-friendly way."},
                    {"type": "image_url", "image_url": f"data:image/jpeg;base64,{encoded_image}"}
                ],
            }
        ]

        response = client.chat(model=model, messages=messages)
        description = response.choices[0].message.content

        return {"description": description}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

