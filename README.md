
# Election Results Frontend

## Project Overview

**Title:** Election Results Frontend

**Description:** 
This project is a frontend application developed using Angular, designed to visualize and manage election results. The primary objective is to create an interactive and user-friendly interface that displays election data, allows CSV  file uploads to save election results, and shows detailed results by constituency and overall totals. The goal of this project is to demonstrate skills in frontend development, UI/UX design, and integration with backend services.

**Objective:** 
This project is part of an exercise to evaluate skills, decision-making, and the ability to work within a timebox.

## Technologies Used

**Frontend:**
- Angular
- TypeScript
- Angular Material
- NgxFileDrop (for file uploads)
- SCSS (Sass)
- HTML5
- NGINX (for deployment)

**CI Tools:**
- Docker (for containerization)
- Docker Compose

## Project Setup

### Prerequisites

Before setting up the project, ensure that the following software is installed on your machine:

- Node.js (v14.x or higher)
- Angular CLI (v11.x or higher) - Here we used 17.
- Docker (for containerization and deployment)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/PranavMS007/election-results-frontend.git
   cd election-results-frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   If there are any environment variables required, create a `.env` file in the root directory and define the variables accordingly.

### Running the Application

1. **Start the Development Server:**
   ```bash
   ng serve
   ```
   This will start the application on `http://localhost:4200/`.

2. **Accessing the Application:**
   Open your browser and navigate to `http://localhost:4200/` to view the application.

### Docker Setup

To run the application using Docker:

1. **Build and Run the Docker Container:**
   ```bash
   docker-compose up --build
   ```

2. **Access the Application:**
   The application will be available at `http://localhost:80/` by default.

## Usage

**How to Use the Application:**

- **File Upload:** Upload daily election result CSV files to save data in DB.
- **Dashboard:** View election results, including party-wise vote distribution and the winning party for each constituency.
## UI screenshots
1. Dashboard
![Dashboard]

2. Consituency-result
![consituency-result]

3. CSV upload
![CSV upload]

## Known Issues and Limitations

- **Unfinished Features:** The pagination of election results might need further refinement.
- **Bugs:** No major bugs have been identified at this stage. However, extensive testing is recommended before production deployment.

## Future Improvements

### To-Do List
- Implement a more robust CSV parsing mechanism.
- Add more detailed error handling and validation for file uploads.
- Improve UI/UX based on user feedback.

### Scalability Considerations
- Consider server-side pagination for large datasets.
- Optimize component rendering to handle larger data loads.


## Time Spent and Experience

**Time Spent:** 
- Approximately 16-20 hours.

**Experience:** 
- First time using NgxFileDrop for file uploads.
- Gained more experience in using Docker for Angular applications.
- Familiar with Angular and TypeScript.

