
**Report on AI-Powered Chatbot Development for Campus Website Assistance**

**Introduction:**
In the contemporary era dominated by Artificial Intelligence (AI), our team delved into understanding the functionality of large language models and exploring the development of our AI using pre-trained models. With a focus on aiding students, particularly freshmen, and individuals who struggle with campus administrative tasks, we aimed to devise practical solutions through innovative technology.

**Initial Planning:**
Recognizing the upcoming advising week, we brainstormed simple yet effective ideas to support students and streamline campus operations. Initially, we considered creating a chatbot to facilitate navigation through the campus portal. However, upon evaluation, we found existing solutions lacking in efficiency and user experience.

**Project Scope and Challenges:**
To address the shortcomings of available options, we resolved to develop an AI assistant dedicated to the campus website. Challenges included the absence of an official Workday API, necessitating alternative approaches for integration. Consequently, we opted to design a Chrome extension, ensuring adaptability for future enhancements.

**Implementation Process:**
Our project commenced with backend development, focusing on data preprocessing and integration. Initially, we converted PDF documents into text format, enabling easier manipulation. Despite encountering time constraints, we utilized various models to refine and filter the extracted data, laying the groundwork for future improvements.

**Key Features Developed:**
1. **Semantic Index Building:** We implemented a process to split large documents into smaller, more manageable sections. These segments were then indexed semantically, facilitating efficient retrieval of relevant information.
2. **Question-Answering Framework:** Leveraging the semantic index, we devised a question-answering mechanism. Users could pose queries related to campus procedures, and the system would provide accurate responses by traversing the indexed data.
3. **User-Specific Filtering:** Recognizing the diverse user base, we envisioned incorporating filters to tailor responses based on user roles (e.g., student, professor). While not fully implemented, this feature represents a potential enhancement for future iterations.

**Prototype Development and Testing:**
To validate our progress, we initially deployed a static website version of the chatbot, utilizing Flask for backend functionality. This allowed us to verify the functionality and assess the effectiveness of our algorithms. Subsequently, we transitioned the solution into a Chrome extension, ensuring seamless integration with users' browsing experiences.

**Conclusion:**
In conclusion, our endeavor to develop an AI-powered chatbot for campus website assistance underscores the potential of leveraging advanced technologies to enhance user experiences and streamline administrative processes. While our project remains ongoing, the progress made thus far showcases the feasibility of our approach and sets the stage for future innovations in AI-driven campus services.

By adhering to a structured development process and overcoming inherent challenges, we remain committed to refining our solution and delivering tangible benefits to the campus community.



**Challenges Faced during Project Implementation:**

1. **Data Gathering:**
   - Pre-Trained Model Utilization: Employing a pre-trained model for text analysis necessitated meticulous data preprocessing to eliminate extraneous symbols. This task proved challenging, especially when dealing with text extracted from PDFs sourced from the Calvin website. Issues arose due to embedded images within sentences and the presence of duplicate content.
   
2. **Integration with Flask:**
   - Learning Curve: Integration with Flask for data transmission between Python and Javascript presented a learning curve for the team. Ensuring seamless communication between different components of the project required dedicated effort and familiarity with Flask's functionality.
   
3. **Model Selection and Accessibility:**
   - Exploration of Alternative Models: The project encountered a hurdle regarding model accessibility, as the initially considered open API was not feasible due to cost implications. Consequently, the team had to explore alternative models for text analysis. Upon recommendation by Professor Ken Arnold, the team adopted the Flan2 model, which met the project requirements.
   
4. **Development of Google Chrome Extension:**
   - Transition to Streamlit: Initially, the project started with utilizing Streamlit for website development, given its convenience in building Python-based websites. However, challenges or limitations were encountered during the development process, necessitating a transition to Google extension development for enhanced functionality and user experience.





** tools used ** 
Python
langchain
huggingface_hub
sentence_transformers
faiss-cpu
flask 
