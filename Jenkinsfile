node {
    properties([disableConcurrentBuilds(), [$class: 'GithubProjectProperty', displayName: '', projectUrlStr: 'https://github.com/ANDigital/andigital-skills-mosaic-web/']])

    wrap([$class: 'AnsiColorBuildWrapper', colorMapName: 'xterm']) {
        stage ('Clear workspace') {
            step([$class: 'WsCleanup'])
        }

        try {
            stage ('Pull') {
                checkout scm
            }

            stage ('Build') {
                docker.image("node:6-alpine").inside("-u root") {
                    sh 'npm install --silent'
                    sh 'npm run build'
                }
            }

            //stage ('Unit test') {
            //    docker.image("node:6-alpine").inside("-u root") {
            //        sh 'npm run test'
            //    }
            //}

            def tagId = "${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
            def web_image_name = "andigital/skills-mosaic-web:" + tagId.replaceAll(/\//, "-")
            def web_app

            stage ('Build webapp image') {
                web_app = docker.build("${web_image_name}", '.')
            }

            if (env.BRANCH_NAME == 'dev' || env.BRANCH_NAME == 'master') {
                stage ('Push webapp') {
                    web_app.push()
                    web_app.push("${env.BRANCH_NAME}-latest")
                    currentBuild.description = "Tagged: ${web_image_name}"
                 }
            }

            stage ('Notify Slack') {
                withCredentials([[$class: 'StringBinding', credentialsId: 'ci-slack-url', variable: 'SLACK_URL']]) {
                    sh "curl -XPOST -d 'payload={ \"color\": \"good\", \"text\": \":white_check_mark: Build succeeded for ${env.JOB_NAME} ${env.BRANCH_NAME}\" }' ${env.SLACK_URL}"
                }
            }

        } catch (error) {
            withCredentials([[$class: 'StringBinding', credentialsId: 'ci-slack-url', variable: 'SLACK_URL']]) {
                sh "curl -XPOST -d 'payload={ \"color\": \"danger\", \"text\": \":warning: Build failed for ${env.JOB_NAME} ${env.BRANCH_NAME}: $error (see <${env.BUILD_URL}|the build logs>)\" }' ${env.SLACK_URL}"
            }

            throw error
        }
    }
}
