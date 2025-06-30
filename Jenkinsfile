

pipeline {
    agent any
    environment {
        NODE_ENV = 'production'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/pavankumarsadasiva/Automation_testing.git'
            }
        }
        stage('Install Dependencies') {
            steps { 
                bat 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                bat 'npm run start'
            }
        }
    }
}
   