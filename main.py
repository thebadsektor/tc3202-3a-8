from fastapi import FastAPI, File, UploadFile, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from mistralai.client import MistralClient
from gtts import gTTS
import io
import base64
import os

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development. In production, restrict origins.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_key = os.environ.get("MISTRAL_API_KEY", "HVRUfvU8yjn3p5D2YdAz6QWB0SQNZC3G")
if not api_key:
    raise ValueError("Missing MISTRAL_API_KEY in environment variables")

client = MistralClient(api_key=api_key)
model = "pixtral-12b-2409"

@app.post("/describe-image/")
async def describe_image(
    file: UploadFile = File(...),
    language: str = Query("en", enum=["en", "tl"])  # default is English
):
    try:
        # Read and encode image
        image_bytes = await file.read()
        encoded_image = base64.b64encode(image_bytes).decode('utf-8')

        # Prompt messages in multiple languages
        prompt_messages = {
            "en": "Describe this image accurately and in a child-friendly way.",
            "tl": "Ilarawan ang larawan para sa isang bata."
        }

        messages = [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt_messages[language]},
                    {"type": "image_url", "image_url": f"data:image/jpeg;base64,{encoded_image}"}
                ],
            }
        ]

        # Get the image description from Mistral
        response = client.chat(model=model, messages=messages)
        description = response.choices[0].message.content.strip()

        # Generate audio using gTTS (IN MEMORY)
        tts = gTTS(text=description, lang="tl" if language == "tl" else "en")
        audio_buffer = io.BytesIO()
        tts.write_to_fp(audio_buffer)
        audio_buffer.seek(0)

        # Convert MP3 binary data to base64
        audio_base64 = base64.b64encode(audio_buffer.read()).decode('utf-8')

        return JSONResponse(content={
            "description": description,
            "audio_base64": audio_base64
        })

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
