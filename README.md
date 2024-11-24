# README
## Inspiration
Since COVID, there has been a growing interest in travel, with an increasing demand for authentic local experiences. However, language barriers often restrict access to localized, language-specific information. At the same time, the rapid advancements in LLM models, particularly Llama, have opened up new possibilities for overcoming these challenges and enhancing the travel experience.
## What it does
Our platform enables users to input their queries, leveraging Llama and web search to generate tailored recommendations for spots that match their interests. The system focuses on uncovering hidden gems in the community, such as family-owned restaurants offering authentic local cuisine and local craft shops. It retrieves and summarizes reviews in the local language from Google Maps for each recommended spot, providing users with insights. Additionally, the platform generates a localized rating based on these reviews to help users identify and avoid tourist traps. Users can save their favorite recommendations, which can be used to create personalized itineraries with weather data from the Open-Meteo API and transportation data from the Google Directions API.
## Impacts:
- Economical:
  - Uncovering hidden gems places that are popular among locals but less visible to mainstream tourism
  - Supporting local businesses by providing tourists fresh and authentic experiences that go beyond guidebooks
- Cultural:
  - Enabling users to experience authentic local culture and foster meaningful interactions with communities
## Challenges we ran into
- Initially, we planned to focus solely on the local spot recommendation feature. However, we later decided to incorporate an itinerary feature, which led to challenges in integrating the backend with the frontend due to time constraints. Fortunately, we managed to make it work.
- The pipeline execution took significantly longer than anticipated. After investigating the issue, we discovered that it was caused by multiple HTTP requests being sent simultaneously.
## Accomplishments that We're Proud of
- Developed and successfully implemented various functionalities using Llama 3 models, including local spot recommendations, user review retrieval, and personalized itinerary generation.
- Successfully deployed our web app and RAG pipeline to GCP, seamlessly integrating both components.
## What's Next
- Interactive itinerary generation: Dynamically adjust the itinerary based on user input and provide integrated transport and accessibility information.
- Optimize web scraping: Store redundant scraped results in the database to avoid redundant web scraping if the data already exists in the database
- Enable user reviews: Enable users to submit reviews for visited spots, reducing reliance on Google reviews.

