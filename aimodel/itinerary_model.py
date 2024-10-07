# ai-model/itinerary_model.py

from langchain import OpenAI
from langchain.prompts import PromptTemplate
import os
import dotenv

# Load environment variables from .env
dotenv.load_dotenv()

# Initialize OpenAI API Key
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# Define a function that uses LangChain with OpenAI for itinerary generation
def generate_itinerary(user_data, destination):
    # Create an OpenAI object with the API key
    openai_model = OpenAI(api_key=OPENAI_API_KEY, temperature=0.7)

    # Define a prompt template for generating itineraries
    template = """
    User prefers {vibe} travel and has visited {previous_destinations}. 
    Their favorite activities include {favorite_activities}. 
    Create a 3-day personalized travel itinerary for a trip to {destination} 
    that fits their preferences. Include activities, budget estimates, and accommodation.
    """
    prompt = PromptTemplate(
        input_variables=["vibe", "previous_destinations", "favorite_activities", "destination"],
        template=template,
    )

    # Format the prompt with user data
    formatted_prompt = prompt.format(
        vibe=user_data["vibe"],
        previous_destinations=user_data["previous_destinations"],
        favorite_activities=user_data["favorite_activities"],
        destination=destination,
    )

    # Use the OpenAI model to generate the itinerary
    response = openai_model(formatted_prompt)
    return response

# For testing
if __name__ == "__main__":
    user_data_example = {
        "vibe": "Adventure",
        "previous_destinations": "Paris, Bali",
        "favorite_activities": "hiking, beach",
    }
    destination_example = "Tokyo"
    itinerary = generate_itinerary(user_data_example, destination_example)
    print(itinerary)
