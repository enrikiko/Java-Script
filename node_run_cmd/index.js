var nrc = require('node-run-cmd');
nrc.run('docker-compose up', {cwd:'/Orchestration/ol-scs-app/build/docker/war'});
