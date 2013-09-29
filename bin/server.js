#!/usr/bin/env node
'use strict';

/**
 * Binary to run deployment server.
 * (C) 2013 Alex Fernández.
 */

// requires
var args = require('optimist').argv;
var server = require('../lib/server');

// init
if(args.help || args.h)
{
	help();
}
if(args._.length > 0)
{
    if(!isNaN(args._[0]))
	{
        args.port = parseInt(args._[0], 10);
    }
	else
	{
        help();
    }
}
args.directory = args.dir;
args.testDirectory = args.testdir;
args.deploymentCommand = args.exec;
server.startServer(args);

/**
 * Show online help.
 */
function help()
{
	console.log('Usage: deployment-server [options] [port]');
	console.log('  starts a deployment server on the given port, default 3470.');
	console.log('Options are:');
	console.log('    --token [token]   Security token for the URL');
	console.log('    --dir [path]      Directory to deploy to');
	console.log('    --testdir [path]  Directory with a test environment');
	console.log('    --exec [command]  Command to run after success');
	console.log('    --quiet           Do not show log messages');
	process.exit(0);
}

