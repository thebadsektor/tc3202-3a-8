from fastapi import FastAPI, File, UploadFile, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from mistralai.client import MistralClient
from gtts import gTTS
from dotenv import load_dotenv
import io
import base64
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #need for update?
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()

api_key = os.getenv("MISTRAL_API_KEY")
if not api_key:
    raise ValueError("Missing MISTRAL_API_KEY in environment variables")

client = MistralClient(api_key=api_key)
model = "pixtral-12b-2409"

@app.post("/describe-image/")
async def describe_image(
    file: UploadFile = File(...),
    language: str = Query("en", enum=["en", "tl"])
):
    try:
        if not file.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="File must be an image.")

        image_bytes = await file.read()
        encoded_image = base64.b64encode(image_bytes).decode('utf-8')

        prompt_messages = {
            "en": "Create a short but meaningful story about this image, make it understandable for a child.",
            "tl": "Gumawa ng isang maikling kwentong pambata gamit ang larawang ito."
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

        response = client.chat(model=model, messages=messages)
        description = response.choices[0].message.content.strip()

        tts = gTTS(text=description, lang=language)
        audio_buffer = io.BytesIO()
        tts.write_to_fp(audio_buffer)
        audio_buffer.seek(0)

        audio_base64 = base64.b64encode(audio_buffer.read()).decode('utf-8')

        return JSONResponse(content={
            "description": description,
            "audio_base64": audio_base64
        })

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
