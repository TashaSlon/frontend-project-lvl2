#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

const command = (filepath1, filepath2) => {
		console.log(filepath1, filepath2);
};

program
	.description('Compares two configuration files and shows a difference.')
	.version('0.1.0')
	.option('-f, --format <type>', 'output format')
	.arguments('<filepath1> <filepath2>')
	.action(command);
program.parse();