module.exports = {
  apps: [{
    name: 'pickprank-app',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-200-21-207.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/jsk-pickprank-key-pair.pem',
      ref: 'origin/master',
      repo: 'git@github.com:johnnyconroy/pickprank.git',
      path: '/home/ubuntu/pickprank-app',
      'post-setup': 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}
