

pipeline {
    agent any
    environment {
        NODE_ENV = 'staging'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/pavankumarsadasiva/Automation_testing.git'
            }
        }
        stage('Install Dependencies') {
            steps { 
                bat 'npm install --production=false'
            }
        }
        stage('Run DoctorConsultationSearch File Tests') {
            steps {
                bat 'npm run test-doctor-consultation-Booking'


            }
        }


    }
}
   