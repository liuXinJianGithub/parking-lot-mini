pipeline {
    agent none

    stages {
        stage('Build') {
            agent {
                label 'master'
            }
            steps {
                sh '''
                    echo $PATH
                    node -v
                    npm -v
                    npm install
                    npm run build
                '''
            }
        }
        stage('Deploy Dev') {
            agent {
                label 'master'
            }
            steps {
                sh '''
                    lib_name=todo2.tar.gz
                    www_path=/usr/share/nginx/mobileparkinglot
                    cd dist
                    tar -zcvf ${lib_name} *
                    mv ${lib_name} ${www_path}
                    cd ${www_path}
                    tar -zxvf ${www_path}/${lib_name} -C ./
                '''
            }
        }

        stage('Approve of Deploy Prod') {
          steps {
            input message: 'deploy to Prod?'
          }
        }

        stage('Deploy Prod') {
            agent {
                label 'master'
            }
            steps {
                sh '''
                    echo 'exit done'
                '''
            }
        }
    }
}
